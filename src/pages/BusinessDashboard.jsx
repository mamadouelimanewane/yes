import React, { useState } from 'react';
import {
    LayoutDashboard,
    CalendarCheck,
    MessageSquare,
    Settings,
    TrendingUp,
    ChevronRight,
    CheckCircle2,
    XCircle,
    Bell,
    Clock,
    User,
    Wallet,
    Power
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const mockBookings = [
    { id: 101, name: "Ibrahim Diallo", date: " Aujourd'hui, 20:30", guests: 4, type: "Table", status: "pending", amount: 45000, deposit: 6750 },
    { id: 102, name: "Fatoumata Fall", date: " Aujourd'hui, 19:00", guests: 2, type: "Table", status: "confirmed", amount: 25000, deposit: 3750 },
    { id: 103, name: "Jean-Pierre", date: " Demain, 12:00", guests: 6, type: "Table", status: "confirmed", amount: 75000, deposit: 11250 },
];

const mockReviews = [
    { id: 1, user: "Amadou S.", rating: 5, text: "Excellent accueil, le Thieb était parfait !", date: "Il y a 2h" },
    { id: 2, user: "Sophie T.", rating: 4, text: "Belle vue, service un peu lent mais souriant.", date: "Hier" },
];

const mockMessages = [
    { id: 1, user: "Moussa Ndiaye", lastMsg: "Est-ce que vous avez des options végétaliennes ?", time: "14:15", unread: true },
    { id: 2, user: "Awa Diop", lastMsg: "Confirmez-vous la réservation pour 20h ?", time: "Hier", unread: false },
];

const BusinessDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [bookings, setBookings] = useState(mockBookings);

    const handleAction = (id, newStatus) => {
        setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
    };

    return (
        <div className="bg-[#F8F9FA] min-h-screen pb-24">
            {/* Mobile Header */}
            <header className="bg-gray-900 text-white p-6 rounded-b-[2rem] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="flex justify-between items-center relative z-10">
                    <div>
                        <span className="text-primary font-black uppercase tracking-widest text-[10px]">Espace Pro</span>
                        <h1 className="text-2xl font-black">Chez Loutcha</h1>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-gray-900 flex items-center justify-center text-[10px] font-bold">3</div>
                        <button className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                            <Bell size={22} />
                        </button>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 gap-4 mt-8 relative z-10">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-2 text-primary mb-1">
                            <Wallet size={16} />
                            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Acomptes (24h)</span>
                        </div>
                        <div className="text-xl font-black">10.500 <span className="text-[10px] opacity-60">FCFA</span></div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-2 text-secondary mb-1">
                            <CalendarCheck size={16} />
                            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Réservations</span>
                        </div>
                        <div className="text-xl font-black">12 <span className="text-[10px] opacity-60">AUJOURD'HUI</span></div>
                    </div>
                </div>
            </header>

            <main className="container -mt-6 relative z-20">
                {/* Tabs Mobile */}
                <div className="flex bg-white p-1.5 rounded-2xl shadow-md border border-gray-100 gap-1 overflow-x-auto no-scrollbar">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'overview' ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50'}`}
                    >
                        <LayoutDashboard size={16} /> Vue d'ensemble
                    </button>
                    <button
                        onClick={() => setActiveTab('bookings')}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'bookings' ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50'}`}
                    >
                        <CalendarCheck size={16} /> Réservations
                    </button>
                    <button
                        onClick={() => setActiveTab('messages')}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'messages' ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50'}`}
                    >
                        <MessageSquare size={16} /> Messages
                    </button>
                    <button
                        onClick={() => setActiveTab('reviews')}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === 'reviews' ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50'}`}
                    >
                        <Star size={16} /> Avis
                    </button>
                </div>

                <div className="mt-8 animate-fade-in">
                    {activeTab === 'overview' && (
                        <div className="space-y-6">
                            {/* Fast Actions */}
                            <div className="grid grid-cols-2 gap-4">
                                <button className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center gap-3 active:scale-95 transition-all outline-none">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary"><Clock size={24} /></div>
                                    <span className="font-bold text-xs">Fermeture Rapide</span>
                                </button>
                                <button className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center gap-3 active:scale-95 transition-all outline-none text-secondary">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary"><TrendingUp size={24} /></div>
                                    <span className="font-bold text-xs text-black">Booster Visibilité</span>
                                </button>
                            </div>

                            {/* Recent Activity */}
                            <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4 flex items-center justify-between">
                                    Derniers Avis
                                    <ChevronRight size={16} />
                                </h3>
                                <div className="space-y-4">
                                    {mockReviews.map(review => (
                                        <div key={review.id} className="p-4 bg-gray-50 rounded-2xl flex gap-3">
                                            <div className="w-10 h-10 bg-gray-200 rounded-full shrink-0 flex items-center justify-center text-gray-500 font-bold tracking-tighter text-[10px]">{review.user[0]}</div>
                                            <div>
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="font-bold text-sm">{review.user}</span>
                                                    <span className="text-[10px] text-gray-400">{review.date}</span>
                                                </div>
                                                <p className="text-xs text-gray-500 line-clamp-1 italic">"{review.text}"</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'bookings' && (
                        <div className="space-y-4">
                            {bookings.map(booking => (
                                <motion.div
                                    layout
                                    key={booking.id}
                                    className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center text-xs font-black uppercase">BO</div>
                                            <div>
                                                <h4 className="font-bold text-lg leading-none mb-1">{booking.name}</h4>
                                                <span className="text-secondary font-black text-[10px] uppercase tracking-widest">{booking.date}</span>
                                            </div>
                                        </div>
                                        {booking.status === 'confirmed' ? (
                                            <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-secondary/20">Confirmé</span>
                                        ) : (
                                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/20">En attente</span>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="bg-gray-50 p-3 rounded-xl">
                                            <span className="text-[8px] font-black uppercase text-gray-400 block mb-1">Personnes</span>
                                            <span className="font-bold text-sm">{booking.guests} {booking.type}</span>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded-xl border border-primary/10">
                                            <span className="text-[8px] font-black uppercase text-primary block mb-1">Acompte Reçu</span>
                                            <span className="font-black text-sm text-primary">{booking.deposit.toLocaleString()} FCFA</span>
                                        </div>
                                    </div>

                                    {booking.status === 'pending' && (
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleAction(booking.id, 'confirmed')}
                                                className="flex-1 bg-gray-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
                                            >
                                                <CheckCircle2 size={16} /> Accepter
                                            </button>
                                            <button
                                                onClick={() => handleAction(booking.id, 'cancelled')}
                                                className="w-14 bg-white border border-gray-200 text-gray-400 py-4 rounded-2xl flex items-center justify-center active:bg-gray-50 active:scale-95 transition-all"
                                            >
                                                <XCircle size={20} />
                                            </button>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    )}
                    {activeTab === 'messages' && (
                        <div className="space-y-4">
                            {mockMessages.map(msg => (
                                <div key={msg.id} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 relative">
                                    {msg.unread && <div className="absolute top-5 right-5 w-2.5 h-2.5 bg-primary rounded-full"></div>}
                                    <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-500 font-black text-xs uppercase">{msg.user[0]}{msg.user.split(' ')[1]?.[0]}</div>
                                    <div className="flex-1 overflow-hidden">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="font-bold text-sm">{msg.user}</h4>
                                            <span className="text-[10px] text-gray-400">{msg.time}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 truncate font-medium">{msg.lastMsg}</p>
                                    </div>
                                    <ChevronRight size={16} className="text-gray-300" />
                                </div>
                            ))}
                            <div className="p-10 text-center opacity-30">
                                <MessageSquare size={48} className="mx-auto mb-2" />
                                <p className="text-xs font-bold uppercase tracking-widest">Fin des messages</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'reviews' && (
                        <div className="space-y-4">
                            {mockReviews.map(review => (
                                <div key={review.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-accent/20 text-accent rounded-full flex items-center justify-center text-xs font-black">{(review.rating)}.0</div>
                                            <div>
                                                <h4 className="font-bold text-sm leading-none mb-1">{review.user}</h4>
                                                <span className="text-[10px] text-gray-400 uppercase tracking-widest">{review.date}</span>
                                            </div>
                                        </div>
                                        <div className="flex text-accent">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={10} fill={i < review.rating ? 'currentColor' : 'none'} />)}
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-600 leading-relaxed font-medium italic">"{review.text}"</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </main>

            {/* Bottom Nav Mobile */}
            <nav className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-xl border-t border-gray-100 px-6 py-4 flex justify-between items-center z-[100] md:hidden shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
                <button className="flex flex-col items-center gap-1 text-primary">
                    <LayoutDashboard size={24} />
                    <span className="text-[10px] font-black uppercase">Dashboard</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-300">
                    <CalendarCheck size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Planing</span>
                </button>
                <Link to="/" className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-white shadow-xl -mt-10 border-4 border-white active:scale-90 transition-all">
                    <Power size={24} />
                </Link>
                <button className="flex flex-col items-center gap-1 text-gray-300">
                    <User size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Profil</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-300">
                    <Settings size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Réglages</span>
                </button>
            </nav>
        </div>
    );
};

export default BusinessDashboard;
