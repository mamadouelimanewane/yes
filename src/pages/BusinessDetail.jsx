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

const BusinessDetail = () => {
    const { id } = useParams();
    const business = businesses.find(b => b.id === parseInt(id)) || businesses[0];

    return (
        <div className="bg-white">
            {/* Photo Header */}
            <div style={{ height: '400px' }} className="relative w-full overflow-hidden bg-black">
                <img src={business.image} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} alt={business.name} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)' }}></div>

                <div className="absolute bottom-6 text-white z-10 w-full px-6" style={{ left: 0, padding: '0 5%' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h1 className="text-4xl md-text-6xl font-extrabold mb-4 drop-shadow-lg">{business.name}</h1>
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

            <div className="container py-12">
                <div className="flex flex-col lg-flex-row gap-12">
                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Action Bar */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            <button className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-lg font-bold flex items-center gap-3 shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                                <Star size={24} /> Donner un avis
                            </button>
                            <button className="bg-white border border-gray-300 hover:bg-gray-50 px-6 py-4 rounded-lg font-bold flex items-center gap-2 transition-all">
                                <Camera size={20} /> Ajouter une photo
                            </button>
                            <button className="bg-white border border-gray-300 hover:bg-gray-50 px-6 py-4 rounded-lg font-bold flex items-center gap-2 transition-all">
                                <Share size={20} /> Partager
                            </button>
                            <button className="bg-white border border-gray-300 hover:bg-gray-50 px-6 py-4 rounded-lg font-bold flex items-center gap-2 transition-all">
                                <Bookmark size={20} /> Enregistrer
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
                        <div className="sticky top-24 space-y-8">
                            <div className="p-6 border border-gray-200 rounded-2xl shadow-sm bg-white">
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
                                <button className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all shadow-xl">
                                    Afficher le menu / Réserver
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
        </div>
    );
};

export default BusinessDetail;
