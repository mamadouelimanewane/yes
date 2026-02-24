import React, { useState, useEffect, useRef } from 'react';
import { X, Send, User, Check, CheckCheck, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MessageInterface = ({ isOpen, onClose, business }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, text: `Bonjour ! Bienvenue chez ${business.name}. Comment pouvons-nous vous aider aujourd'hui ?`, sender: 'business', time: '10:00' }
    ]);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        const newUserMessage = {
            id: Date.now(),
            text: message,
            sender: 'user',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            status: 'sent'
        };

        setMessages([...messages, newUserMessage]);
        setMessage('');

        // Simulate business response
        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                text: "Merci pour votre message ! Un responsable va vous répondre dans quelques instants. 😊",
                sender: 'business',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botResponse]);
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[110] flex items-end md:items-center justify-center p-0 md:p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="relative bg-white w-full max-w-lg md:rounded-3xl h-[90vh] md:h-[600px] flex flex-col overflow-hidden shadow-2xl"
                >
                    {/* Header */}
                    <div className="bg-gray-900 p-4 md:p-6 text-white flex items-center justify-between shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <img src={business.image} className="w-10 h-10 rounded-full object-cover border-2 border-primary" alt="" />
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary border-2 border-gray-900 rounded-full"></div>
                            </div>
                            <div>
                                <h3 className="font-bold text-sm md:text-base leading-none mb-1">{business.name}</h3>
                                <div className="flex items-center gap-1 opacity-60">
                                    <MapPin size={10} />
                                    <span className="text-[10px] font-medium">{business.city}</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-all">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-gray-50 no-scrollbar">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-4 rounded-2xl text-sm shadow-sm ${msg.sender === 'user'
                                        ? 'bg-primary text-white rounded-tr-none'
                                        : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                                    }`}>
                                    <p className="leading-relaxed">{msg.text}</p>
                                    <div className={`flex items-center justify-end gap-1 mt-1 text-[10px] ${msg.sender === 'user' ? 'text-white/60' : 'text-gray-400'}`}>
                                        {msg.time}
                                        {msg.sender === 'user' && (
                                            msg.status === 'read' ? <CheckCheck size={12} /> : <Check size={12} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2 items-center">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Écrivez votre message..."
                            className="flex-1 py-3 px-5 bg-gray-100 rounded-2xl outline-none text-sm font-medium focus:bg-gray-50 transition-all border border-transparent focus:border-primary/20"
                        />
                        <button
                            type="submit"
                            className="p-3.5 bg-gray-900 text-white rounded-xl shadow-lg hover:bg-black transition-all active:scale-95 disabled:opacity-50"
                            disabled={!message.trim()}
                        >
                            <Send size={20} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default MessageInterface;
