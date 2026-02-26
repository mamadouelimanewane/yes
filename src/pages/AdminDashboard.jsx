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
    FileCheck,
    FileText,
    Briefcase,
    Tag,
    Save,
    Percent,
    Phone,
    Globe,
    Calendar,
    Image as ImageIcon,
    Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { businesses } from '../data';

const GlobalStyles = () => (
    <style dangerouslySetInnerHTML={{ __html: `
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .flex-row { flex-direction: row; }
        .items-center { align-items: center; }
        .items-start { align-items: flex-start; }
        .items-end { align-items: flex-end; }
        .justify-between { justify-content: space-between; }
        .justify-center { justify-content: center; }
        .justify-end { justify-content: flex-end; }
        .gap-1 { gap: 4px; }
        .gap-2 { gap: 8px; }
        .gap-3 { gap: 12px; }
        .gap-4 { gap: 16px; }
        .gap-6 { gap: 24px; }
        .gap-8 { gap: 32px; }
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .w-full { width: 100%; }
        .w-10 { width: 40px; }
        .w-12 { width: 48px; }
        .w-16 { width: 64px; }
        .w-24 { width: 96px; }
        .w-64 { width: 256px; }
        .h-full { height: 100%; }
        .h-10 { height: 40px; }
        .h-12 { height: 48px; }
        .h-16 { height: 64px; }
        .h-24 { height: 96px; }
        .h-20 { height: 80px; }
        .min-h-screen { min-height: 100vh; }
        .bg-white { background-color: #ffffff; }
        .bg-black { background-color: #000000; }
        .bg-gray-50 { background-color: #F9FAFB; }
        .bg-gray-100 { background-color: #F3F4F6; }
        .bg-gray-200 { background-color: #E5E7EB; }
        .bg-gray-900 { background-color: #111827; }
        .bg-primary { background-color: var(--primary); }
        .bg-red-50 { background-color: #FEF2F2; }
        .bg-red-100 { background-color: #FEE2E2; }
        .bg-green-50 { background-color: #ECFDF5; }
        .bg-green-100 { background-color: #D1FAE5; }
        .bg-amber-50 { background-color: #FFFBEB; }
        .bg-amber-100 { background-color: #FEF3C7; }
        .text-white { color: #ffffff; }
        .text-gray-400 { color: #9CA3AF; }
        .text-gray-500 { color: #6B7280; }
        .text-gray-600 { color: #4B5563; }
        .text-gray-700 { color: #374151; }
        .text-gray-900 { color: #111827; }
        .text-primary { color: var(--primary); }
        .text-red-400 { color: #F87171; }
        .text-red-500 { color: #EF4444; }
        .text-red-600 { color: #DC2626; }
        .text-green-600 { color: #059669; }
        .text-green-700 { color: #047857; }
        .text-amber-600 { color: #D97706; }
        .rounded-lg { border-radius: 8px; }
        .rounded-xl { border-radius: 12px; }
        .rounded-2xl { border-radius: 16px; }
        .rounded-3xl { border-radius: 24px; }
        .rounded-full { border-radius: 9999px; }
        .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
        .shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
        .shadow-xl { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
        .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
        .border { border: 1px solid #E5E7EB; }
        .border-2 { border-width: 2px; }
        .border-transparent { border-color: transparent; }
        .border-gray-100 { border-color: #F3F4F6; }
        .border-gray-200 { border-color: #E5E7EB; }
        .border-white\\/10 { border-color: rgba(255,255,255,0.1); }
        .p-1 { padding: 4px; }
        .p-2 { padding: 8px; }
        .p-3 { padding: 12px; }
        .p-4 { padding: 16px; }
        .p-6 { padding: 24px; }
        .p-8 { padding: 32px; }
        .p-12 { padding: 48px; }
        .px-2 { padding-left: 8px; padding-right: 8px; }
        .px-3 { padding-left: 12px; padding-right: 12px; }
        .px-4 { padding-left: 16px; padding-right: 16px; }
        .px-5 { padding-left: 20px; padding-right: 20px; }
        .px-6 { padding-left: 24px; padding-right: 24px; }
        .px-8 { padding-left: 32px; padding-right: 32px; }
        .py-1 { padding-top: 4px; padding-bottom: 4px; }
        .py-2 { padding-top: 8px; padding-bottom: 8px; }
        .py-3 { padding-top: 12px; padding-bottom: 12px; }
        .py-4 { padding-top: 16px; padding-bottom: 16px; }
        .py-6 { padding-top: 24px; padding-bottom: 24px; }
        .pb-20 { padding-bottom: 80px; }
        .mb-1 { margin-bottom: 4px; }
        .mb-2 { margin-bottom: 8px; }
        .mb-4 { margin-bottom: 16px; }
        .mb-6 { margin-bottom: 24px; }
        .mb-8 { margin-bottom: 32px; }
        .mb-10 { margin-bottom: 40px; }
        .mt-1 { margin-top: 4px; }
        .mt-3 { margin-top: 12px; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .font-medium { font-weight: 500; }
        .font-bold { font-weight: 700; }
        .font-extrabold { font-weight: 800; }
        .font-black { font-weight: 900; }
        .text-xs { font-size: 12px; }
        .text-sm { font-size: 14px; }
        .text-base { font-size: 16px; }
        .text-lg { font-size: 18px; }
        .text-xl { font-size: 20px; }
        .text-2xl { font-size: 24px; }
        .text-3xl { font-size: 30px; }
        .text-4xl { font-size: 36px; }
        .uppercase { text-transform: uppercase; }
        .italic { font-style: italic; }
        .tracking-wide { letter-spacing: 0.025em; }
        .tracking-tight { letter-spacing: -0.025em; }
        .tracking-widest { letter-spacing: 0.1em; }
        .truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .text-right { text-align: right; }
        .border-collapse { border-collapse: collapse; }
        .whitespace-nowrap { white-space: nowrap; }
        .whitespace-pre-line { white-space: pre-line; }
        .transition-all { transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1); }
        .transition-colors { transition: background-color 150ms, border-color 150ms, color 150ms; }
        .duration-500 { transition-duration: 500ms; }
        .overflow-hidden { overflow: hidden; }
        .overflow-y-auto { overflow-y: auto; }
        .overflow-x-auto { overflow-x: auto; }
        .shrink-0 { flex-shrink: 0; }
        .flex-1 { flex: 1 1 0%; }
        .sticky { position: sticky; }
        .top-0 { top: 0; }
        .inset-0 { position: absolute; top: 0; right: 0; bottom: 0; left: 0; }
        .z-10 { z-index: 10; }
        .z-20 { z-index: 20; }
        .z-40 { z-index: 40; }
        .z-50 { z-index: 50; }
        .aspect-square { aspect-ratio: 1 / 1; }
        .object-cover { object-fit: cover; }
        .opacity-50 { opacity: 0.5; }
        .opacity-100 { opacity: 1; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
        
        .space-y-2 > * + * { margin-top: 8px; }
        .space-y-4 > * + * { margin-top: 16px; }
        .space-y-6 > * + * { margin-top: 24px; }
        .space-y-8 > * + * { margin-top: 32px; }
        .space-y-10 > * + * { margin-top: 40px; }
        .divide-y > * + * { border-top-width: 1px; }
        .divide-gray-100 > * + * { border-color: #F3F4F6; }
        
        .max-w-md { max-width: 448px; }
        .max-w-lg { max-width: 512px; }
        .max-w-2xl { max-width: 672px; }
        .max-w-7xl { max-width: 1280px; }

        @media (min-width: 640px) {
            .sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .sm\\:flex-row { flex-direction: row; }
            .sm\\:flex-col { flex-direction: column; }
            .sm\\:items-center { align-items: center; }
            .sm\\:mt-0 { margin-top: 0; }
            .sm\\:w-auto { width: auto; }
        }
        @media (min-width: 768px) {
            .md\\:block { display: block; }
            .md\\:flex { display: flex; }
            .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
            .md\\:opacity-50 { opacity: 0.5; }
        }
        @media (min-width: 1024px) {
            .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
            .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
            .lg\\:col-span-2 { grid-column: span 2 / span 2; }
            .lg\\:block { display: block; }
            .lg\\:hidden { display: none; }
        }
        
        button:active { transform: scale(0.95); }
        .group:hover .group-hover\\:scale-110 { transform: scale(1.1); }
        .group:hover .group-hover\\:text-primary { color: var(--primary); }
        .group:hover .group-hover\\:opacity-100 { opacity: 1; }
        
        .bg-primary\\/5 { background-color: rgba(227, 27, 35, 0.05); }
        .bg-primary\\/10 { background-color: rgba(227, 27, 35, 0.1); }
        .border-primary\\/10 { border-color: rgba(227, 27, 35, 0.1); }
        .shadow-primary\\/20 { box-shadow: 0 10px 15px -3px rgba(227, 27, 35, 0.2); }
    ` }} />
);

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
    const [selectedPartner, setSelectedPartner] = useState(null);

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
        <div style={{ width: '280px', background: '#111827', color: 'white', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '20px', boxShadow: '0 4px 12px rgba(227, 27, 35, 0.3)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    Y
                </div>
                <div>
                    <span style={{ fontWeight: 800, fontSize: '20px', letterSpacing: '-0.5px', display: 'block' }}>Yes-Africa</span>
                    <span style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--primary)' }}>Super Admin</span>
                </div>
            </div>

            <nav style={{ flex: 1, padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto' }}>
                {menuItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => { setActiveMenu(item.id); setIsSidebarOpen(false); }}
                        style={{
                            width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: 'none',
                            fontWeight: 700, transition: 'all 0.2s', cursor: 'pointer', textAlign: 'left',
                            background: activeMenu === item.id ? 'var(--primary)' : 'transparent',
                            color: activeMenu === item.id ? 'white' : '#9CA3AF',
                        }}
                        onMouseEnter={(e) => { if (activeMenu !== item.id) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'white'; }}
                        onMouseLeave={(e) => { if (activeMenu !== item.id) e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = activeMenu === item.id ? 'white' : '#9CA3AF'; }}
                    >
                        <item.icon size={20} />
                        <span style={{ fontSize: '14px' }}>{item.label}</span>
                    </button>
                ))}
            </nav>

            <div style={{ padding: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <button
                    onClick={() => {
                        localStorage.removeItem('isAdminAuthenticated');
                        window.location.href = '/login';
                    }}
                    style={{
                        width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: 'none',
                        fontWeight: 700, color: '#F87171', background: 'transparent', cursor: 'pointer', transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(248,113,113,0.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                    <LogOut size={20} /> <span style={{ fontSize: '14px' }}>Déconnexion</span>
                </button>
            </div>
        </div>
    );

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#F9FAFB', display: 'flex', height: '100vh', overflow: 'hidden', fontFamily: "'Inter', sans-serif" }}>
            <GlobalStyles />
            {/* Desktop Sidebar */}
            <div style={{ display: typeof window !== 'undefined' && window.innerWidth < 1024 ? 'none' : 'block', flexShrink: 0, boxShadow: '4px 0 24px rgba(0,0,0,0.05)', zIndex: 20 }}>
                <Sidebar />
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 40, backdropFilter: 'blur(4px)' }}
                            onClick={() => setIsSidebarOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            style={{ position: 'fixed', insetY: 0, left: 0, width: '280px', zIndex: 50, boxShadow: '8px 0 32px rgba(0,0,0,0.2)' }}
                        >
                            <Sidebar />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', position: 'relative', width: '100%' }}>
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

                {/* Modal Profil Complet du Partenaire */}
                <AnimatePresence>
                    {selectedPartner && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
                                onClick={() => setSelectedPartner(null)}
                            />
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100 }}
                                className="fixed top-0 right-0 h-full w-full max-w-2xl bg-white z-[70] shadow-2xl flex flex-col"
                            >
                                <div className="p-8 overflow-y-auto flex-1">
                                    <div className="flex justify-between items-start mb-10">
                                        <div className="flex gap-6 items-center">
                                            <img src={selectedPartner.image} className="w-24 h-24 rounded-3xl object-cover shadow-xl border-4 border-white" />
                                            <div>
                                                <h3 className="text-3xl font-black text-gray-900">{selectedPartner.name}</h3>
                                                <p className="flex items-center gap-1 text-primary font-black uppercase tracking-widest text-xs mt-1">
                                                    <Crown size={14} /> Partenaire {selectedPartner.featured ? 'Elite' : 'Standard'}
                                                </p>
                                            </div>
                                        </div>
                                        <button onClick={() => setSelectedPartner(null)} className="p-3 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-colors"><X size={24} /></button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                        <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Contact & Localisation</p>
                                            <ul className="space-y-4">
                                                <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                                    <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm"><Phone size={14} /></div>
                                                    {selectedPartner.phone || '+221 33 000 00 00'}
                                                </li>
                                                <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                                    <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm"><Globe size={14} /></div>
                                                    {selectedPartner.website || 'www.partner.sn'}
                                                </li>
                                                <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                                    <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm"><MapPin size={14} /></div>
                                                    {selectedPartner.location}
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Informations Business</p>
                                            <ul className="space-y-4">
                                                <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                                    <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm"><Clock size={14} /></div>
                                                    {selectedPartner.hours || '09h - 22h'}
                                                </li>
                                                <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                                    <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm"><Briefcase size={14} /></div>
                                                    {selectedPartner.category}
                                                </li>
                                                <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                                    <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm"><Star size={14} /></div>
                                                    {selectedPartner.rating} / 5 ({selectedPartner.reviews} avis)
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <h4 className="font-black text-lg text-gray-900 flex items-center gap-2">
                                            <ImageIcon size={20} className="text-primary" /> Bibliothèque Médias
                                        </h4>
                                        <div className="grid grid-cols-3 gap-3">
                                            <img src={selectedPartner.image} className="aspect-square rounded-2xl object-cover border-2 border-primary/20 p-1" />
                                            <div className="aspect-square rounded-2xl bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-200">
                                                <button className="text-[10px] font-black text-gray-400 uppercase">+ Photo</button>
                                            </div>
                                            <div className="aspect-square rounded-2xl bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-200">
                                                <button className="text-[10px] font-black text-gray-400 uppercase">+ Photo</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-10 pt-10 border-t border-gray-100">
                                        <div className="flex gap-4">
                                            <button className="flex-1 py-4 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs">Modifier les infos</button>
                                            <button className="px-8 py-4 bg-red-50 text-red-600 rounded-2xl font-black uppercase tracking-widest text-xs">Désactiver</button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Topbar */}
                <header style={{ background: 'white', borderBottom: '1px solid #E5E7EB', height: '80px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', zIndex: 10, boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <button onClick={() => setIsSidebarOpen(true)} style={{ display: typeof window !== 'undefined' && window.innerWidth < 1024 ? 'flex' : 'none', padding: '8px', border: 'none', background: 'transparent', cursor: 'pointer', color: '#4B5563', alignItems: 'center', justifyContent: 'center' }}>
                            <Menu size={24} />
                        </button>
                        <h1 style={{ fontSize: '24px', fontStretch: 'condensed', fontWeight: 900, color: '#111827', margin: 0 }}>
                            {menuItems.find(m => m.id === activeMenu)?.label}
                        </h1>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                        <div style={{ display: typeof window !== 'undefined' && window.innerWidth < 768 ? 'none' : 'flex', alignItems: 'center', gap: '8px', background: '#F3F4F6', padding: '10px 20px', borderRadius: '50px', width: '300px', border: '1px solid transparent', transition: 'all 0.2s' }}>
                            <Search size={18} style={{ color: '#9CA3AF', flexShrink: 0 }} />
                            <input
                                type="text"
                                placeholder="Rechercher..."
                                style={{ background: 'transparent', border: 'none', outline: 'none', fontSize: '14px', width: '100%', fontWeight: 500 }}
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <button style={{ position: 'relative', padding: '8px', border: 'none', background: 'transparent', cursor: 'pointer', color: '#9CA3AF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Bell size={24} />
                            <span style={{ position: 'absolute', top: '8px', right: '8px', width: '10px', height: '10px', background: 'var(--primary)', borderRadius: '50%', border: '2px solid white' }}></span>
                        </button>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingLeft: '24px', borderLeft: '1px solid #E5E7EB' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#111827', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                                MA
                            </div>
                            <div style={{ display: typeof window !== 'undefined' && window.innerWidth < 768 ? 'none' : 'block' }}>
                                <span style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: '#111827' }}>Mamadou Admin</span>
                                <span style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Super Admin</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Scrollable Area */}
                <main style={{ flex: 1, overflowY: 'auto', padding: '32px', background: '#F9FAFB', position: 'relative' }}>
                    {activeMenu === 'overview' && (
                        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px', paddingBottom: '80px' }}>

                            {/* Stats Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
                                {stats.map((stat, idx) => (
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
                                            {localBusinesses.map((bus) => (
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
                                                                onClick={() => setSelectedPartner(bus)}
                                                                className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors" title="Profil Partenaire"><Eye size={18} /></button>
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
