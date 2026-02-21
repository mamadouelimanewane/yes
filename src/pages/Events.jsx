import React from 'react';
import { Users, Calendar, MapPin, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Events = () => {
    const upcomingEvents = [
        {
            id: 1,
            title: "Dakar Fashion Week 2026",
            date: "15-20 Mars 2026",
            location: "Radisson Blu, Almadies",
            image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
            category: "Mode",
            attendees: 1200
        },
        {
            id: 2,
            title: "Festival de Jazz de Saint-Louis",
            date: "24-28 Mai 2026",
            location: "Île de Saint-Louis",
            image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=800",
            category: "Musique",
            attendees: 5000
        },
        {
            id: 3,
            title: "Biennale de Dakar (Dak'Art)",
            date: "19 Mai - 21 Juin 2026",
            location: "Ancien Palais de Justice, Dakar",
            image: "https://images.unsplash.com/photo-1561214078-f3247647fc5e?auto=format&fit=crop&q=80&w=800",
            category: "Art & Culture",
            attendees: 25000
        },
        {
            id: 4,
            title: "Grand Combat de Lutte avec Frappe",
            date: "4 Avril 2026",
            location: "Arène Nationale, Pikine",
            image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800",
            category: "Sport",
            attendees: 18000
        }
    ];

    return (
        <div style={{ padding: '2rem 5%', minHeight: '80vh' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>
                Événements au Sénégal
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#6b7280', marginBottom: '3rem', maxWidth: '800px' }}>
                Découvrez les festivals, concerts, expositions et événements sportifs à ne pas manquer partout au Sénégal.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {upcomingEvents.map((event, idx) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        style={{
                            background: 'white', borderRadius: '1rem', overflow: 'hidden',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #e5e7eb'
                        }}
                    >
                        <div style={{ position: 'relative', height: '200px' }}>
                            <img
                                src={event.image}
                                alt={event.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{
                                position: 'absolute', top: '1rem', right: '1rem',
                                background: 'white', color: '#111827', padding: '0.25rem 0.75rem',
                                borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700
                            }}>
                                {event.category}
                            </div>
                        </div>
                        <div style={{ padding: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                                <Calendar size={14} />
                                {event.date}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem', color: '#111827' }}>
                                {event.title}
                            </h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b7280', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                <MapPin size={16} />
                                {event.location}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #f3f4f6' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b7280', fontSize: '0.85rem' }}>
                                    <Users size={16} />
                                    {event.attendees.toLocaleString('fr-FR')} participants
                                </div>
                                <button style={{ background: '#f3f4f6', padding: '0.5rem', borderRadius: '0.5rem', color: '#374151' }}>
                                    <Share2 size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Events;
