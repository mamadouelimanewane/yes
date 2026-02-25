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
    const [viewMode, setViewMode] = useState('list');

    const filtered = businesses.filter(b => {
        const matchSearch = !search || b.name.toLowerCase().includes(search.toLowerCase()) ||
            b.description.toLowerCase().includes(search.toLowerCase()) ||
            b.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
        const matchCity = selectedCity === 'Toutes' || b.city === selectedCity;
        const matchCat = selectedCategory === 'Toutes' || b.category === selectedCategory;
        return matchSearch && matchCity && matchCat;
    });

    return (
        <div style={{ paddingBottom: '70px', background: 'white', minHeight: '100vh' }}>
            {/* Header / FILTERS */}
            <div style={{ position: 'sticky', top: '60px', zIndex: 100, background: 'white', borderBottom: '1px solid #EEE', padding: '12px' }}>
                <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', scrollbarWidth: 'none' }}>
                    <select
                        value={selectedCity}
                        onChange={e => setSelectedCity(e.target.value)}
                        style={{ padding: '8px 16px', borderRadius: '50px', background: '#F3F4F6', border: 'none', fontWeight: 700 }}
                    >
                        {cities.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    {['Toutes', ...categories.map(c => c.name)].map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            style={{
                                padding: '8px 20px',
                                whiteSpace: 'nowrap',
                                borderRadius: '50px',
                                background: selectedCategory === cat ? 'red' : '#F3F4F6',
                                color: selectedCategory === cat ? 'white' : 'black',
                                border: 'none',
                                fontWeight: 800,
                                fontSize: '13px'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div style={{ padding: '20px' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '20px' }}>
                    {filtered.length} résultats trouvés
                </h2>

                <div className="cards-grid">
                    {filtered.map(b => (
                        <Link to={`/business/${b.id}`} key={b.id} style={{ display: 'flex', gap: '15px', textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #EEE', paddingBottom: '15px', marginBottom: '15px' }}>
                            <img src={b.image} alt={b.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '12px' }} />
                            <div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>{b.name}</h3>
                                <div style={{ display: 'flex', gap: '2px', color: 'red', margin: '4px 0' }}>
                                    {[...Array(5)].map((_, i) => <Star key={i} size={11} fill={i < Math.floor(b.rating) ? 'red' : 'none'} />)}
                                </div>
                                <div style={{ fontSize: '12px', fontWeight: 600, color: '#666' }}>
                                    <MapPin size={10} /> {b.location}
                                </div>
                                <div style={{ fontSize: '12px', fontWeight: 900, color: 'green', marginTop: '6px' }}>{b.price} • {b.category}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* View toggle */}
            <button
                onClick={() => setViewMode(viewMode === 'list' ? 'map' : 'list')}
                style={{
                    position: 'fixed', bottom: '90px', left: '50%', transform: 'translateX(-50%)',
                    background: '#111', color: 'white', padding: '12px 30px', borderRadius: '50px',
                    fontWeight: 900, display: 'flex', alignItems: 'center', gap: '8px', zIndex: 1000
                }}
            >
                <Filter size={18} /> {viewMode === 'list' ? 'CARTE' : 'LISTE'}
            </button>
        </div>
    );
};

export default SearchResults;
