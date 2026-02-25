import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, MapPin, ArrowLeft, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { businesses } from '../data';

const initialMessages = [
    {
        id: 1,
        type: 'bot',
        text: 'Bonjour ! 👋 Je suis Lexi, votre assistante Yes-Africa. Puis-je vous aider ? Que recherchez-vous au Sénégal ?'
    }
];

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(initialMessages);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const speakGreeting = () => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance("Bonjour, je suis lexi. Puis-je vous aider cher ami ?");
            utterance.lang = 'fr-FR';
            window.speechSynthesis.speak(utterance);
        }
    };

    useEffect(() => {
        const handleOpen = () => {
            setIsOpen(true);
            speakGreeting();
        };
        window.addEventListener('open-chatbot', handleOpen);
        return () => window.removeEventListener('open-chatbot', handleOpen);
    }, []);

    const findMatches = (query) => {
        const q = query.toLowerCase();
        return businesses.filter(b =>
            b.name.toLowerCase().includes(q) ||
            b.category.toLowerCase().includes(q) ||
            b.description.toLowerCase().includes(q)
        ).slice(0, 3);
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;
        const userMsg = { id: Date.now(), type: 'user', text: inputValue };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            const matches = findMatches(userMsg.text);
            const botResponse = matches.length > 0 ? "Voici quelques adresses pour vous :" : "Je n'ai pas trouvé, essayez autre chose !";
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                type: 'bot',
                text: botResponse,
                recommendations: matches
            }]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="chatbot-fullscreen"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    style={{ zIndex: 10000 }}
                >
                    {/* Header */}
                    <div style={{ background: '#111', color: 'white', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white' }}><ArrowLeft /></button>
                            <img src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?auto=format&fit=crop&q=80&w=150&h=150" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                            <div>
                                <div style={{ fontSize: '14px', fontWeight: 800 }}>Lexi Assistant AI</div>
                                <div style={{ fontSize: '10px', color: '#4ADE80', fontWeight: 900 }}>EN LIGNE</div>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white' }}><X /></button>
                    </div>

                    {/* Messages Body */}
                    <div style={{ flex: 1, overflowY: 'auto', padding: '20px', background: '#F9FAFB' }}>
                        {messages.map(msg => (
                            <div key={msg.id} style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', alignItems: msg.type === 'user' ? 'flex-end' : 'flex-start' }}>
                                <div style={{
                                    maxWidth: '80%', padding: '12px 16px', borderRadius: '15px', fontSize: '14px',
                                    background: msg.type === 'user' ? 'red' : 'white',
                                    color: msg.type === 'user' ? 'white' : 'black',
                                    fontWeight: 600,
                                    border: msg.type === 'bot' ? '1px solid #EEE' : 'none'
                                }}>
                                    {msg.text}
                                </div>
                                {msg.recommendations && (
                                    <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                                        {msg.recommendations.map(bus => (
                                            <Link to={`/business/${bus.id}`} key={bus.id} onClick={() => setIsOpen(false)} style={{ display: 'flex', gap: '10px', background: 'white', padding: '10px', borderRadius: '12px', border: '1px solid #EEE', textDecoration: 'none', color: 'inherit' }}>
                                                <img src={bus.image} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                                                <div>
                                                    <div style={{ fontSize: '13px', fontWeight: 800 }}>{bus.name}</div>
                                                    <div style={{ fontSize: '11px', color: '#666' }}>{bus.location}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        {isTyping && <div style={{ fontSize: '12px', color: '#666', fontWeight: 800 }}>Lexi réfléchit...</div>}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div style={{ padding: '16px', background: 'white', borderTop: '1px solid #EEE', display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <input
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            onKeyPress={e => e.key === 'Enter' && handleSend()}
                            placeholder="Écrivez ici..."
                            style={{ flex: 1, padding: '12px 20px', borderRadius: '50px', border: '1px solid #EEE', background: '#F3F4F6', fontSize: '15px', fontWeight: 600, outline: 'none' }}
                        />
                        <button onClick={handleSend} style={{ background: 'black', color: 'white', border: 'none', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyCenter: 'center' }}><Send size={20} /></button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Chatbot;
