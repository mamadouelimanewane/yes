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
    LogOut,
    ArrowUpRight,
    MapPin,
    Star,
    Edit,
    Trash2,
    Eye,
    Filter,
    AlertTriangle,
    Send,
    MailCheck,
    Crown,
    CreditCard,
    Zap,
    Download,
    Printer,
    FileCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { businesses } from '../data';

const AdminDashboard = () => {
    const [activeMenu, setActiveMenu] = useState('overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [localBusinesses, setLocalBusinesses] = useState(businesses.map(b => ({
        ...b,
        commissionRate: b.commissionRate || 15,
        promotion: b.promotion || null
    })));
    const [editingBusiness, setEditingBusiness] = useState(null);
    const [viewingInvoice, setViewingInvoice] = useState(null);

    const stats = [
        { title: "Utilisateurs Actifs", value: "8,409", trend: "+14%", trendUp: true },
        { title: "Établissements Partenaires", value: businesses.length.toString(), trend: "+5%", trendUp: true },
        { title: "Volume d'Affaire (GMV)", value: "14.2M FCFA", trend: "+22%", trendUp: true },
        { title: "Commissions Récoltées", value: "2.1M FCFA", trend: "+18%", trendUp: true }
    ];

    const menuItems = [
        { id: 'overview', icon: LayoutDashboard, label: "Vue d'ensemble" },
        { id: 'finance', icon: TrendingUp, label: "Comptabilité & Commissions" },
        { id: 'billing', icon: FileText, label: "Facturation Partenaires" },
        { id: 'subscriptions', icon: Crown, label: "Abonnements PRO (SaaS)" },
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
                {/* Modal Edition Commission/Promotion */}
                <AnimatePresence>
                    {editingBusiness && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
                                onClick={() => setEditingBusiness(null)}
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg bg-white rounded-3xl z-[70] shadow-2xl overflow-hidden"
                            >
                                <div className="p-8">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-xl font-black text-gray-900">Configurer {editingBusiness.name}</h3>
                                        <button onClick={() => setEditingBusiness(null)} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={20} /></button>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Commission Rate */}
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                                                <Percent size={14} /> Taux de Commission (%)
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    value={editingBusiness.commissionRate}
                                                    onChange={(e) => setEditingBusiness({ ...editingBusiness, commissionRate: parseInt(e.target.value) })}
                                                    className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/30 focus:bg-white p-4 rounded-2xl outline-none font-bold transition-all text-lg"
                                                />
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</div>
                                            </div>
                                            <p className="text-[10px] text-gray-500 font-medium">Ce taux sera appliqué sur chaque transaction future pour ce client.</p>
                                        </div>

                                        {/* Promotion Management for Restaurants */}
                                        {editingBusiness.category === 'Restaurants' && (
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                                                    <Tag size={14} /> Promotion en cours
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Ex: -20% sur la carte"
                                                        value={editingBusiness.promotion || ''}
                                                        onChange={(e) => setEditingBusiness({ ...editingBusiness, promotion: e.target.value })}
                                                        className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/30 focus:bg-white p-4 rounded-2xl outline-none font-bold transition-all"
                                                    />
                                                </div>
                                                <p className="text-[10px] text-gray-500 font-medium whitespace-pre-line">
                                                    Laissez vide pour retirer la promotion.
                                                    Apparaîtra sous forme de badge "Flash" sur l'application mobile.
                                                </p>
                                            </div>
                                        )}

                                        <button
                                            onClick={() => {
                                                setLocalBusinesses(localBusinesses.map(b => b.id === editingBusiness.id ? editingBusiness : b));
                                                setEditingBusiness(null);
                                            }}
                                            className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:shadow-gray-900/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                                        >
                                            <Save size={18} /> Appliquer les changements
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Modal Facture PDF Immersive */}
                <AnimatePresence>
                    {viewingInvoice && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/80 z-[80] backdrop-blur-xl"
                                onClick={() => setViewingInvoice(null)}
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[90vh] bg-white rounded-3xl z-[90] shadow-2xl overflow-hidden flex flex-col"
                            >
                                {/* Header Modal Facture */}
                                <div className="p-6 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center font-black">Y</div>
                                        <h3 className="font-black text-gray-900">Aperçu de la Facture #INV-{viewingInvoice.id}</h3>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-3 bg-gray-200 hover:bg-gray-300 rounded-xl transition-colors"><Printer size={20} /></button>
                                        <button onClick={() => setViewingInvoice(null)} className="p-3 bg-gray-900 text-white rounded-xl transition-colors"><X size={20} /></button>
                                    </div>
                                </div>

                                {/* Le corps de la facture stylisé façon PDF */}
                                <div className="flex-1 overflow-y-auto p-12 bg-white">
                                    <div className="max-w-md mx-auto space-y-10">
                                        {/* Logo & Info Société */}
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h1 className="text-3xl font-black text-gray-900 mb-1">FACTURE</h1>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{viewingInvoice.id}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-extrabold text-sm text-gray-900">Yes-Africa SAS</p>
                                                <p className="text-[10px] text-gray-500 font-medium">Plateau, Dakar, Sénégal</p>
                                                <p className="text-[10px] text-gray-500 font-medium">+221 33 000 00 00</p>
                                            </div>
                                        </div>

                                        {/* Info Client */}
                                        <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-100">
                                            <div>
                                                <p className="text-[10px] font-black uppercase text-gray-400 mb-2">Facturé à</p>
                                                <p className="font-black text-gray-900">{viewingInvoice.businessName}</p>
                                                <p className="text-[10px] text-gray-500 font-medium">{viewingInvoice.address || 'Dakar, Sénégal'}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[10px] font-black uppercase text-gray-400 mb-2">Détails</p>
                                                <p className="text-[10px] text-gray-900 font-bold">Date: {viewingInvoice.date || '25 Fév. 2026'}</p>
                                                <p className="text-[10px] text-gray-900 font-bold">Échéance: Immédiate</p>
                                            </div>
                                        </div>

                                        {/* Table des items */}
                                        <div className="space-y-4">
                                            <div className="flex justify-between text-[10px] font-black uppercase text-gray-400 px-2">
                                                <span>Description</span>
                                                <span>Total</span>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-2xl flex justify-between items-center">
                                                <div className="space-y-1">
                                                    <p className="font-black text-gray-900 text-sm">{viewingInvoice.planName || 'Abonnement PRO Elite'}</p>
                                                    <p className="text-[10px] text-gray-500 font-medium">Période: Février 2026</p>
                                                </div>
                                                <p className="font-black text-gray-900 text-lg">{viewingInvoice.amount}</p>
                                            </div>
                                        </div>

                                        {/* Totaux & Signature */}
                                        <div className="pt-8 space-y-4">
                                            <div className="flex justify-between items-center px-2">
                                                <p className="text-sm font-bold text-gray-500">Sous-total</p>
                                                <p className="text-sm font-black text-gray-900">{viewingInvoice.amount}</p>
                                            </div>
                                            <div className="flex justify-between items-center px-4 py-6 bg-black text-white rounded-2xl">
                                                <p className="text-base font-black uppercase tracking-widest">Total Payé</p>
                                                <p className="text-2xl font-black">{viewingInvoice.amount}</p>
                                            </div>
                                        </div>

                                        {/* Footer PDF */}
                                        <div className="text-center pt-8">
                                            <p className="text-[10px] text-gray-400 font-medium leading-relaxed italic">
                                                Cette facture est générée numériquement. Merci de votre confiance en Yes-Africa Pro.
                                                Tous droits réservés.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Action */}
                                <div className="p-6 bg-gray-50 border-t border-gray-100 flex gap-4">
                                    <button className="flex-1 py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl shadow-primary/20">
                                        <Download size={18} /> Télécharger PDF
                                    </button>
                                    <button className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                                        <Send size={18} /> Envoyer Email
                                    </button>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

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

                    {activeMenu === 'businesses' && (
                        <div className="max-w-7xl mx-auto space-y-6 pb-20">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <div>
                                    <h2 className="text-xl font-extrabold text-gray-900">Gérer les établissements</h2>
                                    <p className="text-sm text-gray-500">Ajoutez, modifiez ou supprimez des lieux (restaurants, hôtels, etc.) sur la plateforme.</p>
                                </div>
                                <div className="flex gap-3 w-full sm:w-auto">
                                    <button className="flex-1 sm:flex-none px-4 py-2 bg-gray-100 text-gray-700 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                                        <Filter size={18} /> Filtres
                                    </button>
                                    <button className="flex-1 sm:flex-none px-5 py-2 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:bg-primary-hover transition-colors active:scale-95">
                                        + Nouveau
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse min-w-[800px]">
                                        <thead>
                                            <tr className="bg-gray-50/80 border-b border-gray-100 text-sm">
                                                <th className="p-4 font-bold text-gray-500 whitespace-nowrap">Établissement</th>
                                                <th className="p-4 font-bold text-gray-500 whitespace-nowrap">Catégorie</th>
                                                <th className="p-4 font-bold text-gray-500 whitespace-nowrap">Com. (%)</th>
                                                <th className="p-4 font-bold text-gray-500 whitespace-nowrap">Promo Aktive</th>
                                                <th className="p-4 font-bold text-gray-500 text-right whitespace-nowrap">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {businesses.map((bus) => (
                                                <tr key={bus.id} className="hover:bg-gray-50 transition-colors group">
                                                    <td className="p-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm shrink-0 border border-gray-100">
                                                                <img src={bus.image} alt={bus.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                            </div>
                                                            <div>
                                                                <div className="font-bold text-gray-900 group-hover:text-primary transition-colors">{bus.name}</div>
                                                                <div className="flex items-center gap-1 text-[11px] font-medium text-gray-500 mt-0.5">
                                                                    <MapPin size={12} /> {bus.location}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-4">
                                                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">{bus.category}</span>
                                                    </td>
                                                    <td className="p-4">
                                                        <div className="flex items-center gap-2 font-black text-primary bg-primary/5 w-fit px-3 py-1 rounded-lg border border-primary/10">
                                                            {bus.commissionRate}%
                                                        </div>
                                                    </td>
                                                    <td className="p-4">
                                                        {bus.promotion ? (
                                                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest bg-red-100 text-red-700 border border-red-200 animate-pulse">
                                                                <Tag size={12} /> {bus.promotion}
                                                            </span>
                                                        ) : (
                                                            <span className="text-[10px] font-bold text-gray-300">Aucune</span>
                                                        )}
                                                    </td>
                                                    <td className="p-4 text-right">
                                                        <div className="flex items-center justify-end gap-1 opacity-100 md:opacity-50 group-hover:opacity-100 transition-opacity">
                                                            <button
                                                                onClick={() => setEditingBusiness(bus)}
                                                                className="p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors" title="Fixer Taux & Promos"><Settings size={18} /></button>
                                                            <button className="p-2 text-gray-400 hover:text-green-500 hover:bg-green-50 rounded-lg transition-colors" title="Modifier"><Edit size={18} /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeMenu === 'users' && (
                        <div className="max-w-7xl mx-auto space-y-6 pb-20">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <div>
                                    <h2 className="text-xl font-extrabold text-gray-900">Utilisateurs & CRM</h2>
                                    <p className="text-sm text-gray-500">Vue globale sur les membres de la communauté Yes-Africa.</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
                                <Users size={64} className="mx-auto text-gray-200 mb-6" />
                                <h3 className="text-xl font-extrabold text-gray-900 mb-2">Base de données CRM Synchronisée</h3>
                                <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
                                    Vos 8 409 utilisateurs sont chiffrés et sécurisés. Vous pouvez exporter la liste pour vos campagnes de newsletters ou le support client.
                                </p>
                                <div className="flex gap-4">
                                    <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors">Importer des contacts</button>
                                    <button className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-gray-900/20 active:scale-95 transition-all">Exporter CSV</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeMenu === 'moderation' && (
                        <div className="max-w-7xl mx-auto space-y-6 pb-20">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <div>
                                    <h2 className="text-xl font-extrabold text-gray-900">Avis & Modération Contentieuse</h2>
                                    <p className="text-sm text-gray-500">Gardez un œil sur les dérives et fausses informations publiées.</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-bold text-gray-500 uppercase tracking-widest text-xs px-2">Signalements récents nécessitant action</h3>

                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col sm:flex-row border-l-4 border-l-red-500 hover:shadow-md transition-shadow">
                                    <div className="p-6 flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="bg-red-100 text-red-600 p-2 rounded-lg"><AlertTriangle size={20} /></div>
                                            <h4 className="font-bold text-gray-900 text-lg">Avis signalé pour Faux Propos</h4>
                                        </div>
                                        <p className="text-gray-600 bg-gray-50 p-4 rounded-xl text-sm italic border border-gray-100 my-4">
                                            "Endroit horrible, le gérant a volé mon sac et la nourriture était périmée de 3 semaines."
                                        </p>
                                        <div className="flex flex-wrap gap-4 text-xs font-bold text-gray-500">
                                            <span>Sur l'établissement : <strong className="text-gray-900">Terrou-Bi</strong></span>
                                            <span>Signalé par : <strong>Système Anti-Spam (Lexi AI)</strong></span>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-6 sm:border-l border-gray-100 flex flex-row sm:flex-col gap-3 justify-center">
                                        <button className="w-full py-3 px-6 bg-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-600/20 hover:bg-red-700 active:scale-95 transition-all whitespace-nowrap">Supprimer l'avis</button>
                                        <button className="w-full py-3 px-6 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap">Classer l'alerte</button>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col sm:flex-row border-l-4 border-l-amber-500 hover:shadow-md transition-shadow">
                                    <div className="p-6 flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="bg-amber-100 text-amber-600 p-2 rounded-lg"><ShieldAlert size={20} /></div>
                                            <h4 className="font-bold text-gray-900 text-lg">Propriétaire Litigieux</h4>
                                        </div>
                                        <p className="text-gray-600 text-sm my-2">
                                            L'établissement <strong>Le Djoloff</strong> a fait l'objet de 5 plaintes utilisateurs ce mois-ci concernant des prix différents sur place par rapport au menu affiché sur Yes-Africa.
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-6 sm:border-l border-gray-100 flex flex-row sm:flex-col gap-3 justify-center">
                                        <button className="w-full py-3 px-6 bg-amber-500 text-white font-bold rounded-xl shadow-lg shadow-amber-500/20 hover:bg-amber-600 active:scale-95 transition-all whitespace-nowrap">Avertir par email</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeMenu === 'finance' && (
                        <div className="max-w-7xl mx-auto space-y-8 pb-20">
                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div>
                                    <h2 className="text-2xl font-black text-gray-900 mb-2">Comptabilité & Commissions</h2>
                                    <p className="text-gray-500 font-medium">Suivez les revenus générés par les réservations (15% de commission par défaut).</p>
                                </div>
                                <div className="flex gap-4">
                                    <button className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold active:scale-95 transition-all">Télécharger Rapport Fiscal</button>
                                </div>
                            </div>

                            {/* Revenue Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl text-white shadow-xl">
                                    <span className="text-gray-400 font-bold text-xs uppercase tracking-widest block mb-4">Total Commissions Encaissées</span>
                                    <div className="text-4xl font-black mb-2">2,135,000 <span className="text-xl">FCFA</span></div>
                                    <div className="text-green-400 text-sm font-bold flex items-center gap-2">
                                        <TrendingUp size={16} /> +12.5% vs mois dernier
                                    </div>
                                </div>
                                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                    <span className="text-gray-400 font-bold text-xs uppercase tracking-widest block mb-4">Commission en attente (Escrow)</span>
                                    <div className="text-3xl font-black text-gray-900 mb-2">485,200 <span className="text-lg">FCFA</span></div>
                                    <div className="text-gray-500 text-sm font-medium">Réservations non encore consommées</div>
                                </div>
                                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                    <span className="text-gray-400 font-bold text-xs uppercase tracking-widest block mb-4">Taux de Commission Moyen</span>
                                    <div className="text-3xl font-black text-primary mb-2">15.0 <span className="text-lg">%</span></div>
                                    <div className="text-gray-500 text-sm font-medium">Configurable par partenaire</div>
                                </div>
                            </div>

                            {/* Transaction Table */}
                            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                                    <h3 className="font-extrabold text-lg">Dernières Commissions (Flash Report)</h3>
                                    <div className="flex gap-2">
                                        <button className="p-2 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"><Filter size={18} /></button>
                                        <button className="p-2 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"><Search size={18} /></button>
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-gray-50/50 text-[11px] font-black uppercase tracking-widest text-gray-400">
                                                <th className="p-6">Date</th>
                                                <th className="p-6">Établissement</th>
                                                <th className="p-6">Volume Vente (GMV)</th>
                                                <th className="p-6">Commission (15%)</th>
                                                <th className="p-6">Type</th>
                                                <th className="p-6">Statut</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {[
                                                { date: "25 Fév. 2026", name: "Terrou-Bi", amount: "450 000 FCFA", comm: "67 500 FCFA", type: "Hôtel", status: "Payé" },
                                                { date: "25 Fév. 2026", name: "Chez Loutcha", amount: "25 000 FCFA", comm: "3 750 FCFA", type: "Restau", status: "Payé" },
                                                { date: "24 Fév. 2026", name: "Pullman Dakar", amount: "180 000 FCFA", comm: "27 000 FCFA", type: "Hôtel", status: "En attente" },
                                                { date: "24 Fév. 2026", name: "Le Lagon", amount: "120 000 FCFA", comm: "18 000 FCFA", type: "Restau", status: "Payé" },
                                            ].map((row, i) => (
                                                <tr key={i} className="hover:bg-gray-50/80 transition-colors">
                                                    <td className="p-6 text-sm font-bold text-gray-500">{row.date}</td>
                                                    <td className="p-6">
                                                        <div className="font-black text-gray-900">{row.name}</div>
                                                        <div className="text-xs text-gray-400 font-bold">{row.type}</div>
                                                    </td>
                                                    <td className="p-6 font-extrabold text-gray-900 text-sm">{row.amount}</td>
                                                    <td className="p-6 text-primary font-black text-base">{row.comm}</td>
                                                    <td className="p-6">
                                                        <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${row.type === 'Hôtel' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' : 'bg-orange-50 text-orange-600 border border-orange-100'}`}>
                                                            {row.type}
                                                        </span>
                                                    </td>
                                                    <td className="p-6">
                                                        <div className="flex items-center gap-2">
                                                            <div className={`w-2 h-2 rounded-full ${row.status === 'Payé' ? 'bg-green-500' : 'bg-amber-500'}`}></div>
                                                            <span className="text-sm font-bold text-gray-700">{row.status}</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeMenu === 'billing' && (
                        <div className="max-w-7xl mx-auto space-y-8 pb-20">
                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div>
                                    <h2 className="text-2xl font-black text-gray-900 mb-2">Cycle de Facturation Mensuel</h2>
                                    <p className="text-gray-500 font-medium">Générez et envoyez les factures de commissions à vos {localBusinesses.length} partenaires.</p>
                                </div>
                                <button
                                    onClick={() => alert('Processus de facturation globale lancé pour tous les partenaires.')}
                                    className="px-6 py-4 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20 flex items-center gap-2 hover:scale-105 transition-all"
                                >
                                    <Send size={18} /> Tout Envoyer (Fév. 2026)
                                </button>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {localBusinesses.slice(0, 6).map(bus => (
                                    <div key={bus.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="flex items-center gap-4">
                                                <img src={bus.image} className="w-14 h-14 rounded-2xl object-cover border border-gray-100" />
                                                <div>
                                                    <h4 className="font-black text-gray-900">{bus.name}</h4>
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 bg-gray-50 px-2 py-0.5 rounded italic">Réf: INV-2026-02-{bus.id}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-lg font-black text-gray-900">{(Math.random() * 50000 + 10000).toFixed(0).toLocaleString()} <span className="text-xs">FCFA</span></div>
                                                <span className="text-[10px] font-bold text-gray-400">Commission due</span>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 rounded-2xl p-4 mb-6 flex justify-between items-center border border-gray-100">
                                            <div className="flex items-center gap-2 text-sm font-bold text-gray-600">
                                                <Percent size={14} className="text-primary" /> Taux: {bus.commissionRate}%
                                            </div>
                                            <div className="flex items-center gap-2 text-sm font-bold text-green-600">
                                                <MailCheck size={16} /> Prêt à l'envoi
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => setViewingInvoice({ id: bus.id, businessName: bus.name, amount: (Math.random() * 50000 + 10000).toFixed(0).toLocaleString() + ' FCFA', planName: 'Commissions de Vente' })}
                                                className="flex-1 py-3 bg-gray-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-black transition-colors">Visualiser PDF</button>
                                            <button className="px-5 py-3 border-2 border-primary text-primary rounded-xl font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all">Envoyer</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeMenu === 'subscriptions' && (
                        <div className="max-w-7xl mx-auto space-y-8 pb-20">
                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div>
                                    <h2 className="text-2xl font-black text-gray-900 mb-2">Gestion des Abonnements PRO</h2>
                                    <p className="text-gray-500 font-medium">Suivez les revenus récurrents (MRR) de vos partenaires Premium.</p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="bg-amber-100 text-amber-700 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-2 border border-amber-200">
                                        <Zap size={16} /> MRR: 425,000 FCFA
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-3xl border-2 border-primary shadow-xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-150 transition-transform">
                                        <Crown size={80} className="text-primary" />
                                    </div>
                                    <h3 className="font-black text-lg mb-1">PRO Elite</h3>
                                    <div className="text-3xl font-black text-gray-900 mb-4">25,000 <span className="text-xs">FCFA/mois</span></div>
                                    <ul className="text-xs font-bold text-gray-500 space-y-2 mb-6">
                                        <li className="flex items-center gap-2 text-green-600"><CheckCircle2 size={14} /> Positionnement TOP #1</li>
                                        <li className="flex items-center gap-2 text-green-600"><CheckCircle2 size={14} /> Badge "Elite" Vérifié</li>
                                        <li className="flex items-center gap-2 text-green-600"><CheckCircle2 size={14} /> Commissions réduites (10%)</li>
                                    </ul>
                                    <div className="text-sm font-black text-primary">12 Partenaires actifs</div>
                                </div>

                                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
                                    <h3 className="font-black text-lg mb-1">PRO Starter</h3>
                                    <div className="text-3xl font-black text-gray-900 mb-4">10,000 <span className="text-xs">FCFA/mois</span></div>
                                    <ul className="text-xs font-bold text-gray-500 space-y-2 mb-6">
                                        <li className="flex items-center gap-2 text-green-600"><CheckCircle2 size={14} /> Statistiques Visiteurs</li>
                                        <li className="flex items-center gap-2 text-green-600"><CheckCircle2 size={14} /> 5 Photos HD autorisées</li>
                                        <li className="flex items-center gap-2 text-gray-400"><XCircle size={14} /> Positionnement TOP</li>
                                    </ul>
                                    <div className="text-sm font-black text-gray-900">28 Partenaires actifs</div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-3xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3">
                                        <Percent size={20} className="text-gray-400" />
                                    </div>
                                    <h4 className="font-bold text-gray-400 text-sm">Nouveau Plan</h4>
                                    <button className="mt-2 text-xs font-black text-primary uppercase tracking-widest">+ Créer une offre</button>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                                <div className="p-6 border-b border-gray-100 font-extrabold">Derniers Paiements d'Abonnements</div>
                                <div className="divide-y divide-gray-100">
                                    {[
                                        { name: "Pullman Dakar", plan: "PRO Elite", date: "il y a 2h", amount: "25,000 FCFA" },
                                        { name: "La Téranga Almadies", plan: "PRO Starter", date: "Hier", amount: "10,000 FCFA" },
                                        { name: "Radisson Blu", plan: "PRO Elite", date: "24 Fév.", amount: "25,000 FCFA" },
                                    ].map((sub, i) => (
                                        <div key={i} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer group"
                                            onClick={() => setViewingInvoice({ id: i + 100, businessName: sub.name, amount: sub.amount, planName: sub.plan })}>
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors"><CreditCard size={18} /></div>
                                                <div>
                                                    <div className="font-black text-gray-900 group-hover:text-primary transition-colors">{sub.name}</div>
                                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{sub.plan}</div>
                                                </div>
                                            </div>
                                            <div className="text-right flex items-center gap-8">
                                                <div>
                                                    <div className="font-black text-green-600">{sub.amount}</div>
                                                    <div className="text-[10px] font-bold text-gray-400">{sub.date}</div>
                                                </div>
                                                <FileCheck size={20} className="text-gray-200 group-hover:text-green-500 transition-all" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeMenu === 'settings' && (
                        <div className="max-w-4xl mx-auto space-y-6 pb-20">
                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                                <h2 className="text-2xl font-extrabold text-gray-900 mb-8 flex items-center gap-3">
                                    <Settings className="text-primary" /> Configurations Globales
                                </h2>

                                <div className="space-y-8">
                                    <div className="flex items-start sm:items-center justify-between gap-4 pb-8 border-b border-gray-100">
                                        <div>
                                            <h4 className="font-extrabold text-gray-900 text-lg mb-1">Mode Maintenance (Beta)</h4>
                                            <p className="text-sm text-gray-500">Affiche une page "De retour bientôt" pour tous les visiteurs non-administrateurs.</p>
                                        </div>
                                        <div className="w-14 h-7 bg-gray-200 rounded-full cursor-pointer relative shrink-0 transition-colors">
                                            <div className="w-5 h-5 bg-white rounded-full shadow-md absolute top-1 left-1"></div>
                                        </div>
                                    </div>

                                    <div className="flex items-start sm:items-center justify-between gap-4 pb-8 border-b border-gray-100">
                                        <div>
                                            <h4 className="font-extrabold text-gray-900 text-lg mb-1">Inscriptions Ouvertes</h4>
                                            <p className="text-sm text-gray-500">Autoriser les nouveaux utilisateurs et établissements à s'inscrire sur la plateforme de façon autonome.</p>
                                        </div>
                                        <div className="w-14 h-7 bg-primary rounded-full cursor-pointer relative shrink-0 shadow-inner">
                                            <div className="w-5 h-5 bg-white rounded-full shadow-md absolute top-1 right-1"></div>
                                        </div>
                                    </div>

                                    <div className="flex items-start sm:items-center justify-between gap-4 pb-8 border-b border-gray-100">
                                        <div>
                                            <h4 className="font-extrabold text-gray-900 text-lg mb-1">Validation automatique des avis IA</h4>
                                            <p className="text-sm text-gray-500">Laisse le modèle Lexi AI filtrer et publier automatiquement les bons avis sans modération humaine.</p>
                                        </div>
                                        <div className="w-14 h-7 bg-green-500 rounded-full cursor-pointer relative shrink-0 shadow-inner">
                                            <div className="w-5 h-5 bg-white rounded-full shadow-md absolute top-1 right-1"></div>
                                        </div>
                                    </div>

                                    <div className="pt-4 flex justify-end">
                                        <button className="bg-gray-900 text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-black transition-colors shadow-xl active:scale-95 flex items-center gap-2">
                                            <CheckCircle2 size={20} /> Sauvegarder
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
