import React from 'react';
import { MessageSquare, Users, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Talk = () => {
    return (
        <div style={{ padding: '2rem 5%', minHeight: '80vh', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>
                    Communauté Yes-Africa
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#6b7280' }}>
                    Partagez vos bonnes adresses, débattez de l'actualité sénégalaise et connectez-vous avec d'autres passionnés de la Teranga.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '1rem', textAlign: 'center' }}>
                    <MessageSquare size={48} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>Forums de discussion</h3>
                    <p style={{ color: '#6b7280' }}>Bientôt disponible. Rejoignez les débats sur le sport, l'art, et la politique.</p>
                </div>

                <div style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '1rem', textAlign: 'center' }}>
                    <Users size={48} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>Rencontres</h3>
                    <p style={{ color: '#6b7280' }}>Participez à nos événements de networking dans tout le Sénégal.</p>
                </div>

                <div style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '1rem', textAlign: 'center' }}>
                    <TrendingUp size={48} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>Sujets chauds</h3>
                    <p style={{ color: '#6b7280' }}>Découvrez de quoi parlent les Sénégalais en ce moment.</p>
                </div>

                <div style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '1rem', textAlign: 'center' }}>
                    <Award size={48} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>Programme Elite</h3>
                    <p style={{ color: '#6b7280' }}>Devenez un ambassadeur de la Teranga et gagnez des badges exclusifs.</p>
                </div>
            </div>

            <div style={{ background: 'var(--primary)', color: 'white', padding: '4rem 2rem', borderRadius: '1.5rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Inscrivez-vous à la bêta !</h2>
                <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                    Le lancement officiel des forums de discussion est prévu très bientôt. Entrez votre email pour être prévenu.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', maxWidth: '500px', margin: '0 auto' }}>
                    <input
                        type="email"
                        placeholder="votre@email.com"
                        style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: 'none', flex: 1, outline: 'none' }}
                    />
                    <button style={{ background: '#111827', color: 'white', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                        S'inscrire
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Talk;
