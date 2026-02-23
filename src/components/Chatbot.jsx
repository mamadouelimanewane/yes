import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { businesses } from '../data';

const initialMessages = [
    {
        id: 1,
        type: 'bot',
        text: 'Bonjour ! 👋 Je suis Lexi, votre assistant intelligent Yes-Africa. Que recherchez-vous au Sénégal (un restaurant, un hôtel, une activité...) ?'
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

    const findMatches = (query) => {
        const q = query.toLowerCase();

        // Basic NLP-like keyword matching
        const keywords = q.split(' ').filter(word => word.length > 3);
        if (keywords.length === 0) keywords.push(q);

        const matches = businesses.filter(b => {
            const textToSearch = `${b.name} ${b.category} ${b.city} ${b.description} ${b.tags.join(' ')}`.toLowerCase();
            // Match if any keyword is found
            return keywords.some(kw => textToSearch.includes(kw));
        });

        // Sort by rating internally
        return matches.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)).slice(0, 3);
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMsg = { id: Date.now(), type: 'user', text: inputValue };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI processing delay
        setTimeout(() => {
            const matches = findMatches(userMsg.text);
            let botResponse = '';
            let recommendedBusinesses = [];

            if (matches.length > 0) {
                botResponse = `J'ai trouvé ${matches.length > 1 ? 'quelques excellentes options' : 'une excellente option'} pour vous basées sur votre demande :`;
                recommendedBusinesses = matches;
            } else {
                botResponse = "Désolé, je n'ai pas trouvé de correspondance exacte pour votre recherche. Pouvez-vous reformuler (ex: 'restaurant Dakar', 'hôtel Saly') ?";
            }

            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                type: 'bot',
                text: botResponse,
                recommendations: recommendedBusinesses
            }]);
            setIsTyping(false);
        }, 1200);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <>
            {/* Bouton Flottant Payer/Chat */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-primary-hover hover:scale-110 transition-all z-50 flex items-center justify-center group"
                    >
                        <Sparkles size={16} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <MessageSquare size={28} />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Fenêtre de Chat */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-[calc(100vw-3rem)] md:w-96 bg-white rounded-3xl overflow-hidden shadow-2xl z-50 border border-gray-100 flex flex-col h-[500px] md:h-[600px] max-h-[85vh]"
                    >
                        {/* Header */}
                        <div className="bg-gray-900 text-white p-4 flex items-center justify-between shadow-md relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/20 opacity-50"></div>
                            <div className="flex items-center gap-3 relative z-10">
                                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center border border-primary/50 text-accent">
                                    <Bot size={22} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm tracking-wide">Assistant AI Yes-Africa</h3>
                                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                        En ligne
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors relative z-10 bg-white/10 p-1.5 rounded-full">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                                    <div
                                        className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                      ${msg.type === 'user'
                                                ? 'bg-primary text-white rounded-tr-sm'
                                                : 'bg-white border border-gray-100 text-gray-800 rounded-tl-sm'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>

                                    {/* Business Recommendations */}
                                    {msg.recommendations && msg.recommendations.length > 0 && (
                                        <div className="mt-3 flex flex-col gap-2 w-full max-w-[90%]">
                                            {msg.recommendations.map(bus => (
                                                <Link
                                                    to={`/business/${bus.id}`}
                                                    key={bus.id}
                                                    onClick={() => setIsOpen(false)}
                                                    className="flex gap-3 bg-white p-2 rounded-xl border border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-md transition-all text-left group"
                                                >
                                                    <img src={bus.image} alt={bus.name} className="w-14 h-14 rounded-lg object-cover shrink-0" />
                                                    <div className="flex flex-col justify-center overflow-hidden">
                                                        <h4 className="font-bold text-gray-900 text-sm truncate group-hover:text-primary transition-colors">{bus.name}</h4>
                                                        <div className="flex items-center gap-1 text-xs text-gray-500">
                                                            <MapPin size={10} className="text-primary shrink-0" />
                                                            <span className="truncate">{bus.location}</span>
                                                        </div>
                                                        <span className="text-secondary text-[0.65rem] font-black uppercase mt-0.5">{bus.category}</span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex items-start">
                                    <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-sm flex gap-1 shadow-sm">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-white border-t border-gray-100">
                            <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-full border border-gray-200 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/10 transition-all">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Posez votre question (ex: 'bon resto')..."
                                    className="flex-1 bg-transparent border-none outline-none px-3 text-sm text-gray-800"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim() || isTyping}
                                    className="bg-gray-900 text-white p-2.5 rounded-full hover:bg-black active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all shrink-0"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                            <div className="text-center mt-2">
                                <span className="text-[0.65rem] text-gray-400 uppercase font-black tracking-widest flex items-center justify-center gap-1">
                                    Propulsé par LexAI <Sparkles size={10} className="text-accent" />
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
