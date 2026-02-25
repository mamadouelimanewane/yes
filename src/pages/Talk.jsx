import React from 'react';
import { MessageSquare, Users, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Talk = () => {
    return (
        <div style={{ padding: '40px 0', minHeight: '80vh', display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Header */}
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#111' }}>
                    Communauté <span style={{ color: 'var(--primary)' }}>Yes-Africa</span>
                </h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    Partagez vos bonnes adresses, débattez de l'actualité sénégalaise et connectez-vous avec d'autres passionnés de la Teranga.
                </p>
            </div>

            {/* Features Grid */}
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {[
                        { icon: <MessageSquare size={36} />, title: "Forums", desc: "Bientôt disponible. Sports, art, et politique." },
                        { icon: <Users size={36} />, title: "Rencontres", desc: "Événements de networking dans tout le Sénégal." },
                        { icon: <TrendingUp size={36} />, title: "Sujets", desc: "Découvrez de quoi parlent les Sénégalais." },
                        { icon: <Award size={36} />, title: "Elite", desc: "Devenez ambassadeur et gagnez des badges." }
                    ].map((item, idx) => (
                        <div key={idx} className="card" style={{ padding: '30px', textAlign: 'center', transition: 'transform 0.3s ease', cursor: 'pointer' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Newsletter CTA */}
            <div className="container">
                <div style={{
                    background: 'var(--primary)',
                    color: 'white',
                    padding: '40px 20px',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'center',
                    boxShadow: '0 20px 40px rgba(227, 27, 35, 0.2)'
                }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Inscrivez-vous à la bêta !</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 30px' }}>
                        Le lancement officiel des forums est prévu bientôt. Laissez votre email pour être prévenu.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                        <input
                            type="email"
                            placeholder="votre@email.com"
                            style={{ padding: '15px 20px', borderRadius: '50px', border: 'none', minWidth: '250px', outline: 'none', fontSize: '16px' }}
                        />
                        <button className="btn-primary" style={{ background: '#111' }}>
                            S'inscrire
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Talk;
