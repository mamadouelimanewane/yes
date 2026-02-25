import React, { useState } from 'react';
import { LayoutDashboard, CalendarCheck, MessageSquare, Settings, TrendingUp, CheckCircle2, XCircle, Bell, Clock, User, Wallet, Power, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const mockBookings = [
    { id: 101, name: "Ibrahim Diallo", date: " Aujourd'hui, 20:30", guests: 4, type: "Table", status: "pending", amount: 45000, deposit: 6750 },
    { id: 102, name: "Fatoumata Fall", date: " Aujourd'hui, 19:00", guests: 2, type: "Table", status: "confirmed", amount: 25000, deposit: 3750 }
];

const BusinessDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [bookings, setBookings] = useState(mockBookings);

    const handleAction = (id, newStatus) => {
        setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
    };

    return (
        <div style={{ background: '#F8F9FA', minHeight: '100vh', paddingBottom: '90px' }}>
            {/* Pro Header */}
            <header style={{ background: '#111', color: 'white', padding: '30px 20px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <span style={{ color: 'var(--primary)', fontSize: '10px', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase' }}>Espace Pro</span>
                        <h1 style={{ fontSize: '1.5rem', fontWeight: 900 }}>Chez Loutcha</h1>
                    </div>
                    <button style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', padding: '10px', borderRadius: '12px', position: 'relative' }}>
                        <Bell size={20} />
                        <span style={{ position: 'absolute', top: '-5px', right: '-5px', background: 'var(--primary)', width: '15px', height: '15px', borderRadius: '50%', fontSize: '9px', fontWeight: 900 }}>3</span>
                    </button>
                </div>

                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px', position: 'relative', zIndex: 10 }}>
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '16px' }}>
                        <div style={{ fontSize: '10px', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 800, textTransform: 'uppercase' }}><Wallet size={12} /> Acomptes (24h)</div>
                        <div style={{ fontSize: '1.3rem', fontWeight: 900, marginTop: '5px' }}>10.500 <span style={{ fontSize: '10px', opacity: 0.6 }}>FCFA</span></div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '16px' }}>
                        <div style={{ fontSize: '10px', color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 800, textTransform: 'uppercase' }}><CalendarCheck size={12} /> Réservations</div>
                        <div style={{ fontSize: '1.3rem', fontWeight: 900, marginTop: '5px' }}>12 <span style={{ fontSize: '10px', opacity: 0.6 }}>AUJOURD'HUI</span></div>
                    </div>
                </div>
            </header>

            <main className="container" style={{ position: 'relative', top: '-20px', zIndex: 20 }}>
                {/* Tabs */}
                <div style={{ display: 'flex', background: 'white', padding: '4px', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', overflowX: 'auto', gap: '4px' }}>
                    {[
                        { id: 'overview', icon: <LayoutDashboard size={14} />, label: "Vue" },
                        { id: 'bookings', icon: <CalendarCheck size={14} />, label: "Réservations" },
                        { id: 'messages', icon: <MessageSquare size={14} />, label: "Msgs" }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                flex: 1, minWidth: '90px', padding: '12px 0', border: 'none', borderRadius: '12px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px',
                                background: activeTab === tab.id ? '#111' : 'transparent',
                                color: activeTab === tab.id ? 'white' : '#666',
                                fontWeight: 800, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px'
                            }}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>

                <div style={{ marginTop: '20px' }}>
                    {activeTab === 'bookings' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {bookings.map(booking => (
                                <div key={booking.id} className="card" style={{ padding: '20px', display: 'block' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div>
                                            <h4 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{booking.name}</h4>
                                            <span style={{ fontSize: '10px', color: 'var(--secondary)', fontWeight: 900, letterSpacing: '1px', textTransform: 'uppercase' }}>{booking.date}</span>
                                        </div>
                                        <span style={{
                                            background: booking.status === 'confirmed' ? 'rgba(0,133,63,0.1)' : 'rgba(227,27,35,0.1)',
                                            color: booking.status === 'confirmed' ? 'var(--secondary)' : 'var(--primary)',
                                            padding: '4px 10px', borderRadius: '50px', fontSize: '9px', fontWeight: 900, textTransform: 'uppercase'
                                        }}>
                                            {booking.status === 'confirmed' ? 'Confirmé' : 'En attente'}
                                        </span>
                                    </div>

                                    {booking.status === 'pending' && (
                                        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                                            <button onClick={() => handleAction(booking.id, 'confirmed')} style={{ flex: 1, background: '#111', color: 'white', border: 'none', padding: '12px', borderRadius: '12px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                                <CheckCircle2 size={16} /> Accepter
                                            </button>
                                            <button onClick={() => handleAction(booking.id, 'cancelled')} style={{ width: '45px', border: '1px solid #EEE', background: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                                                <XCircle size={18} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'overview' && (
                        <div className="card" style={{ padding: '20px' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '20px' }}>Actions Rapides</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                <div style={{ border: '1px solid #EEE', borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
                                    <div style={{ color: 'var(--primary)', marginBottom: '10px', display: 'flex', justifyContent: 'center' }}><Clock size={24} /></div>
                                    <div style={{ fontSize: '12px', fontWeight: 800 }}>Fermeture Rapide</div>
                                </div>
                                <div style={{ border: '1px solid #EEE', borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
                                    <div style={{ color: 'var(--secondary)', marginBottom: '10px', display: 'flex', justifyContent: 'center' }}><TrendingUp size={24} /></div>
                                    <div style={{ fontSize: '12px', fontWeight: 800 }}>Booster Vue</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Custom Pro Bottom Nav */}
            <nav style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'white', borderTop: '1px solid #EEE', padding: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', zIndex: 1000 }}>
                <Link to="/dashboard" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--primary)', textDecoration: 'none', gap: '4px' }}>
                    <LayoutDashboard size={22} />
                    <span style={{ fontSize: '9px', fontWeight: 900, textTransform: 'uppercase' }}>Dash</span>
                </Link>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-muted)', gap: '4px' }}>
                    <CalendarCheck size={22} />
                    <span style={{ fontSize: '9px', fontWeight: 900, textTransform: 'uppercase' }}>Planning</span>
                </div>
                <Link to="/" style={{ background: '#111', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-30px', border: '4px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                    <Power size={20} />
                </Link>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-muted)', gap: '4px' }}>
                    <User size={22} />
                    <span style={{ fontSize: '9px', fontWeight: 900, textTransform: 'uppercase' }}>Profil</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-muted)', gap: '4px' }}>
                    <Settings size={22} />
                    <span style={{ fontSize: '9px', fontWeight: 900, textTransform: 'uppercase' }}>Configs</span>
                </div>
            </nav>
        </div>
    );
};

export default BusinessDashboard;
