import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Star, Filter, SlidersHorizontal, Navigation, Phone, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { businesses, categories, cities } from '../data';
import MapView from '../components/MapView';

const SearchResults = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const queryParam = params.get('q') || '';
    const cityParam = params.get('city') || 'Toutes';

    const [search] = useState(queryParam);
    const [selectedCity, setSelectedCity] = useState(cityParam);
    const [selectedCategory, setSelectedCategory] = useState('Toutes');
    const [selectedBusiness, setSelectedBusiness] = useState(null);
    const [isFullMap, setIsFullMap] = useState(false);

    const filtered = businesses.filter(b => {
        const matchSearch = !search || b.name.toLowerCase().includes(search.toLowerCase()) ||
            b.description.toLowerCase().includes(search.toLowerCase()) ||
            b.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
        const matchCity = selectedCity === 'Toutes' || b.city === selectedCity;
        const matchCat = selectedCategory === 'Toutes' || b.category === selectedCategory;
        return matchSearch && matchCity && matchCat;
    });

    const allCategories = ['Toutes', ...categories.map(c => c.name)];

    const getDirectionsUrl = (business) => {
        return `https://www.google.com/maps/dir/?api=1&destination=${business.lat},${business.lng}&travelmode=driving`;
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 72px)' }}>
            {/* Filtres Header */}
            <div style={{
                background: 'white', borderBottom: '1px solid #e5e7eb',
                padding: '0.75rem 1.5rem', position: 'sticky', top: 0, zIndex: 40,
                display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem'
            }}>
                {/* Filtre Villes */}
                <select
                    value={selectedCity}
                    onChange={e => setSelectedCity(e.target.value)}
                    style={{
                        padding: '0.5rem 1rem', borderRadius: '9999px', border: '1px solid #e5e7eb',
                        fontFamily: 'inherit', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer',
                        background: selectedCity !== 'Toutes' ? 'var(--primary)' : 'white',
                        color: selectedCity !== 'Toutes' ? 'white' : '#374151',
                        outline: 'none'
                    }}
                >
                    {cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                {/* Filtre Catégories */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {allCategories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            style={{
                                padding: '0.5rem 1rem', borderRadius: '9999px', border: '1px solid #e5e7eb',
                                fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s',
                                background: selectedCategory === cat ? 'var(--primary)' : 'white',
                                color: selectedCategory === cat ? 'white' : '#374151',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 600 }}>
                        {filtered.length} résultat{filtered.length > 1 ? 's' : ''}
                    </span>
                    <button
                        onClick={() => setIsFullMap(!isFullMap)}
                        style={{
                            padding: '0.5rem 1rem', borderRadius: '0.5rem',
                            border: '1px solid #e5e7eb', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer',
                            background: isFullMap ? '#111827' : 'white',
                            color: isFullMap ? 'white' : '#374151',
                            display: 'flex', alignItems: 'center', gap: '0.4rem'
                        }}
                    >
                        <MapPin size={14} /> {isFullMap ? 'Masquer carte' : 'Carte Plein Écran'}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                {/* Liste des résultats */}
                <div style={{
                    width: isFullMap ? '0%' : '50%', overflowY: 'auto',
                    padding: isFullMap ? '0' : '1.5rem', transition: 'all 0.3s ease', opacity: isFullMap ? 0 : 1
                }}>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#111827' }}>
                        {selectedCity === 'Toutes' ? 'Tous les établissements au Sénégal' : `Meilleurs établissements à ${selectedCity}`}
                    </h1>

                    {filtered.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
                            <MapPin size={48} style={{ margin: '0 auto 1rem', color: '#d1d5db' }} />
                            <p style={{ fontWeight: 600 }}>Aucun résultat trouvé</p>
                            <p style={{ fontSize: '0.9rem' }}>Essayez d'autres filtres</p>
                        </div>
                    )}

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {filtered.map((business, idx) => (
                            <motion.div
                                key={business.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.04 }}
                                onClick={() => setSelectedBusiness(business)}
                                style={{
                                    display: 'flex', gap: '1rem', background: 'white',
                                    borderRadius: '1rem', overflow: 'hidden',
                                    border: selectedBusiness?.id === business.id ? '2px solid var(--primary)' : '1px solid #f3f4f6',
                                    boxShadow: selectedBusiness?.id === business.id
                                        ? '0 0 0 3px rgba(227,27,35,0.1), 0 4px 12px rgba(0,0,0,0.08)'
                                        : '0 2px 8px rgba(0,0,0,0.04)',
                                    cursor: 'pointer', transition: 'all 0.2s'
                                }}
                            >
                                {/* Image */}
                                <div style={{ width: '130px', flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
                                    <img
                                        src={business.image}
                                        alt={business.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '130px', transition: 'transform 0.3s' }}
                                        onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                                        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                                    />
                                    {business.featured && (
                                        <div style={{
                                            position: 'absolute', top: '0.5rem', left: '0.5rem',
                                            background: 'var(--accent)', color: '#111827',
                                            padding: '0.15rem 0.5rem', borderRadius: '4px',
                                            fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em'
                                        }}>⭐ À la une</div>
                                    )}
                                </div>

                                {/* Info */}
                                <div style={{ flex: 1, padding: '1rem 1rem 1rem 0' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.3rem' }}>
                                        <div>
                                            <Link to={`/business/${business.id}`} style={{ fontSize: '1.1rem', fontWeight: 800, color: '#111827', textDecoration: 'none' }}
                                                onClick={e => e.stopPropagation()}>
                                                {business.name}
                                            </Link>
                                            <span style={{ marginLeft: '0.5rem', fontSize: '0.8rem', color: '#9ca3af', fontWeight: 600 }}>{business.price}</span>
                                        </div>
                                    </div>

                                    {/* Stars + reviews */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14}
                                                fill={i < Math.floor(business.rating) ? 'var(--primary)' : 'none'}
                                                color={i < Math.floor(business.rating) ? 'var(--primary)' : '#e5e7eb'}
                                            />
                                        ))}
                                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#6b7280' }}>{business.rating}</span>
                                        <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>({business.reviews} avis)</span>
                                    </div>

                                    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                        <span style={{ fontSize: '0.8rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                            <MapPin size={12} style={{ color: 'var(--primary)' }} /> {business.location}
                                        </span>
                                        <span style={{ fontSize: '0.8rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                            <Clock size={12} style={{ color: 'var(--secondary)' }} /> {business.hours.split(',')[0]}
                                        </span>
                                    </div>

                                    <p style={{
                                        fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.75rem', lineHeight: 1.5,
                                        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                                    }}>
                                        {business.description}
                                    </p>

                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                        {business.tags.slice(0, 3).map(tag => (
                                            <span key={tag} style={{
                                                fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
                                                background: '#f3f4f6', color: '#6b7280', padding: '0.2rem 0.5rem', borderRadius: '4px'
                                            }}>{tag}</span>
                                        ))}
                                        <a
                                            href={getDirectionsUrl(business)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={e => e.stopPropagation()}
                                            style={{
                                                marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem',
                                                background: 'var(--secondary)', color: 'white',
                                                padding: '0.35rem 0.75rem', borderRadius: '0.5rem',
                                                fontSize: '0.75rem', fontWeight: 700, textDecoration: 'none',
                                                boxShadow: '0 2px 8px rgba(0,133,63,0.3)'
                                            }}
                                        >
                                            <Navigation size={12} /> Itinéraire
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Carte Interactive */}
                <div style={{ flex: 1, position: 'sticky', top: 0, height: '100%', minHeight: '500px', zIndex: 10 }}>
                    <MapView
                        businesses={filtered}
                        selectedBusiness={selectedBusiness}
                        onSelectBusiness={setSelectedBusiness}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
