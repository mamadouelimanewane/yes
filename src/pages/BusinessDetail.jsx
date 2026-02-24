import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    Star,
    Camera,
    Share,
    Bookmark,
    ExternalLink,
    Phone,
    MapPin,
    Clock,
    CheckCircle2,
    ChevronRight,
    MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';
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
        <div className="bg-white">
            {/* Photo Header */}
            <div className="relative w-full overflow-hidden bg-black h-[250px] md-h-[400px]">
                <img src={business.image} className="w-full h-full object-cover opacity-80" alt={business.name} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)' }}></div>

                <div className="absolute bottom-4 md-bottom-6 text-white z-10 w-full px-4 md-px-6 left-0">
                    <div className="container">
                        <h1 className="text-3xl md-text-6xl font-extrabold mb-2 md-mb-4 drop-shadow-lg">{business.name}</h1>
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={24} fill={i < Math.floor(business.rating) ? "var(--primary)" : "none"} className={i < Math.floor(business.rating) ? "text-primary border-primary" : "text-white"} />
                                ))}
                                <span className="font-bold ml-2">{business.reviews} avis</span>
                            </div>
                            <span className="bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold border border-white/30 flex items-center gap-2">
                                <CheckCircle2 size={16} /> Confirmé
                            </span>
                            <span className="font-bold">{business.price} • {business.category}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold bg-secondary/80 backdrop-blur-sm w-fit px-3 py-1 rounded text-white italic">
                            <Clock size={16} /> Ouvert 10:00 - 22:00
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-6 right-12 hidden md-flex gap-3">
                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/50 text-white px-5 py-3 rounded-lg font-bold flex items-center gap-2 transition-all">
                        <Camera size={20} /> Voir toutes les photos
                    </button>
                </div>
            </div>

            <div className="container py-8 md-py-12">
                <div className="flex flex-col lg-flex-row gap-8 lg-gap-12">
                    {/* Main Content */}
                    <div className="flex-1 overflow-hidden">
                        {/* Action Bar */}
                        <div className="flex overflow-x-auto gap-3 mb-8 pb-2 scrollbar-hide no-scrollbar">
                            {showReservation && (
                                <button
                                    onClick={() => setIsReservationOpen(true)}
                                    className="shrink-0 bg-primary hover:bg-primary-hover text-white px-6 md:px-10 py-3 md:py-4 rounded-xl font-bold flex items-center gap-2 md:gap-3 shadow-lg shadow-primary/20 transition-all active:scale-95"
                                >
                                    <Clock size={20} className="md:w-6 md:h-6" /> Réserver maintenant
                                </button>
                            )}
                            <button
                                onClick={() => setIsChatOpen(true)}
                                className="shrink-0 bg-white border border-gray-200 hover:bg-gray-50 px-4 md:px-6 py-3 md:py-4 rounded-xl font-bold flex items-center gap-2 transition-all"
                            >
                                <MessageSquare size={18} /> Message
                            </button>
                            <button className="shrink-0 bg-white border border-gray-200 hover:bg-gray-50 px-4 md:px-6 py-3 md:py-4 rounded-xl font-bold flex items-center gap-2 transition-all">
                                <Star size={18} /> Avis
                            </button>

                            <button className="shrink-0 bg-white border border-gray-200 hover:bg-gray-50 px-4 md:px-6 py-3 md:py-4 rounded-xl font-bold flex items-center gap-2 transition-all">
                                <Camera size={18} /> Photo
                            </button>
                            <button className="shrink-0 bg-white border border-gray-200 hover:bg-gray-50 px-4 md-px-6 py-3 md-py-4 rounded-xl font-bold flex items-center gap-2 transition-all">
                                <Share size={18} /> Partager
                            </button>
                            <button className="shrink-0 bg-white border border-gray-200 hover:bg-gray-50 px-4 md-px-6 py-3 md-py-4 rounded-xl font-bold flex items-center gap-2 transition-all">
                                <Bookmark size={18} /> Enregistrer
                            </button>
                        </div>

                        <hr className="mb-12 border-gray-100" />

                        {/* About Section */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-extrabold mb-6">À propos de l'établissement</h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                {business.description} Venez découvrir une expérience unique au cœur de Dakar, où la Teranga sénégalaise rencontre l'excellence culinaire et le service attentionné. Notre équipe vous accueille dans un cadre chaleureux et authentique.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {business.tags.map(tag => (
                                    <div key={tag} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <CheckCircle2 size={20} className="text-secondary" /> {tag}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <hr className="mb-12 border-gray-100" />

                        {/* Review List Placeholder */}
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-extrabold">Avis et commentaires</h2>
                                <button className="text-primary font-bold flex items-center gap-1 hover:underline">
                                    Tous les avis <ChevronRight size={20} />
                                </button>
                            </div>

                            <div className="space-y-12">
                                {[1, 2].map(i => (
                                    <div key={i} className="flex gap-6 pb-8 border-b border-gray-50 last-border-0">
                                        <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-primary/10">
                                            <img src={i === 1 ? "https://images.unsplash.com/photo-1507152832244-10d45aec7dea?auto=format&fit=crop&q=80&w=150&h=150" : "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=150&h=150"} alt="Utilisateur" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Moussa Ndiaye</h4>
                                            <div className="flex items-center gap-1 mb-3">
                                                <div className="flex">
                                                    {[...Array(5)].map((_, star) => (
                                                        <Star key={star} size={14} fill={star < 4 ? "var(--primary)" : "none"} className={star < 4 ? "text-primary" : "text-gray-200"} />
                                                    ))}
                                                </div>
                                                <span className="text-xs text-gray-400 font-medium ml-2">15/02/2026</span>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed mb-4">
                                                Une expérience incroyable ! Le service était impeccable et la nourriture absolument délicieuse. Je recommande vivement le Thieboudienne, c'est le meilleur que j'ai mangé à Dakar.
                                            </p>
                                            <div className="flex gap-4">
                                                <button className="flex items-center gap-1 text-xs font-bold text-gray-400 hover:text-primary transition-colors">
                                                    <MessageSquare size={14} /> Répondre
                                                </button>
                                                <button className="flex items-center gap-1 text-xs font-bold text-gray-400 hover:text-primary transition-colors">
                                                    <Share size={14} /> Partager
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg-w-96">
                        <div className="lg-sticky lg-top-24 space-y-6 md-space-y-8">
                            <div className="p-5 md-p-6 border border-gray-200 rounded-2xl shadow-sm bg-white">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="font-bold text-gray-800">Site Web</span>
                                    <ExternalLink size={20} className="text-gray-400" />
                                </div>
                                <div className="flex items-center justify-between mb-6">
                                    <span className="font-bold text-gray-800">Numéro de téléphone</span>
                                    <Phone size={20} className="text-gray-400" />
                                </div>
                                <hr className="mb-6 border-gray-100" />
                                <div className="flex items-start gap-3 mb-6">
                                    <MapPin className="text-primary shrink-0" size={20} />
                                    <div>
                                        <span className="font-bold block mb-1">Y obtenir l'itinéraire</span>
                                        <span className="text-sm text-gray-500">{business.location}, Dakar, Sénégal</span>
                                    </div>
                                </div>
                                <div className="w-full h-48 bg-gray-100 rounded-xl overflow-hidden relative border border-gray-200 mb-6">
                                    <div className="absolute inset-0 grayscale opacity-30" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '15px 15px' }}></div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary drop-shadow-lg">
                                        <MapPin size={32} />
                                    </div>
                                </div>
                                {showReservation ? (
                                    <button
                                        onClick={() => setIsReservationOpen(true)}
                                        className="w-full py-4 bg-primary text-white rounded-xl font-black uppercase tracking-widest hover:bg-primary-hover transition-all shadow-xl shadow-primary/20 mb-3"
                                    >
                                        Réserver (Acompte 15%)
                                    </button>
                                ) : (
                                    <button className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all shadow-xl mb-3">
                                        Contacter l'établissement
                                    </button>
                                )}
                                <button className="w-full py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all text-sm">
                                    Afficher le menu / Services
                                </button>
                            </div>

                            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                <h4 className="font-bold text-primary mb-4">À propos de l'établissement</h4>
                                <ul className="space-y-4 text-sm font-medium text-gray-700">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-secondary" /> Accepte les cartes
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-secondary" /> Wifi gratuit
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-secondary" /> Parking disponible
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ReservationModal
                isOpen={isReservationOpen}
                onClose={() => setIsReservationOpen(false)}
                business={business}
            />
            <MessageInterface
                isOpen={isChatOpen}
                onClose={() => setIsChatOpen(false)}
                business={business}
            />
        </div>
    );
};

export default BusinessDetail;
