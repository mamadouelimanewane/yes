import React, { useState } from 'react';
import { Store, MapPin, Phone, Mail, Image, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const BusinessRegister = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        category: 'Restaurant',
        address: '',
        phone: '',
        email: '',
        description: ''
    });

    const categories = ['Restaurant', 'Hôtel', 'Auberge', 'Boutique', 'Service', 'Beauté'];

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(3); // Go to success state
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#F9FAFB', display: 'flex', flexDirection: 'column' }}>
            <header style={{ backgroundColor: '#111', color: 'white', padding: '20px', position: 'relative' }}>
                <Link to="/" style={{ position: 'absolute', left: '20px', top: '25px', color: 'white', textDecoration: 'none' }}>
                    <ArrowLeft size={24} />
                </Link>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '1.2rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>Devenir Partenaire</h1>
                    <span style={{ fontSize: '10px', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px' }}>Yes-Africa Pro</span>
                </div>
            </header>

            <main style={{ flex: 1, padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            style={{ width: '100%', maxWidth: '500px', backgroundColor: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}
                        >
                            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                                <div style={{ width: '60px', height: '60px', backgroundColor: 'rgba(227, 27, 35, 0.1)', color: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px auto' }}>
                                    <Store size={30} />
                                </div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '5px' }}>Quel est votre établissement ?</h2>
                                <p style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>Rejoignez Yes-Africa et développez votre clientèle instantanément.</p>
                            </div>

                            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', color: '#888', letterSpacing: '1px' }}>Nom de l'établissement</label>
                                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: '12px', padding: '15px' }}>
                                        <Store size={18} color="#999" style={{ marginRight: '10px' }} />
                                        <input
                                            type="text"
                                            required
                                            placeholder="Ex: Le Djoloff"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontWeight: 700, fontSize: '14px', color: '#111' }}
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', color: '#888', letterSpacing: '1px' }}>Catégorie</label>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                        {categories.map(cat => (
                                            <div
                                                key={cat}
                                                onClick={() => setFormData({ ...formData, category: cat })}
                                                style={{
                                                    padding: '12px',
                                                    borderRadius: '12px',
                                                    textAlign: 'center',
                                                    fontWeight: 800,
                                                    fontSize: '12px',
                                                    cursor: 'pointer',
                                                    border: formData.category === cat ? '2px solid var(--primary)' : '2px solid #EEE',
                                                    backgroundColor: formData.category === cat ? 'rgba(227, 27, 35, 0.05)' : 'white',
                                                    color: formData.category === cat ? 'var(--primary)' : '#666',
                                                    transition: 'all 0.2s'
                                                }}
                                            >
                                                {cat}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button type="submit" className="btn-primary" style={{ marginTop: '10px', width: '100%', padding: '18px', borderRadius: '16px', fontSize: '14px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                                    Continuer <ArrowRight size={18} />
                                </button>
                            </form>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            style={{ width: '100%', maxWidth: '500px', backgroundColor: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}
                        >
                            <div style={{ textAlign: 'center', marginBottom: '30px', position: 'relative' }}>
                                <button onClick={() => setStep(1)} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#999', cursor: 'pointer' }}>
                                    <ArrowLeft size={20} />
                                </button>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '5px' }}>Détails & Contact</h2>
                                <p style={{ fontSize: '12px', color: '#666', fontWeight: 500 }}>Pour vous contacter et vérifier votre identité.</p>
                            </div>

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', color: '#888', letterSpacing: '1px' }}>Adresse exacte</label>
                                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: '12px', padding: '15px' }}>
                                        <MapPin size={18} color="#999" style={{ marginRight: '10px' }} />
                                        <input
                                            type="text"
                                            required
                                            value={formData.address}
                                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                            placeholder="Quartier, Rue, Ville"
                                            style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontWeight: 700, fontSize: '14px', color: '#111' }}
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', color: '#888', letterSpacing: '1px' }}>Téléphone</label>
                                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: '12px', padding: '15px' }}>
                                            <Phone size={18} color="#999" style={{ marginRight: '10px' }} />
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                placeholder="+221..."
                                                style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontWeight: 700, fontSize: '14px', color: '#111' }}
                                            />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', color: '#888', letterSpacing: '1px' }}>Email</label>
                                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: '12px', padding: '15px' }}>
                                            <Mail size={18} color="#999" style={{ marginRight: '10px' }} />
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="contact@..."
                                                style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontWeight: 700, fontSize: '14px', color: '#111' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ backgroundColor: 'rgba(0,0,0,0.02)', border: '2px dashed #DDD', borderRadius: '16px', padding: '20px', textAlign: 'center', cursor: 'pointer' }}>
                                    <Image size={24} color="#999" style={{ margin: '0 auto 10px auto' }} />
                                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#666', display: 'block' }}>Ajouter des photos (Optionnel)</span>
                                </div>

                                <button type="submit" className="btn-primary" style={{ marginTop: '10px', width: '100%', padding: '18px', borderRadius: '16px', fontSize: '14px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                                    Soumettre <CheckCircle size={18} />
                                </button>
                            </form>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            style={{ width: '100%', maxWidth: '500px', backgroundColor: 'white', padding: '40px 30px', borderRadius: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', textAlign: 'center' }}
                        >
                            <div style={{ width: '100px', height: '100px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10B981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                                <CheckCircle size={50} />
                            </div>
                            <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '15px', color: '#111' }}>Demande Envoyée !</h2>

                            <div style={{ backgroundColor: '#F9FAFB', borderRadius: '20px', padding: '20px', textAlign: 'left', marginBottom: '30px', border: '1px solid #EEE' }}>
                                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                                    Merci d'avoir soumis <strong>{formData.name}</strong>. Votre établissement est actuellement <strong style={{ color: 'var(--primary)' }}>en cours de validation</strong> par nos équipes.
                                    Vous recevrez un email de confirmation dès lors qu'il sera validé et publié sur la plateforme.
                                </p>
                            </div>

                            <Link to="/" style={{ display: 'inline-block', width: '100%', padding: '18px', borderRadius: '16px', backgroundColor: '#111', color: 'white', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', textDecoration: 'none', transition: 'all 0.3s' }}>
                                Retour à l'accueil
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
};

export default BusinessRegister;
