import React, { useState } from 'react';
import { 
    LayoutDashboard, 
    CalendarCheck, 
    MessageSquare, 
    Settings, 
    TrendingUp, 
    CheckCircle2, 
    XCircle, 
    Bell, 
    Clock, 
    User, 
    Wallet, 
    Power, 
    Star, 
    ChevronRight,
    Store,
    Image as ImageIcon,
    Tag,
    Edit,
    Search,
    Menu,
    LogOut,
    ArrowUpRight,
    MapPin,
    Eye,
    Plus,
    Utensils,
    Camera
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const mockBookings = [
    { id: 101, name: "Ibrahim Diallo", date: "Aujourd'hui, 20:30", guests: 4, type: "Table", status: "pending", amount: 45000, deposit: 6750, phone: "+221 77 123 45 67" },
    { id: 102, name: "Fatoumata Fall", date: "Demain, 19:00", guests: 2, type: "Table", status: "confirmed", amount: 25000, deposit: 3750, phone: "+221 78 987 65 43" },
    { id: 103, name: "Moussa Sarr", date: "28 Fév, 21:00", guests: 6, type: "VIP Lounge", status: "confirmed", amount: 120000, deposit: 18000, phone: "+221 76 543 21 00" },
];

const mockReviews = [
    { id: 1, user: "Awa N.", rating: 5, comment: "Le meilleur Thieboudienne de Dakar ! Service impeccable.", date: "Il y a 2 jours", reply: null },
    { id: 2, user: "Cheikh T.", rating: 4, comment: "Très bon, mais un peu d'attente pour la table.", date: "Hier", reply: "Merci Cheikh, nous faisons le maximum pour améliorer le temps d'attente." }
];

const GlobalStyles = () => (
    <style dangerouslySetInnerHTML={{ __html: `
        .dashboard-container { display: flex; height: 100vh; background: #F9FAFB; overflow: hidden; font-family: 'Inter', sans-serif; }
        .sidebar { width: 280px; background: #111; color: white; display: flex; flexDirection: column; flex-shrink: 0; }
        .main-content { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
        .topbar { height: 80px; background: white; border-bottom: 1px solid #E5E7EB; border-left: 1px solid #E5E7EB; display: flex; align-items: center; justify-content: space-between; padding: 0 32px; flex-shrink: 0; }
        .content-area { flex: 1; overflow-y: auto; padding: 32px; }
        .card { background: white; border-radius: 20px; border: 1px solid #E5E7EB; padding: 24px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); }
        .stat-card { background: white; padding: 24px; border-radius: 24px; border: 1px solid #E5E7EB; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); }
        .btn-primary { background: var(--primary); color: white; border: none; padding: 12px 24px; border-radius: 12px; font-weight: 800; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 8px; }
        .btn-outline { background: white; color: #374151; border: 1px solid #E5E7EB; padding: 12px 24px; border-radius: 12px; font-weight: 800; cursor: pointer; transition: all 0.2s; }
        .nav-link { display: flex; align-items: center; gap: 12px; padding: 14px 20px; border-radius: 14px; color: #9CA3AF; text-decoration: none; font-weight: 700; transition: all 0.2s; cursor: pointer; border: none; background: transparent; width: 100%; }
        .nav-link.active { background: var(--primary); color: white; }
        .nav-link:hover:not(.active) { background: rgba(255,255,255,0.05); color: white; }
        
        .badge { padding: 4px 10px; border-radius: 50px; fontSize: 10px; fontWeight: 900; text-transform: uppercase; letter-spacing: 0.5px; }
        .badge-pending { background: #FEF3C7; color: #D97706; }
        .badge-confirmed { background: #ECFDF5; color: #059669; }
        .badge-admin-review { background: #DBEAFE; color: #2563EB; }
        
        .table-input { border: 1px solid #E5E7EB; border-radius: 8px; padding: 8px 12px; width: 100%; font-size: 14px; }
        .table-input:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 2px rgba(227, 27, 35, 0.1); }
        
        @media (max-width: 1024px) {
            .sidebar { position: fixed; left: -280px; z-index: 1000; transition: all 0.3s; }
            .sidebar.mobile-open { left: 0; }
            .content-area { padding: 16px; }
            .topbar { padding: 0 16px; }
        }
    ` }} />
);

const BusinessDashboard = () => {
    const [activeMenu, setActiveMenu] = useState('overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [bookings, setBookings] = useState(mockBookings);
    const [establishmentInfo, setEstablishmentInfo] = useState({
        name: "L'Escale de Hann Maristes",
        description: "Situé au bord de l'eau, L'Escale vous propose le meilleur des produits frais du jour dans un cadre idyllique.",
        category: "Restaurants",
        location: "Hann Maristes, Dakar",
        phone: "+221 33 821 00 00",
        commission: "15%",
        status: "Active"
    });

    const menuItems = [
        { id: 'overview', icon: LayoutDashboard, label: 'Tableau de bord' },
        { id: 'bookings', icon: CalendarCheck, label: 'Réservations' },
        { id: 'catalogue', icon: Utensils, label: 'Carte & Prix' },
        { id: 'hours', icon: Clock, label: 'Horaires' },
        { id: 'establishment', icon: Store, label: 'Établissement' },
        { id: 'reviews', icon: Star, label: 'Avis Clients' },
        { id: 'promote', icon: Tag, label: 'Promotions' },
        { id: 'settings', icon: Settings, label: 'Paramètres' },
    ];

    const [products, setProducts] = useState([
        { id: 1, name: "Thieboudienne Pilon", price: "4.500", category: "Plats", status: "validated" },
        { id: 2, name: "Yassa au Poulet", price: "3.500", category: "Plats", status: "validated" },
        { id: 3, name: "Jus de Bissap Maison", price: "1.200", category: "Boissons", status: "pending_review" }
    ]);

    const [hours, setHours] = useState([
        { day: "Lundi", open: "11:00", close: "23:00", closed: false },
        { day: "Mardi", open: "11:00", close: "23:00", closed: false },
        { day: "Mercredi", open: "11:00", close: "23:00", closed: false },
        { day: "Jeudi", open: "11:00", close: "23:00", closed: false },
        { day: "Vendredi", open: "11:00", close: "02:00", closed: false },
        { day: "Samedi", open: "11:00", close: "02:00", closed: false },
        { day: "Dimanche", open: "12:00", close: "22:00", closed: false },
    ]);

    const stats = [
        { title: "Vues (30j)", value: "2,450", trend: "+15%", color: 'var(--primary)' },
        { title: "Réservations", value: "128", trend: "+8%", color: 'var(--secondary)' },
        { title: "Note Moyenne", value: "4.8", trend: "0.1", color: '#F59E0B' },
        { title: "Revenu Estimé", value: "980k", trend: "+22%", color: '#10B981' },
    ];

    const handleBookingStatus = (id, status) => {
        setBookings(bookings.map(b => b.id === id ? { ...b, status } : b));
    };

    const SidebarContent = () => (
        <div className="sidebar h-full">
            <div style={{ padding: '32px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '20px', boxShadow: '0 4px 12px rgba(227, 27, 35, 0.3)' }}>Y</div>
                <div>
                    <span style={{ fontWeight: 800, fontSize: '18px', display: 'block' }}>Yes-Pro</span>
                    <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary)' }}>Portail Partenaire</span>
                </div>
            </div>

            <nav style={{ flex: 1, padding: '0 16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {menuItems.map(item => (
                    <button 
                        key={item.id} 
                        onClick={() => { setActiveMenu(item.id); setIsSidebarOpen(false); }}
                        className={`nav-link ${activeMenu === item.id ? 'active' : ''}`}
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>

            <div style={{ padding: '24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>LM</div>
                    <div>
                        <span style={{ fontSize: '13px', fontWeight: 700, display: 'block' }}>Loutcha Manager</span>
                        <Link to="/" style={{ fontSize: '10px', color: '#9CA3AF', textDecoration: 'none' }}>Déconnexion</Link>
                    </div>
                </div>
                <button style={{ width: '100%', background: 'rgba(248,113,113,0.1)', color: '#F87171', border: 'none', padding: '12px', borderRadius: '10px', fontSize: '12px', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <Power size={14} /> FERMER LE LIEU
                </button>
            </div>
        </div>
    );

    return (
        <div className="dashboard-container">
            <GlobalStyles />
            
            {/* Sidebar Desktop */}
            <div className="sidebar" style={{ display: typeof window !== 'undefined' && window.innerWidth < 1024 ? 'none' : 'flex' }}>
                <SidebarContent />
            </div>

            {/* Sidebar Mobile Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <div style={{ position: 'fixed', inset: 0, zIndex: 999 }}>
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
                            onClick={() => setIsSidebarOpen(false)}
                        />
                        <motion.div 
                            initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
                            style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '280px' }}
                        >
                            <SidebarContent />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <div className="main-content">
                {/* Topbar */}
                <header className="topbar">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <button onClick={() => setIsSidebarOpen(true)} style={{ display: typeof window !== 'undefined' && window.innerWidth < 1024 ? 'flex' : 'none', border: 'none', background: 'transparent', cursor: 'pointer' }}>
                            <Menu size={24} />
                        </button>
                        <h1 style={{ fontSize: '20px', fontWeight: 900, color: '#111827', margin: 0 }}>
                            {menuItems.find(m => m.id === activeMenu)?.label}
                        </h1>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{ display: typeof window !== 'undefined' && window.innerWidth < 768 ? 'none' : 'flex', alignItems: 'center', gap: '8px', background: '#F3F4F6', padding: '8px 16px', borderRadius: '50px', width: '250px' }}>
                            <Search size={16} color="#9CA3AF" />
                            <input type="text" placeholder="Rechercher..." style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '13px', width: '100%', fontWeight: 500 }} />
                        </div>
                        <button style={{ position: 'relative', border: 'none', background: 'transparent', cursor: 'pointer', color: '#6B7280' }}>
                            <Bell size={22} />
                            <span style={{ position: 'absolute', top: '0', right: '0', background: 'var(--primary)', width: '8px', height: '8px', borderRadius: '50%', border: '2px solid white' }}></span>
                        </button>
                        <div style={{ width: '40px', height: '40px', borderRadius: '12px', overflow: 'hidden', border: '2px solid #F3F4F6' }}>
                            <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </header>

                <main className="content-area">
                    {activeMenu === 'overview' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            {/* Stats Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="stat-card">
                                        <h3 style={{ fontSize: '11px', fontWeight: 900, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>{stat.title}</h3>
                                        <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between' }}>
                                            <span style={{ fontSize: '28px', fontWeight: 900, color: '#111827' }}>{stat.value}</span>
                                            <span style={{ color: stat.trend.includes('+') ? '#10B981' : '#F59E0B', fontSize: '13px', fontWeight: 800 }}>{stat.trend}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
                                {/* Recent Bookings */}
                                <div className="card" style={{ gridColumn: typeof window !== 'undefined' && window.innerWidth > 1200 ? 'span 2' : 'span 1' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                                        <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#111827' }}>Réservations Récentes</h2>
                                        <button onClick={() => setActiveMenu('bookings')} style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: 800, background: 'none', border: 'none', cursor: 'pointer' }}>Tout voir</button>
                                    </div>
                                    <div style={{ overflowX: 'auto' }}>
                                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                            <thead>
                                                <tr style={{ textAlign: 'left', borderBottom: '1px solid #F3F4F6' }}>
                                                    <th style={{ padding: '12px 16px', fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase' }}>Client</th>
                                                    <th style={{ padding: '12px 16px', fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase' }}>Date</th>
                                                    <th style={{ padding: '12px 16px', fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase' }}>Taille</th>
                                                    <th style={{ padding: '12px 16px', fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase' }}>Statut</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {bookings.slice(0, 5).map(b => (
                                                    <tr key={b.id} style={{ borderBottom: '1px solid #F3F4F6' }}>
                                                        <td style={{ padding: '16px', fontWeight: 700, fontSize: '14px' }}>{b.name}</td>
                                                        <td style={{ padding: '16px', fontSize: '13px', color: '#4B5563' }}>{b.date}</td>
                                                        <td style={{ padding: '16px', fontSize: '13px', fontWeight: 800 }}>{b.guests} pers.</td>
                                                        <td style={{ padding: '16px' }}>
                                                            <span className={`badge badge-${b.status}`}>{b.status === 'confirmed' ? 'Confirmé' : 'En attente'}</span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#111827', marginBottom: '8px' }}>Espace PRO</h2>
                                    <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                        <Plus size={18} /> Nouvelle Réservation
                                    </button>
                                    <button className="btn-outline" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                        <TrendingUp size={18} color="var(--primary)" /> Booster la visibilité
                                    </button>
                                    <div style={{ marginTop: 'auto', padding: '16px', background: '#F9FAFB', borderRadius: '16px' }}>
                                        <span style={{ fontSize: '11px', fontWeight: 800, color: '#9CA3AF', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Santé du Profil</span>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                            <span style={{ fontSize: '13px', fontWeight: 700 }}>Complété à 85%</span>
                                            <ArrowUpRight size={14} color="var(--secondary)" />
                                        </div>
                                        <div style={{ width: '100%', height: '6px', background: '#E5E7EB', borderRadius: '10px' }}>
                                            <div style={{ width: '85%', height: '100%', background: 'var(--secondary)', borderRadius: '10px' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeMenu === 'bookings' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div className="card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                                    <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#111827' }}>Gestion des Réservations</h2>
                                    <div style={{ display: 'flex', gap: '12px' }}>
                                        <button className="btn-outline" style={{ padding: '8px 16px', fontSize: '13px' }}>Aujourd'hui</button>
                                        <button className="btn-outline" style={{ padding: '8px 16px', fontSize: '13px' }}>Filtres</button>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    {bookings.map(booking => (
                                        <div key={booking.id} style={{ padding: '20px', borderRadius: '20px', border: '1px solid #F3F4F6', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <User color="#9CA3AF" />
                                                </div>
                                                <div>
                                                    <h4 style={{ fontSize: '16px', fontWeight: 800, margin: 0 }}>{booking.name}</h4>
                                                    <span style={{ fontSize: '12px', color: '#6B7280' }}>{booking.phone} • {booking.guests} invités</span>
                                                </div>
                                            </div>
                                            
                                            <div style={{ textAlign: 'center' }}>
                                                <span style={{ display: 'block', fontSize: '14px', fontWeight: 800, color: '#111827' }}>{booking.date}</span>
                                                <span style={{ fontSize: '11px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 700 }}>{booking.type}</span>
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                                <div style={{ textAlign: 'right', minWidth: '100px' }}>
                                                    <span className={`badge badge-${booking.status}`}>{booking.status === 'confirmed' ? 'Confirmé' : 'En attente'}</span>
                                                </div>
                                                {booking.status === 'pending' ? (
                                                    <div style={{ display: 'flex', gap: '8px' }}>
                                                        <button onClick={() => handleBookingStatus(booking.id, 'confirmed')} style={{ padding: '8px', borderRadius: '10px', background: '#111', color: 'white', border: 'none', cursor: 'pointer' }}><CheckCircle2 size={18} /></button>
                                                        <button onClick={() => handleBookingStatus(booking.id, 'cancelled')} style={{ padding: '8px', borderRadius: '10px', background: '#FEE2E2', color: '#EF4444', border: 'none', cursor: 'pointer' }}><XCircle size={18} /></button>
                                                    </div>
                                                ) : (
                                                    <button style={{ padding: '8px', borderRadius: '10px', background: '#F3F4F6', color: '#4B5563', border: 'none', cursor: 'pointer' }}><MessageSquare size={18} /></button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeMenu === 'catalogue' && (
                        <div className="card">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                                <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#111827' }}>Catalogue (Produits & Prix)</h2>
                                <button className="btn-primary"><Plus size={18} /> Ajouter un produit</button>
                            </div>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ textAlign: 'left', borderBottom: '1px solid #F3F4F6' }}>
                                            <th style={{ padding: '12px 16px', fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase' }}>Produit</th>
                                            <th style={{ padding: '12px 16px', fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase' }}>Catégorie</th>
                                            <th style={{ padding: '12px 16px', fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase' }}>Prix (FCFA)</th>
                                            <th style={{ padding: '12px 16px', fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase' }}>Statut Admin</th>
                                            <th style={{ padding: '12px 16px', fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map(p => (
                                            <tr key={p.id} style={{ borderBottom: '1px solid #F3F4F6' }}>
                                                <td style={{ padding: '16px', fontWeight: 700, fontSize: '14px' }}>{p.name}</td>
                                                <td style={{ padding: '16px', fontSize: '13px' }}>{p.category}</td>
                                                <td style={{ padding: '16px', fontSize: '14px', fontWeight: 800 }}>{p.price}</td>
                                                <td style={{ padding: '16px' }}>
                                                    <span className={`badge ${p.status === 'validated' ? 'badge-confirmed' : 'badge-admin-review'}`}>
                                                        {p.status === 'validated' ? 'Validé' : 'En révision'}
                                                    </span>
                                                </td>
                                                <td style={{ padding: '16px' }}>
                                                    <button style={{ background: 'none', border: 'none', color: '#6B7280', cursor: 'pointer' }}><Edit size={16} /></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p style={{ fontSize: '12px', color: '#6B7280', marginTop: '20px' }}>
                                * Tout nouveau produit ou changement de prix doit être validé par l'équipe Yes-Africa pour assurer la cohérence des prix sur la plateforme.
                            </p>
                        </div>
                    )}

                    {activeMenu === 'hours' && (
                        <div className="card" style={{ maxWidth: '800px' }}>
                            <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#111827', marginBottom: '24px' }}>Horaires d'ouverture</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {hours.map((h, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '12px', borderRadius: '12px', background: h.closed ? '#F9FAFB' : 'white', border: h.closed ? '1px solid transparent' : '1px solid #F3F4F6' }}>
                                        <div style={{ width: '100px', fontWeight: 800, fontSize: '14px' }}>{h.day}</div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            {!h.closed ? (
                                                <>
                                                    <input type="time" value={h.open} onChange={(e) => {
                                                        const newHours = [...hours];
                                                        newHours[i].open = e.target.value;
                                                        setHours(newHours);
                                                    }} className="table-input" style={{ width: '120px' }} />
                                                    <span>à</span>
                                                    <input type="time" value={h.close} onChange={(e) => {
                                                        const newHours = [...hours];
                                                        newHours[i].close = e.target.value;
                                                        setHours(newHours);
                                                    }} className="table-input" style={{ width: '120px' }} />
                                                </>
                                            ) : (
                                                <span style={{ fontSize: '13px', color: '#9CA3AF', fontWeight: 700 }}>FERMÉ</span>
                                            )}
                                        </div>
                                        <button 
                                            onClick={() => {
                                                const newHours = [...hours];
                                                newHours[i].closed = !newHours[i].closed;
                                                setHours(newHours);
                                            }}
                                            className="btn-outline" 
                                            style={{ padding: '6px 12px', fontSize: '11px', background: h.closed ? '#111' : 'white', color: h.closed ? 'white' : '#374151' }}
                                        >
                                            {h.closed ? 'Ouvrir' : 'Fermer'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end' }}>
                                <button className="btn-primary">Mettre à jour les horaires</button>
                            </div>
                        </div>
                    )}

                    {activeMenu === 'establishment' && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                            <div className="card" style={{ gridColumn: 'span 2' }}>
                                <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#111827', marginBottom: '24px' }}>Infos Établissement</h2>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '13px', fontWeight: 800, color: '#6B7280' }}>Nom de l'établissement</label>
                                        <input type="text" value={establishmentInfo.name} style={{ padding: '12px', borderRadius: '10px', border: '1px solid #E5E7EB', fontWeight: 600 }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '13px', fontWeight: 800, color: '#6B7280' }}>Catégorie</label>
                                        <select style={{ padding: '12px', borderRadius: '10px', border: '1px solid #E5E7EB', fontWeight: 600 }}>
                                            <option>Restaurants</option>
                                            <option>Hotels</option>
                                            <option>Shopping</option>
                                        </select>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', gridColumn: 'span 2' }}>
                                        <label style={{ fontSize: '13px', fontWeight: 800, color: '#6B7280' }}>Description</label>
                                        <textarea rows="4" style={{ padding: '12px', borderRadius: '10px', border: '1px solid #E5E7EB', fontWeight: 600, resize: 'none' }}>{establishmentInfo.description}</textarea>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '13px', fontWeight: 800, color: '#6B7280' }}>Localisation</label>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <input type="text" value={establishmentInfo.location} style={{ flex: 1, padding: '12px', borderRadius: '10px', border: '1px solid #E5E7EB', fontWeight: 600 }} />
                                            <button style={{ padding: '12px', borderRadius: '10px', background: '#F3F4F6', border: 'none' }}><MapPin size={18} /></button>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '13px', fontWeight: 800, color: '#6B7280' }}>Téléphone Contact</label>
                                        <input type="text" value={establishmentInfo.phone} style={{ padding: '12px', borderRadius: '10px', border: '1px solid #E5E7EB', fontWeight: 600 }} />
                                    </div>
                                </div>
                                <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                                    <button className="btn-outline">Annuler</button>
                                    <button className="btn-primary">Enregistrer les modifications</button>
                                </div>
                            </div>

                            <div className="card">
                                <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#111827', marginBottom: '24px' }}>Photos</h2>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                    <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '1/1' }}>
                                        <img src="https://images.unsplash.com/photo-1565463630132-ce018788915e?w=400&h=400&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        <button style={{ position: 'absolute', top: '8px', right: '8px', background: 'white', border: 'none', borderRadius: '8px', padding: '6px' }}><Edit size={14} /></button>
                                    </div>
                                    <div style={{ border: '2px dashed #E5E7EB', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#9CA3AF', cursor: 'pointer' }}>
                                        <Camera size={24} />
                                        <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase' }}>Ajouter</span>
                                    </div>
                                </div>
                                <p style={{ fontSize: '12px', color: '#6B7280', marginTop: '16px', lineHeight: '1.5' }}>
                                    Utilisez des photos haute résolution pour attirer plus de clients (format 4:3 recommandé).
                                </p>
                            </div>
                        </div>
                    )}

                    {activeMenu === 'reviews' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div className="card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                                    <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#111827' }}>Avis Clients</h2>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F59E0B', fontWeight: 900 }}>
                                        <Star size={20} fill="currentColor" /> 4.8 / 5
                                    </div>
                                </div>
                                
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                    {mockReviews.map(review => (
                                        <div key={review.id} style={{ borderBottom: '1px solid #F3F4F6', paddingBottom: '32px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>{review.user[0]}</div>
                                                    <div>
                                                        <span style={{ display: 'block', fontWeight: 800, color: '#111827' }}>{review.user}</span>
                                                        <span style={{ fontSize: '11px', color: '#9CA3AF' }}>{review.date}</span>
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', color: '#F59E0B' }}>
                                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < review.rating ? 'currentColor' : 'none'} />)}
                                                </div>
                                            </div>
                                            <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: '1.6', marginBottom: '20px' }}>{review.comment}</p>
                                            
                                            {review.reply ? (
                                                <div style={{ background: '#F9FAFB', padding: '16px', borderRadius: '16px', borderLeft: '4px solid var(--primary)' }}>
                                                    <span style={{ fontSize: '11px', fontWeight: 900, color: 'var(--primary)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Votre réponse</span>
                                                    <p style={{ fontSize: '14px', color: '#4B5563', margin: 0 }}>{review.reply}</p>
                                                </div>
                                            ) : (
                                                <button style={{ fontSize: '13px', fontWeight: 800, color: 'var(--primary)', border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                    <MessageSquare size={16} /> Répondre à cet avis
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeMenu === 'promote' && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                            <div className="card">
                                <div style={{ background: 'linear-gradient(135deg, #111 0%, #333 100%)', padding: '32px', borderRadius: '24px', color: 'white', position: 'relative', overflow: 'hidden', marginBottom: '24px' }}>
                                    <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'var(--primary)', borderRadius: '50%', filter: 'blur(60px)', opacity: 0.5 }}></div>
                                    <span style={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '2px', display: 'block', marginBottom: '12px' }}>Promo Flash</span>
                                    <h3 style={{ fontSize: '24px', fontWeight: 900, margin: '0 0 8px 0' }}>-20% ce soir</h3>
                                    <p style={{ fontSize: '14px', opacity: 0.8, margin: 0 }}>Activez une offre immédiate pour attirer des clients en heures creuses.</p>
                                    <button style={{ marginTop: '24px', width: '100%', padding: '12px', borderRadius: '12px', background: 'white', color: '#111', border: 'none', fontWeight: 900, cursor: 'pointer' }}>DÉSACTIVER MAINTENANT</button>
                                </div>
                                <h4 style={{ fontSize: '16px', fontWeight: 900, marginBottom: '16px' }}>Performance de l'offre</h4>
                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', background: '#F9FAFB', borderRadius: '16px' }}>
                                    <div>
                                        <span style={{ fontSize: '11px', fontWeight: 800, color: '#9CA3AF', textTransform: 'uppercase', display: 'block' }}>Vues</span>
                                        <span style={{ fontSize: '18px', fontWeight: 900 }}>452</span>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <span style={{ fontSize: '11px', fontWeight: 800, color: '#9CA3AF', textTransform: 'uppercase', display: 'block' }}>Clics</span>
                                        <span style={{ fontSize: '18px', fontWeight: 900 }}>86</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card">
                                <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#111827', marginBottom: '24px' }}>Campagnes Elite</h2>
                                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6', marginBottom: '24px' }}>
                                    Apparaissez en première page des recherches et sur la carte interactive. Les établissements Elite reçoivent en moyenne 3x plus de réservations.
                                </p>
                                <div style={{ border: '1px solid #E5E7EB', padding: '20px', borderRadius: '16px', marginBottom: '24px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                        <span style={{ fontWeight: 800 }}>Plan Booster Hebdo</span>
                                        <span style={{ color: 'var(--primary)', fontWeight: 900 }}>15.000 FCFA</span>
                                    </div>
                                    <ul style={{ padding: 0, margin: 0, listStyle: 'none', fontSize: '13px', color: '#6B7280', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#10B981" /> Top 3 des recherches</li>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#10B981" /> Badge Elite sur votre fiche</li>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#10B981" /> Notifications aux abonnés</li>
                                    </ul>
                                </div>
                                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>S'abonner au Booster</button>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default BusinessDashboard;

