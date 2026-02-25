import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, MapPin, ArrowLeft, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { businesses } from '../data';

const initialMessages = [
    {
        id: 1,
        type: 'bot',
        text: 'Bonjour ! 👋 Je suis Lexi, votre assistante Yes-Africa. Que recherchez-vous au Sénégal ?'
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

    // Advanced NLP Matcher
    const findMatches = (query) => {
        let q = query.toLowerCase();

        // Synonym mapping for better UX
        const synonyms = {
            'manger': ['restaurant', 'diner', 'déjeuner', 'fast-food', 'bouffe', 'repas', 'resto'],
            'dormir': ['hôtel', 'auberge', 'chambre', 'nuit', 'logement', 'hostel'],
            'sortir': ['bar', 'club', 'boite', 'soirée', 'musique', 'fête', 'night-club'],
            'luxe': ['palace', 'chic', 'premium', 'étoiles', 'plus cher', 'haut de gamme'],
            'pas cher': ['économique', 'abordable', 'bon marché', 'moins cher', 'budget'],
            'mer': ['plage', 'vue', 'océan', 'corniche', 'eau'],
        };

        // Price Intent Detection
        const wantCheap = q.includes('moins cher') || q.includes('pas cher') || q.includes('abordable') || q.includes('budget') || q.includes('économique');
        const wantExpensive = q.includes('plus cher') || q.includes('luxe') || q.includes('palace');
        const wantCompare = q.includes('comparer') || q.includes('prix') || q.includes('comparaison');

        // Inject synonyms into the search query
        Object.keys(synonyms).forEach(key => {
            if (q.includes(key) || synonyms[key].some(syn => q.includes(syn))) {
                q += ` ${key} ` + synonyms[key].join(' ');
            }
        });

        const keywords = q.split(' ').filter(word => word.length > 2);
        if (keywords.length === 0) keywords.push(q);

        const matches = businesses.filter(b => {
            const textToSearch = `${b.name} ${b.category} ${b.city} ${b.description} ${b.tags.join(' ')}`.toLowerCase();
            // Score based matching
            let score = 0;
            keywords.forEach(kw => {
                if (textToSearch.includes(kw)) score += 1;
            });
            return score > 0;
        });

        // Smart Sorting Logic based on Intent
        const sorted = matches.sort((a, b) => {
            if (wantCheap) {
                // Sort by price ascending (shortest string first, e.g. "€" before "€€")
                if (a.price.length !== b.price.length && a.price.includes('€') && b.price.includes('€')) {
                    return a.price.length - b.price.length;
                }
            } else if (wantExpensive) {
                // Sort by price descending
                if (a.price.length !== b.price.length && a.price.includes('€') && b.price.includes('€')) {
                    return b.price.length - a.price.length;
                }
            }
            // Default fallback: Sort by rating descending
            return parseFloat(b.rating) - parseFloat(a.rating);
        });

        // Limit to top 3 and add a dynamic message if comparing
        const results = sorted.slice(0, 3);
        let customMessage = null;
        if (results.length > 1 && wantCompare) {
            customMessage = `Voici une comparaison des options. Les prix varient de ${results[results.length - 1].price} à ${results[0].price} :`;
        } else if (results.length > 0 && wantCheap) {
            customMessage = "Voici les meilleures options économiques que j'ai pu trouver :";
        } else if (results.length > 0 && wantExpensive) {
            customMessage = "Voici les options les plus prestigieuses pour vous :";
        }

        return { results, customMessage };
    };

    const handleSend = (textOverride = null) => {
        const textToProcess = textOverride || inputValue;
        if (!textToProcess.trim()) return;

        const userMsg = { id: Date.now(), type: 'user', text: textToProcess };
        setMessages(prev => [...prev, userMsg]);
        if (!textOverride) setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            // Special conversational triggers
            const lowertext = textToProcess.toLowerCase();
            let botResponse = "";
            let recommendedBusinesses = [];

            if (lowertext.includes('merci')) {
                botResponse = "C'est un plaisir ! N'hésitez pas si vous avez d'autres questions. 😊";
            } else if (lowertext.includes('bonjour') || lowertext.includes('salut')) {
                botResponse = "Bonjour ! Que puis-je faire pour vous aujourd'hui ?";
            } else {
                const matchData = findMatches(textToProcess);
                if (matchData.results.length > 0) {
                    botResponse = matchData.customMessage || `J'ai trouvé ${matchData.results.length > 1 ? 'd\'excellentes options' : 'une option parfaite'} pour vous :`;
                    recommendedBusinesses = matchData.results;
                } else {
                    botResponse = "Désolé, je n'ai pas trouvé d'adresse correspondant à votre demande. Essayez avec des termes comme 'Hôtel Dakar' ou 'Manger Saly' !";
                }
            }

            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                type: 'bot',
                text: botResponse,
                recommendations: recommendedBusinesses
            }]);
            setIsTyping(false);
        }, 800 + Math.random() * 500); // Realistic typing delay
    };

    const quickActions = ["Où manger à Dakar ?", "Un hôtel près de la mer", "Sortir ce soir !"];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="chatbot-fullscreen"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    style={{ zIndex: 10000 }}
                >
                    {/* Header */}
                    <div style={{ background: '#111', color: 'white', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', position: 'relative', zIndex: 10 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <button onClick={() => setIsOpen(false)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ArrowLeft size={20} /></button>
                            <div style={{ position: 'relative' }}>
                                <img src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?auto=format&fit=crop&q=80&w=150&h=150" style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', border: '2px solid white' }} />
                                <div style={{ position: 'absolute', bottom: 0, right: 0, width: '12px', height: '12px', background: '#4ADE80', borderRadius: '50%', border: '2px solid #111' }}></div>
                            </div>
                            <div>
                                <div style={{ fontSize: '15px', fontWeight: 800 }}>Lexi AI</div>
                                <div style={{ fontSize: '11px', color: '#4ADE80', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px' }}>En Ligne</div>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white' }}><X /></button>
                    </div>

                    {/* Messages Body */}
                    <div style={{ flex: 1, overflowY: 'auto', padding: '20px', background: '#F8F9FA' }}>
                        {messages.length === 1 && (
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                                {quickActions.map(action => (
                                    <button
                                        key={action}
                                        onClick={() => handleSend(action)}
                                        style={{ background: 'white', border: '1px solid var(--border-color)', padding: '8px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: 700, color: 'var(--primary)', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' }}
                                    >
                                        {action}
                                    </button>
                                ))}
                            </div>
                        )}

                        {messages.map(msg => (
                            <div key={msg.id} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: msg.type === 'user' ? 'flex-end' : 'flex-start' }}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    style={{
                                        maxWidth: '85%', padding: '14px 18px', borderRadius: '20px', fontSize: '14px', lineHeight: '1.5',
                                        background: msg.type === 'user' ? 'var(--primary)' : 'white',
                                        color: msg.type === 'user' ? 'white' : '#111',
                                        fontWeight: 600,
                                        border: msg.type === 'bot' ? '1px solid var(--border-color)' : 'none',
                                        borderBottomRightRadius: msg.type === 'user' ? '4px' : '20px',
                                        borderBottomLeftRadius: msg.type === 'bot' ? '4px' : '20px',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
                                    }}>
                                    {msg.text}
                                </motion.div>

                                {msg.recommendations && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '90%' }}
                                    >
                                        {msg.recommendations.map(bus => (
                                            <Link to={`/business/${bus.id}`} key={bus.id} onClick={() => setIsOpen(false)} style={{ display: 'flex', gap: '12px', background: 'white', padding: '12px', borderRadius: '16px', border: '1px solid var(--border-color)', textDecoration: 'none', color: 'inherit', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
                                                <img src={bus.image} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '10px' }} />
                                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                    <div style={{ fontSize: '14px', fontWeight: 800, marginBottom: '2px' }}>{bus.name}</div>
                                                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                                                        <MapPin size={10} color="var(--primary)" /> {bus.location}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                        {isTyping && (
                            <div style={{ display: 'inline-flex', gap: '4px', background: 'white', padding: '12px 16px', borderRadius: '20px', borderBottomLeftRadius: '4px', border: '1px solid var(--border-color)' }}>
                                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} style={{ width: '6px', height: '6px', background: '#CCC', borderRadius: '50%' }} />
                                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} style={{ width: '6px', height: '6px', background: '#CCC', borderRadius: '50%' }} />
                                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} style={{ width: '6px', height: '6px', background: '#CCC', borderRadius: '50%' }} />
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div style={{ padding: '16px', background: 'white', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '10px', alignItems: 'center', paddingBottom: 'calc(16px + env(safe-area-inset-bottom))' }}>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', background: '#F3F4F6', borderRadius: '50px', padding: '4px 16px', border: '1px solid #E5E7EB' }}>
                            <input
                                value={inputValue}
                                onChange={e => setInputValue(e.target.value)}
                                onKeyPress={e => e.key === 'Enter' && handleSend()}
                                placeholder="Posez votre question..."
                                style={{ flex: 1, padding: '12px 0', border: 'none', background: 'transparent', fontSize: '15px', fontWeight: 600, outline: 'none' }}
                            />
                            <Mic size={18} color="#9CA3AF" />
                        </div>
                        <button
                            onClick={() => handleSend()}
                            disabled={!inputValue.trim()}
                            style={{ background: inputValue.trim() ? 'var(--primary)' : '#E5E7EB', color: 'white', border: 'none', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s' }}
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Chatbot;
