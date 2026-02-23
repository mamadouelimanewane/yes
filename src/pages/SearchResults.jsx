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
    const viewParam = params.get('view');

    const [search] = useState(queryParam);
    const [selectedCity, setSelectedCity] = useState(cityParam);
    const [selectedCategory, setSelectedCategory] = useState('Toutes');
    const [selectedBusiness, setSelectedBusiness] = useState(null);
    const [isFullMap, setIsFullMap] = useState(viewParam === 'map');
    const [viewMode, setViewMode] = useState(viewParam === 'map' ? 'map' : 'list');

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
            <div className="bg-white border-b border-gray-200 p-3 md-p-4 sticky top-0 z-40 flex flex-nowrap items-center gap-2 overflow-x-auto">
                {/* Filtre Villes */}
                <select
                    value={selectedCity}
                    onChange={e => setSelectedCity(e.target.value)}
                    className="shrink-0 px-4 py-2 rounded-full border border-gray-200 font-bold text-sm outline-none cursor-pointer transition-colors"
                    style={{
                        background: selectedCity !== 'Toutes' ? 'var(--primary)' : 'white',
                        color: selectedCity !== 'Toutes' ? 'white' : '#374151',
                    }}
                >
                    {cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                {/* Filtre Catégories - Scrollable on mobile */}
                <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                    {allCategories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className="shrink-0 px-4 py-2 rounded-full border border-gray-200 font-bold text-sm transition-all whitespace-nowrap"
                            style={{
                                background: selectedCategory === cat ? 'var(--primary)' : 'white',
                                color: selectedCategory === cat ? 'white' : '#374151',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="ml-auto flex gap-2 items-center mobile-hide">
                    <span className="text-sm text-gray-400 font-bold">
                        {filtered.length} résultats
                    </span>
                    <button
                        onClick={() => setIsFullMap(!isFullMap)}
                        className="px-4 py-2 rounded-lg border border-gray-200 font-bold text-sm bg-white hover:bg-gray-50 flex items-center gap-2"
                        style={{
                            background: isFullMap ? '#111827' : 'white',
                            color: isFullMap ? 'white' : '#374151',
                        }}
                    >
                        <MapPin size={14} /> {isFullMap ? 'Masquer' : 'Carte'}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-1 overflow-hidden relative">
                {/* Liste des résultats */}
                <div
                    className={`overflow-y-auto transition-all duration-300 p-4 md-p-6 ${viewMode === 'map' ? 'mobile-hide' : 'w-full'} ${isFullMap ? 'md-hidden' : 'md-w-50'}`}
                >
                    <h1 className="text-xl md-text-2xl font-extrabold mb-6 text-gray-900 leading-tight">
                        {selectedCity === 'Toutes' ? 'Établissements au Sénégal' : `Établissements à ${selectedCity}`}
                    </h1>

                    {filtered.length === 0 && (
                        <div className="text-center py-20 text-gray-400">
                            <MapPin size={48} className="mx-auto mb-4 opacity-20" />
                            <p className="font-bold">Aucun résultat trouvé</p>
                            <p className="text-sm">Essayez d'autres filtres</p>
                        </div>
                    )}

                    <div className="flex flex-col gap-4">
                        {filtered.map((business, idx) => (
                            <motion.div
                                key={business.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                onClick={() => {
                                    setSelectedBusiness(business);
                                    if (window.innerWidth < 768) setViewMode('map');
                                }}
                                className={`flex gap-3 md-gap-4 bg-white rounded-2xl overflow-hidden border transition-all cursor-pointer ${selectedBusiness?.id === business.id ? 'border-primary ring-4 ring-primary/10' : 'border-gray-100 shadow-sm hover:shadow-md'}`}
                            >
                                {/* Image */}
                                <div className="w-24 md-w-40 shrink-0 relative overflow-hidden h-24 md-h-auto">
                                    <img
                                        src={business.image}
                                        alt={business.name}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                    {business.featured && (
                                        <div className="absolute top-2 left-2 bg-accent text-[0.6rem] font-black uppercase px-1.5 py-0.5 rounded shadow-sm text-gray-900">
                                            Elite
                                        </div>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="flex-1 py-3 pr-3 md-py-4 md-pr-4">
                                    <div className="flex justify-between items-start mb-1">
                                        <Link to={`/business/${business.id}`} className="text-base md-text-lg font-extrabold text-gray-900 hover:text-primary transition-colors" onClick={e => e.stopPropagation()}>
                                            {business.name}
                                        </Link>
                                    </div>

                                    <div className="flex items-center gap-1.5 mb-2">
                                        <div className="flex text-primary">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={12} fill={i < Math.floor(business.rating) ? 'currentColor' : 'none'} className={i < Math.floor(business.rating) ? '' : 'text-gray-200'} />
                                            ))}
                                        </div>
                                        <span className="text-xs font-bold text-gray-500">{business.rating}</span>
                                    </div>

                                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-2 font-medium">
                                        <div className="flex items-center gap-1">
                                            <MapPin size={12} className="text-primary" /> {business.location}
                                        </div>
                                    </div>

                                    <p className="hidden md-block text-gray-500 text-sm line-clamp-2 mb-3 leading-relaxed">
                                        {business.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex gap-2">
                                            {business.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="text-[0.65rem] font-bold uppercase tracking-tight bg-gray-50 text-gray-400 px-2 py-0.5 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <a href={getDirectionsUrl(business)} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="md-hidden w-8 h-8 flex items-center justify-center bg-secondary text-white rounded-full shadow-lg">
                                            <Navigation size={14} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Carte Interactive */}
                <div className={`flex-1 sticky top-0 h-full transition-all duration-300 z-10 ${viewMode === 'list' ? 'mobile-hide' : 'w-full'}`}>
                    <MapView
                        businesses={filtered}
                        selectedBusiness={selectedBusiness}
                        onSelectBusiness={setSelectedBusiness}
                    />
                </div>

                {/* Mobile View Toggle Button */}
                <button
                    onClick={() => setViewMode(viewMode === 'list' ? 'map' : 'list')}
                    className="md-hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 active:scale-95 transition-all"
                >
                    {viewMode === 'list' ? <><MapPin size={18} /> Carte</> : <><Filter size={18} /> Liste</>}
                </button>
            </div>
        </div>
    );
};

export default SearchResults;
