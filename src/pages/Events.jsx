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
            image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800",
            category: "Mode",
            attendees: 1200
        },
        {
            id: 2,
            title: "Festival de Jazz de Saint-Louis",
            date: "24-28 Mai 2026",
            location: "Île de Saint-Louis",
            image: "https://images.unsplash.com/photo-1521360096-7bb2a5ad625a?auto=format&fit=crop&q=80&w=800",
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
        <div className="container py-8 md-py-12 min-h-[80vh]">
            <h1 className="text-3xl md-text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Événements au Sénégal
            </h1>
            <p className="text-base md-text-xl text-gray-500 mb-8 md-mb-12 max-w-3xl leading-relaxed">
                Découvrez les festivals, concerts, expositions et événements sportifs à ne pas manquer partout au Sénégal.
            </p>

            <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-6 md-gap-8">
                {upcomingEvents.map((event, idx) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all"
                    >
                        <div className="relative h-48 md-h-56">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-gray-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
                                {event.category}
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase mb-3">
                                <Calendar size={14} />
                                {event.date}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">
                                {event.title}
                            </h3>
                            <div className="flex items-center gap-2 text-gray-400 text-sm mb-6 font-medium">
                                <MapPin size={16} className="text-gray-300" />
                                {event.location}
                            </div>
                            <div className="flex justify-between items-center pt-5 border-t border-gray-50">
                                <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase">
                                    <Users size={16} className="text-gray-300" />
                                    {event.attendees.toLocaleString('fr-FR')} prévus
                                </div>
                                <button className="p-2 bg-gray-50 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">
                                    <Share2 size={18} />
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
