import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, MapPin, ArrowLeft, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { businesses } from '../data';

const initialMessages = [
    {
        id: 1,
        type: 'bot',
        text: 'Bonjour ! 👋 Je suis Lexi, votre assistante Yes-Africa. Puis-je vous aider cher ami ? Que recherchez-vous au Sénégal ?'
    }
];

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(initialMessages);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    const speakGreeting = () => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance("Bonjour, je suis lexi. Puis-je vous aider cher ami ?");
            utterance.lang = 'fr-FR';

            const setVoiceAndSpeak = () => {
                const voices = window.speechSynthesis.getVoices();
                if (voices.length > 0) {
                    const frenchVoices = voices.filter(v => v.lang.startsWith('fr'));
                    const femaleVoice = frenchVoices.find(v =>
                        v.name.toLowerCase().includes('female') ||
                        v.name.toLowerCase().includes('margot') ||
                        v.name.toLowerCase().includes('julie') ||
                        v.name.toLowerCase().includes('amelie') ||
                        v.name.toLowerCase().includes('hortense')
                    ) || frenchVoices[0];

                    if (femaleVoice) utterance.voice = femaleVoice;
                    utterance.pitch = 1.15;
                    utterance.rate = 1.0;
                    window.speechSynthesis.speak(utterance);
                } else {
                    window.speechSynthesis.speak(utterance);
                }
            };

            if (window.speechSynthesis.getVoices().length === 0) {
                window.speechSynthesis.addEventListener('voiceschanged', setVoiceAndSpeak, { once: true });
            } else {
                setVoiceAndSpeak();
            }
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

    // Close on back button (mobile gesture)
    useEffect(() => {
        if (isOpen) {
            const handleBack = (e) => {
                e.preventDefault();
                setIsOpen(false);
            };
            window.history.pushState(null, '', window.location.href);
            window.addEventListener('popstate', handleBack);
            return () => window.removeEventListener('popstate', handleBack);
        }
    }, [isOpen]);

    const findMatches = (query) => {
        let q = query.toLowerCase();

        const synonyms = {
            'accès handicapé': ['handicap', 'fauteuil', 'pmr', 'accessibilité', 'rampe'],
            'travail à distance': ['travailler', 'bosser', 'wifi', 'coworking', 'bureau', 'réunion', 'nomade'],
            'piscine': ['baigner', 'nage', 'plonger'],
            'luxe': ['palace', 'chic', 'prestige', 'étoiles'],
        };

        Object.keys(synonyms).forEach(key => {
            if (synonyms[key].some(syn => q.includes(syn))) {
                q += ` ${key}`;
            }
        });

        const keywords = q.split(' ').filter(word => word.length > 2);
        if (keywords.length === 0) keywords.push(q);

        const matches = businesses.filter(b => {
            const textToSearch = `${b.name} ${b.category} ${b.city} ${b.description} ${b.tags.join(' ')}`.toLowerCase();
            return keywords.some(kw => textToSearch.includes(kw));
        });

        return matches.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)).slice(0, 3);
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMsg = { id: Date.now(), type: 'user', text: inputValue };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            const matches = findMatches(userMsg.text);
            let botResponse = '';
            let recommendedBusinesses = [];

            if (matches.length > 0) {
                botResponse = `J'ai trouvé ${matches.length > 1 ? 'quelques excellentes options' : 'une excellente option'} pour vous :`;
                recommendedBusinesses = matches;
            } else {
                botResponse = "Désolé, je n'ai pas trouvé de correspondance exacte. Essayez par exemple : « restaurant Dakar », « hôtel Saly » 😊";
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

    // Quick suggestions
    const suggestions = ['Restaurant Dakar', 'Hôtel luxe', 'Spa Saly', 'Vie nocturne'];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.95 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="fixed inset-0 md:inset-auto md:bottom-8 md:right-8 md:w-96 bg-white md:rounded-3xl overflow-hidden shadow-2xl z-[200] md:border md:border-gray-100 flex flex-col md:h-[600px] md:max-h-[85vh]"
                >
                    {/* Header */}
                    <div className="bg-gray-900 text-white px-4 py-3 md:p-4 flex items-center justify-between shadow-md relative overflow-hidden shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/20 opacity-50"></div>
                        <div className="flex items-center gap-3 relative z-10">
                            {/* Mobile: back arrow */}
                            <button onClick={() => setIsOpen(false)} className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white active:bg-white/20 transition-colors mr-1">
                                <ArrowLeft size={20} />
                            </button>
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white/50 shadow-md shrink-0">
                                <img src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?auto=format&fit=crop&q=80&w=150&h=150" alt="Lexi AI" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm tracking-wide">Lexi — Yes-Africa</h3>
                                <div className="flex items-center gap-1.5 text-xs text-gray-300 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                    En ligne
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hidden md:flex text-gray-400 hover:text-white transition-colors relative z-10 bg-white/10 p-1.5 rounded-full">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-3">
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

                                {msg.recommendations && msg.recommendations.length > 0 && (
                                    <div className="mt-2 flex flex-col gap-2 w-full max-w-[90%]">
                                        {msg.recommendations.map(bus => (
                                            <Link
                                                to={`/business/${bus.id}`}
                                                key={bus.id}
                                                onClick={() => setIsOpen(false)}
                                                className="flex gap-3 bg-white p-2.5 rounded-xl border border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-md transition-all text-left group active:scale-[0.98]"
                                            >
                                                <img src={bus.image} alt={bus.name} className="w-14 h-14 rounded-lg object-cover shrink-0" />
                                                <div className="flex flex-col justify-center overflow-hidden flex-1 min-w-0">
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

                        {/* Quick Suggestions — shown only if few messages */}
                        {messages.length <= 1 && !isTyping && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {suggestions.map(s => (
                                    <button
                                        key={s}
                                        onClick={() => { setInputValue(s); setTimeout(() => handleSend(), 50); }}
                                        className="px-3 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 shadow-sm"
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        )}

                        {isTyping && (
                            <div className="flex items-start">
                                <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-sm flex gap-1.5 shadow-sm">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white border-t border-gray-100 shrink-0"
                        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom, 0.75rem))' }}
                    >
                        <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-full border border-gray-200 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/10 transition-all">
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Posez votre question..."
                                className="flex-1 bg-transparent border-none outline-none px-3 text-sm text-gray-800 min-w-0"
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
                            <span className="text-[0.6rem] text-gray-400 uppercase font-black tracking-widest flex items-center justify-center gap-1">
                                Propulsé par LexAI <Sparkles size={8} className="text-accent" />
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Chatbot;
