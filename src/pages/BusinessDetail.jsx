import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    Star, Camera, Share, Bookmark, ExternalLink,
    Phone, MapPin, Clock, CheckCircle2, ChevronRight,
    MessageSquare, ArrowLeft
} from 'lucide-react';
import { businesses } from '../data';
import ReservationModal from '../components/ReservationModal';
import MessageInterface from '../components/MessageInterface';

const BusinessDetail = () => {
    const { id } = useParams();
    const [isReservationOpen, setIsReservationOpen] = React.useState(false);
    const [isChatOpen, setIsChatOpen] = React.useState(false);
    const business = businesses.find(b => b.id === parseInt(id)) || businesses[0];

    const showReservation = business.category === 'Hôtels' || business.category === 'Restaurants';

    return (
        <div style={{ backgroundColor: 'white', minHeight: '100vh', paddingBottom: '90px' }}>
            {/* Header mobile avec bouton retour */}
            <div className="md-hidden" style={{ position: 'absolute', top: '15px', left: '15px', zIndex: 50 }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.9)', color: '#111', textDecoration: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                    <ArrowLeft size={20} />
                </Link>
            </div>

            {/* Photo Header */}
            <div style={{ position: 'relative', width: '100%', backgroundColor: 'black', height: '35vh', minHeight: '250px', maxHeight: '450px', overflow: 'hidden' }}>
                <img src={business.image} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} alt={business.name} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)' }}></div>

                <div style={{ position: 'absolute', bottom: '20px', left: 0, width: '100%', color: 'white' }}>
                    <div className="container" style={{ padding: '0 20px' }}>
                        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '10px', textShadow: '0 2px 10px rgba(0,0,0,0.5)', lineHeight: 1.1 }}>{business.name}</h1>

                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill={i < Math.floor(business.rating) ? "var(--primary)" : "none"} style={{ color: i < Math.floor(business.rating) ? "var(--primary)" : "rgba(255,255,255,0.5)" }} />
                                ))}
                                <span style={{ fontWeight: 800, marginLeft: '8px', fontSize: '14px' }}>{business.reviews} avis</span>
                            </div>

                            <span style={{ backgroundColor: 'rgba(227, 27, 35, 0.2)', backdropFilter: 'blur(10px)', padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid rgba(255,255,255,0.2)' }}>
                                <CheckCircle2 size={14} /> Confirmé
                            </span>

                            <span style={{ fontWeight: 800, fontSize: '14px', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{business.price} • {business.category}</span>
                        </div>

                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 800, backgroundColor: 'rgba(242, 169, 0, 0.9)', backdropFilter: 'blur(4px)', padding: '5px 12px', borderRadius: '6px', color: '#111' }}>
                            <Clock size={14} /> Ouvert 10:00 - 22:00
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ padding: '30px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }} className="md-flex-row">

                    {/* Main Content */}
                    <div style={{ flex: '1 1 65%' }}>

                        {/* Action Bar (Horizontal Scroll on Mobile) */}
                        <div style={{ display: 'flex', overflowX: 'auto', gap: '15px', paddingBottom: '10px', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch', marginBottom: '30px' }}>
                            {showReservation && (
                                <button
                                    onClick={() => setIsReservationOpen(true)}
                                    className="btn-primary"
                                    style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '12px', fontSize: '15px' }}
                                >
                                    <Clock size={18} /> Réserver
                                </button>
                            )}
                            <button
                                onClick={() => setIsChatOpen(true)}
                                style={{ flexShrink: 0, backgroundColor: 'white', border: '1px solid var(--border-color)', padding: '12px 20px', borderRadius: '12px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px', color: '#333' }}
                            >
                                <MessageSquare size={18} /> Message
                            </button>
                            <button style={{ flexShrink: 0, backgroundColor: 'white', border: '1px solid var(--border-color)', padding: '12px 20px', borderRadius: '12px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px', color: '#333' }}>
                                <Camera size={18} /> Photos
                            </button>
                            <button style={{ flexShrink: 0, backgroundColor: 'white', border: '1px solid var(--border-color)', padding: '12px 20px', borderRadius: '12px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px', color: '#333' }}>
                                <Share size={18} /> Partager
                            </button>
                            <button style={{ flexShrink: 0, backgroundColor: 'white', border: '1px solid var(--border-color)', padding: '12px 20px', borderRadius: '12px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px', color: '#333' }}>
                                <Bookmark size={18} /> Sauver
                            </button>
                        </div>

                        <hr style={{ border: 'none', borderTop: '1px solid #EEE', margin: '30px 0' }} />

                        {/* About Section */}
                        <div>
                            <h2 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '15px' }}>À propos</h2>
                            <p style={{ color: '#555', lineHeight: 1.6, fontSize: '16px', marginBottom: '25px' }}>
                                {business.description} Venez découvrir une expérience unique au cœur du Sénégal, où la Teranga rencontre l'excellence et le service attentionné. Notre équipe vous accueille dans un cadre chaleureux et authentique.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '15px' }}>
                                {business.tags.map(tag => (
                                    <div key={tag} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#333', fontWeight: 700, fontSize: '14px', backgroundColor: '#F9FAFB', padding: '10px', borderRadius: '8px', border: '1px solid #EEE' }}>
                                        <CheckCircle2 size={16} color="var(--secondary)" /> {tag}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <hr style={{ border: 'none', borderTop: '1px solid #EEE', margin: '40px 0' }} />

                        {/* Reviews */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '25px' }}>
                                <h2 style={{ fontSize: '24px', fontWeight: 900 }}>Avis récents</h2>
                                <button style={{ color: 'var(--primary)', fontWeight: 800, display: 'flex', alignItems: 'center', background: 'none', border: 'none', fontSize: '14px' }}>
                                    Tout voir <ChevronRight size={16} />
                                </button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                {[1, 2].map(i => (
                                    <div key={i} style={{ display: 'flex', gap: '15px', borderBottom: i === 1 ? '1px solid #EEE' : 'none', paddingBottom: i === 1 ? '30px' : '0' }}>
                                        <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid rgba(227, 27, 35, 0.1)' }}>
                                            <img src={i === 1 ? "https://images.unsplash.com/photo-1507152832244-10d45aec7dea?auto=format&fit=crop&q=80&w=150&h=150" : "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=150&h=150"} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
                                                <h4 style={{ fontWeight: 800, fontSize: '16px', margin: 0 }}>{i === 1 ? 'Amadou Fall' : 'Sophie N.'}</h4>
                                                <span style={{ fontSize: '12px', color: '#999', fontWeight: 600 }}>Il y a 2 jours</span>
                                            </div>
                                            <div style={{ display: 'flex', gap: '2px', marginBottom: '10px' }}>
                                                {[...Array(5)].map((_, star) => (
                                                    <Star key={star} size={12} fill={star < (i === 1 ? 5 : 4) ? "var(--secondary)" : "none"} style={{ color: star < (i === 1 ? 5 : 4) ? "var(--secondary)" : "#DDD" }} />
                                                ))}
                                            </div>
                                            <p style={{ color: '#444', lineHeight: 1.5, fontSize: '14px', margin: '0 0 15px 0' }}>
                                                {i === 1 ? "Une expérience incroyable ! Le service était impeccable et le cadre idyllique. Je recommande vivement pour toute visite, c'est un incontournable." : "Très bon moment passé ici. L'ambiance est top et les prix sont résonnables par rapport à la qualité."}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Informations Pratiques */}
                    <div style={{ flex: '1 1 35%' }}>
                        <div style={{ position: 'sticky', top: '80px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

                            <div style={{ backgroundColor: '#FFF', border: '1px solid #EEE', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: 900, marginBottom: '20px' }}>Informations</h3>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>
                                        <MapPin size={18} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: '14px', fontWeight: 800 }}>Adresse</div>
                                        <div style={{ fontSize: '13px', color: '#666' }}>{business.address || business.location}</div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>
                                        <Phone size={18} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: '14px', fontWeight: 800 }}>Téléphone</div>
                                        <div style={{ fontSize: '13px', color: '#666' }}>{business.phone || "+221 33 000 00 00"}</div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>
                                        <ExternalLink size={18} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: '14px', fontWeight: 800 }}>Site Web</div>
                                        <div style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: 700 }}>{business.website || "Visiter le site"}</div>
                                    </div>
                                </div>

                                {showReservation ? (
                                    <button
                                        onClick={() => setIsReservationOpen(true)}
                                        className="btn-primary"
                                        style={{ width: '100%', padding: '16px', borderRadius: '12px', fontSize: '16px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}
                                    >
                                        Réserver une table
                                    </button>
                                ) : (
                                    <button style={{ width: '100%', padding: '16px', backgroundColor: '#111', color: 'white', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', cursor: 'pointer' }}>
                                        Contacter
                                    </button>
                                )}
                                <button style={{ width: '100%', padding: '14px', backgroundColor: 'transparent', color: '#333', border: '1px solid #CCC', borderRadius: '12px', fontSize: '14px', fontWeight: 800, cursor: 'pointer' }}>
                                    Signaler une erreur
                                </button>
                            </div>

                            <div style={{ backgroundColor: 'rgba(227, 27, 35, 0.03)', border: '1px solid rgba(227, 27, 35, 0.1)', borderRadius: '16px', padding: '24px' }}>
                                <h4 style={{ fontWeight: 900, color: 'var(--primary)', marginBottom: '15px', fontSize: '16px' }}>Services de l'établissement</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 700, color: '#444' }}><CheckCircle2 size={16} color="var(--primary)" /> Parking gratuit</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 700, color: '#444' }}><CheckCircle2 size={16} color="var(--primary)" /> Wifi Haut Débit</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 700, color: '#444' }}><CheckCircle2 size={16} color="var(--primary)" /> Accessible aux PMR</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 700, color: '#444' }}><CheckCircle2 size={16} color="var(--primary)" /> Paiement par carte</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} business={business} />
            <MessageInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} business={business} />

            {/* Mobile Fixed Bottom Action Bar */}
            <div className="md-hidden" style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', borderTop: '1px solid #EEE', padding: '10px 15px', paddingBottom: 'calc(10px + env(safe-area-inset-bottom))', display: 'flex', gap: '10px', zIndex: 100, boxShadow: '0 -4px 20px rgba(0,0,0,0.05)' }}>
                <button
                    onClick={() => setIsChatOpen(true)}
                    style={{ flexShrink: 0, width: '60px', height: '54px', backgroundColor: '#F3F4F6', color: '#333', border: 'none', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <MessageSquare size={22} />
                </button>
                {showReservation ? (
                    <button
                        onClick={() => setIsReservationOpen(true)}
                        className="btn-primary"
                        style={{ flex: 1, height: '54px', fontSize: '15px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', borderRadius: '12px' }}
                    >
                        Réserver
                    </button>
                ) : (
                    <button style={{ flex: 1, height: '54px', backgroundColor: '#111', color: 'white', border: 'none', fontSize: '15px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', borderRadius: '12px' }}>
                        Contacter
                    </button>
                )}
            </div>
        </div>
    );
};

export default BusinessDetail;
