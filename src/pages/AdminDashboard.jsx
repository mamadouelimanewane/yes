import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    LayoutDashboard,
    Store,
    Users,
    ShieldAlert,
    Settings,
    TrendingUp,
    CheckCircle,
    XCircle,
    Search,
    Bell,
    Menu,
    X,
    MoreVertical,
    LogOut,
    ArrowUpRight,
    MapPin,
    Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { businesses } from '../data';

const AdminDashboard = () => {
    const [activeMenu, setActiveMenu] = useState('overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const stats = [
        { title: "Utilisateurs Actifs", value: "8,409", trend: "+14%", trendUp: true },
        { title: "Établissements Partenaires", value: businesses.length.toString(), trend: "+5%", trendUp: true },
        { title: "CA Généré (Est.)", value: "14.2M FCFA", trend: "+22%", trendUp: true },
        { title: "Signalements", value: "3", trend: "-12%", trendUp: false }
    ];

    const menuItems = [
        { id: 'overview', icon: LayoutDashboard, label: "Vue d'ensemble" },
        { id: 'businesses', icon: Store, label: "Gérer les établissements" },
        { id: 'users', icon: Users, label: "Utilisateurs & CRM" },
        { id: 'moderation', icon: ShieldAlert, label: "Avis & Modération" },
        { id: 'settings', icon: Settings, label: "Configurations" },
    ];

    const pendingBusinesses = businesses.slice(0, 3).map(b => ({ ...b, status: 'en_attente' }));

    const Sidebar = () => (
        <div className="w-64 bg-gray-900 text-white h-full flex flex-col">
            <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-black text-xl shadow-lg border border-white/10">
                    Y
                </div>
                <div>
                    <span className="font-extrabold text-xl tracking-tight block">Yes-Africa</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Super Admin</span>
                </div>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                {menuItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => { setActiveMenu(item.id); setIsSidebarOpen(false); }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeMenu === item.id
                                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                            }`}
                    >
                        <item.icon size={20} className={activeMenu === item.id ? 'text-white' : ''} />
                        {item.label}
                    </button>
                ))}
            </nav>

            <div className="p-4 border-t border-white/10">
                <Link to="/" className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors font-bold rounded-xl hover:bg-white/5">
                    <LogOut size={20} />
                    Quitter le backoffice
                </Link>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 flex h-screen overflow-hidden">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block shrink-0 shadow-2xl z-20">
                <Sidebar />
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
                            onClick={() => setIsSidebarOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="lg:hidden fixed inset-y-0 left-0 w-64 z-50 shadow-2xl"
                        >
                            <Sidebar />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full overflow-hidden relative w-full">
                {/* Topbar */}
                <header className="bg-white border-b border-gray-200 h-20 shrink-0 flex items-center justify-between px-4 lg:px-8 z-10 shadow-sm">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <Menu size={24} />
                        </button>
                        <h1 className="text-xl md:text-2xl font-black text-gray-900 hidden sm:block">
                            {menuItems.find(m => m.id === activeMenu)?.label}
                        </h1>
                    </div>

                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="hidden md:flex items-center gap-2 bg-gray-100 px-4 py-2.5 rounded-full w-64 xl:w-96 border border-transparent focus-within:bg-white focus-within:border-primary/30 focus-within:ring-4 focus-within:ring-primary/10 transition-all">
                            <Search size={18} className="text-gray-400 shrink-0" />
                            <input
                                type="text"
                                placeholder="Rechercher utilisateur, lieu..."
                                className="bg-transparent border-none outline-none text-sm w-full font-medium"
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <button className="relative p-2 text-gray-400 hover:text-gray-900 transition-colors">
                            <Bell size={24} />
                            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white"></span>
                        </button>

                        <div className="flex items-center gap-3 pl-4 md:pl-6 border-l border-gray-200">
                            <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold shadow-md">
                                MA
                            </div>
                            <div className="hidden md:block">
                                <span className="block text-sm font-bold text-gray-900">Mamadou Admin</span>
                                <span className="block text-xs font-medium text-gray-500">SuperAdministrateur</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Scrollable Area */}
                <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-gray-50/50 relative">
                    {activeMenu === 'overview' && (
                        <div className="max-w-7xl mx-auto space-y-8 pb-20">

                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <h3 className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">{stat.title}</h3>
                                        <div className="flex items-end justify-between">
                                            <span className="text-3xl font-black text-gray-900">{stat.value}</span>
                                            <span className={`flex items-center gap-1 text-sm font-bold px-2 py-1 rounded-md ${stat.trendUp ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                {stat.trendUp ? <TrendingUp size={14} /> : <TrendingUp size={14} className="rotate-180" />}
                                                {stat.trend}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                                {/* Recent Approvals Area */}
                                <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                                    <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
                                        <h2 className="text-lg font-extrabold text-gray-900">Établissements en attente de validation</h2>
                                        <button className="text-sm font-bold text-primary hover:text-primary-hover flex items-center gap-1">
                                            Voir tout <ArrowUpRight size={16} />
                                        </button>
                                    </div>
                                    <div className="divide-y divide-gray-100">
                                        {pendingBusinesses.map(bus => (
                                            <div key={bus.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:bg-gray-50 transition-colors">
                                                <img src={bus.image} alt={bus.name} className="w-16 h-16 rounded-xl object-cover shrink-0 border border-gray-200" />
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-bold text-gray-900 text-base truncate">{bus.name}</h4>
                                                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                                        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">{bus.category}</span>
                                                        <span>•</span>
                                                        <span className="flex items-center gap-1 truncate"><MapPin size={12} /> {bus.location}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 w-full sm:w-auto mt-3 sm:mt-0">
                                                    <button className="flex-1 sm:flex-none p-2 px-4 bg-green-50 text-green-600 font-bold rounded-xl hover:bg-green-100 transition-colors flex justify-center items-center gap-2">
                                                        <CheckCircle size={18} /> Approuver
                                                    </button>
                                                    <button className="p-2 px-4 text-red-500 hover:bg-red-50 rounded-xl transition-colors flex items-center justify-center font-bold">
                                                        Rejeter
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Actions / Status */}
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-6">
                                    <h2 className="text-lg font-extrabold text-gray-900">Actions Rapides</h2>

                                    <button className="w-full text-left py-4 px-5 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all group flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <Store size={20} />
                                        </div>
                                        <div>
                                            <span className="block font-bold text-gray-900 mb-1">Ajouter un lieu officiel</span>
                                            <span className="text-xs text-gray-500 leading-tight block">Créer manuellement une fiche établissement vérifiée.</span>
                                        </div>
                                    </button>

                                    <button className="w-full text-left py-4 px-5 rounded-xl border border-gray-200 hover:border-secondary hover:bg-secondary/5 transition-all group flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <Star size={20} />
                                        </div>
                                        <div>
                                            <span className="block font-bold text-gray-900 mb-1">Gérer "À la une"</span>
                                            <span className="text-xs text-gray-500 leading-tight block">Modifier les lieux Elite affichés sur l'accueil.</span>
                                        </div>
                                    </button>

                                    <div className="mt-auto pt-6 border-t border-gray-100">
                                        <div className="flex items-center justify-between text-sm mb-2">
                                            <span className="text-gray-500 font-medium">Santé du système</span>
                                            <span className="font-bold text-green-500">Optimal</span>
                                        </div>
                                        <div className="w-full bg-gray-100 rounded-full h-2">
                                            <div className="bg-green-500 h-2 rounded-full w-[98%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeMenu !== 'overview' && (
                        <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-white rounded-2xl border border-gray-100 border-dashed max-w-2xl mx-auto mt-10">
                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 mb-6">
                                <Settings size={32} />
                            </div>
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Module en construction</h2>
                            <p className="text-gray-500 mb-8 max-w-md">
                                La brique "{menuItems.find(m => m.id === activeMenu)?.label}" est actuellement en cours de développement pour vous offrir les meilleurs outils de gestion.
                            </p>
                            <button onClick={() => setActiveMenu('overview')} className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg active:scale-95">
                                Retour à l'accueil
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
