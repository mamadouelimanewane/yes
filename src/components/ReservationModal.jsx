import React, { useState } from 'react';
import { X, Calendar, Users, Clock, CreditCard, CheckCircle, Info, ChevronRight, Wallet } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ReservationModal = ({ isOpen, onClose, business }) => {
    const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Success
    const [formData, setFormData] = useState({
        date: '',
        endDate: '',
        time: '20:00',
        people: 2,
    });

    // Simulated prices
    const isHotel = business?.category === 'Hôtels';

    // Extract base price from string like "180 000 - 400 000 FCFA" or default
    const extractPrice = (priceStr) => {
        if (!priceStr) return isHotel ? 50000 : 15000;
        const matches = String(priceStr).match(/(\d+[\s\d]*)/);
        return matches ? parseInt(matches[0].replace(/\s/g, '')) : (isHotel ? 50000 : 15000);
    };

    const basePrice = business ? extractPrice(business.price) : 0;
    const totalPrice = basePrice * (formData.people || 1);
    const depositAmount = Math.round(totalPrice * 0.15);

    const handleConfirmInfo = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handlePayment = () => {
        setStep(3);
    };

    if (!isOpen || !business) return null;

    // --- STYLES EN LIGNE (Vanilla Premium) ---
    const overlayStyle = {
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    };

    const modalStyle = {
        backgroundColor: 'white',
        width: '100%',
        maxWidth: '500px',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '90vh'
    };

    const headerStyle = {
        position: 'relative',
        backgroundColor: '#111',
        color: 'white',
        padding: '25px',
        overflow: 'hidden'
    };

    const headerBgStyle = {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(227, 27, 35, 0.2) 0%, rgba(0,0,0,0) 100%)',
        zIndex: 0
    };

    const inputGroupStyle = {
        position: 'relative',
        marginBottom: '20px'
    };

    const labelStyle = {
        display: 'block',
        fontSize: '12px',
        fontWeight: 900,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#666',
        marginBottom: '8px'
    };

    const inputWrapperStyle = {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
        borderRadius: '16px',
        border: '2px solid transparent',
        transition: 'all 0.3s ease',
        overflow: 'hidden'
    };

    const inputIconStyle = {
        position: 'absolute',
        left: '16px',
        color: 'var(--primary)',
        zIndex: 2
    };

    const inputFieldStyle = {
        width: '100%',
        padding: '16px 16px 16px 50px',
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        fontSize: '16px',
        fontWeight: 800,
        color: '#111'
    };

    const paymentButtonStyle = (color) => ({
        padding: '20px',
        border: `2px solid #EEE`,
        borderRadius: '20px',
        backgroundColor: 'white',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
    });

    return (
        <AnimatePresence>
            <div style={overlayStyle}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    style={{ position: 'absolute', inset: 0 }}
                />

                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    style={modalStyle}
                >
                    {/* Header */}
                    <div style={headerStyle}>
                        <div style={headerBgStyle}></div>
                        <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <h2 style={{ fontSize: '20px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '4px', lineHeight: 1.2 }}>
                                    {isHotel ? 'Réserver une chambre' : 'Demande de table'}
                                </h2>
                                <p style={{ color: '#AAA', fontSize: '14px', fontWeight: 600, margin: 0 }}>
                                    {business.name}
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Scrollable Body */}
                    <div style={{ padding: '30px', overflowY: 'auto', flex: 1, backgroundColor: 'white' }}>

                        {step === 1 && (
                            <form onSubmit={handleConfirmInfo}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>

                                    <div style={inputGroupStyle}>
                                        <label style={labelStyle}>Date {isHotel ? "d'arrivée" : ""}</label>
                                        <div style={inputWrapperStyle} className="input-focus-ring">
                                            <Calendar size={20} style={inputIconStyle} />
                                            <input
                                                type="date"
                                                required
                                                style={inputFieldStyle}
                                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    {isHotel ? (
                                        <div style={inputGroupStyle}>
                                            <label style={labelStyle}>Date de départ</label>
                                            <div style={inputWrapperStyle} className="input-focus-ring">
                                                <Calendar size={20} style={inputIconStyle} />
                                                <input
                                                    type="date"
                                                    required
                                                    style={inputFieldStyle}
                                                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div style={inputGroupStyle}>
                                            <label style={labelStyle}>Heure d'arrivée</label>
                                            <div style={inputWrapperStyle} className="input-focus-ring">
                                                <Clock size={20} style={inputIconStyle} />
                                                <input
                                                    type="time"
                                                    required
                                                    defaultValue="20:00"
                                                    style={inputFieldStyle}
                                                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div style={inputGroupStyle}>
                                        <label style={labelStyle}>{isHotel ? "Nombre de Chambres" : "Nombre de Personnes"}</label>
                                        <div style={inputWrapperStyle} className="input-focus-ring">
                                            <Users size={20} style={inputIconStyle} />
                                            <input
                                                type="number"
                                                min="1"
                                                required
                                                defaultValue="2"
                                                style={inputFieldStyle}
                                                onChange={(e) => setFormData({ ...formData, people: parseInt(e.target.value) || 1 })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ backgroundColor: 'rgba(227, 27, 35, 0.05)', borderRadius: '20px', padding: '20px', border: '1px solid rgba(227, 27, 35, 0.1)', margin: '20px 0 30px 0' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                        <span style={{ color: '#555', fontSize: '14px', fontWeight: 800 }}>Estimation totale</span>
                                        <span style={{ fontWeight: 900, color: '#111', fontSize: '16px' }}>{totalPrice.toLocaleString()} FCFA</span>
                                    </div>
                                    <hr style={{ border: 'none', borderTop: '1px dashed rgba(227, 27, 35, 0.2)', margin: '10px 0' }} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--primary)' }}>
                                        <span style={{ fontSize: '13px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px' }}>Acompte requis (15%)</span>
                                        <span style={{ fontWeight: 900, fontSize: '22px' }}>{depositAmount.toLocaleString()} FCFA</span>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary"
                                    style={{ width: '100%', padding: '20px', borderRadius: '16px', fontSize: '16px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
                                >
                                    Valider et Payer <ChevronRight size={20} />
                                </button>
                            </form>
                        )}

                        {step === 2 && (
                            <div style={{ textAlign: 'center', padding: '10px 0' }}>
                                <div style={{ width: '80px', height: '80px', backgroundColor: 'rgba(242, 169, 0, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', color: 'var(--secondary)' }}>
                                    <Wallet size={40} />
                                </div>
                                <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#111', marginBottom: '10px' }}>Paiement de l'acompte</h3>
                                <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.5, marginBottom: '30px', fontWeight: 500 }}>
                                    Le montant à régler pour confirmer votre réservation est de <br />
                                    <strong style={{ color: '#111', fontSize: '18px', fontWeight: 900 }}>{depositAmount.toLocaleString()} FCFA</strong>.
                                </p>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' }}>
                                    <button
                                        onClick={handlePayment}
                                        style={paymentButtonStyle('#FF7900')}
                                        onMouseOver={(e) => { e.currentTarget.style.borderColor = '#FF7900'; e.currentTarget.style.backgroundColor = 'rgba(255, 121, 0, 0.05)'; }}
                                        onMouseOut={(e) => { e.currentTarget.style.borderColor = '#EEE'; e.currentTarget.style.backgroundColor = 'white'; }}
                                    >
                                        <div style={{ width: '100%', padding: '15px 0', backgroundColor: '#FF7900', borderRadius: '12px', color: 'white', fontWeight: 900, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                            Orange
                                        </div>
                                        <span style={{ color: '#111', fontWeight: 800, fontSize: '13px' }}>Payer</span>
                                    </button>

                                    <button
                                        onClick={handlePayment}
                                        style={paymentButtonStyle('#1ca1ff')}
                                        onMouseOver={(e) => { e.currentTarget.style.borderColor = '#1ca1ff'; e.currentTarget.style.backgroundColor = 'rgba(28, 161, 255, 0.05)'; }}
                                        onMouseOut={(e) => { e.currentTarget.style.borderColor = '#EEE'; e.currentTarget.style.backgroundColor = 'white'; }}
                                    >
                                        <div style={{ width: '100%', padding: '15px 0', backgroundColor: '#1ca1ff', borderRadius: '12px', color: 'white', fontWeight: 900, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                            Wave
                                        </div>
                                        <span style={{ color: '#111', fontWeight: 800, fontSize: '13px' }}>Payer</span>
                                    </button>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '15px', backgroundColor: '#F9FAFB', borderRadius: '12px', border: '1px solid #EEE' }}>
                                    <Info size={18} color="#999" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <p style={{ margin: 0, textAlign: 'left', fontSize: '12px', color: '#666', lineHeight: 1.5, fontWeight: 500 }}>
                                        Paiement sécurisé. Cet acompte garantit votre place et sera déduit de votre facture finale sur place.
                                    </p>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div style={{ textAlign: 'center', padding: '20px 0' }}>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', bounce: 0.5 }}
                                    style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}
                                >
                                    <div style={{ width: '100px', height: '100px', backgroundColor: '#10B981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)' }}>
                                        <CheckCircle size={50} />
                                    </div>
                                </motion.div>

                                <h3 style={{ fontSize: '28px', fontWeight: 900, color: '#111', marginBottom: '10px' }}>C'est validé !</h3>
                                <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.5, marginBottom: '30px', fontWeight: 500 }}>
                                    Votre réservation chez <strong style={{ color: '#111' }}>{business.name}</strong> est confirmée. Vous allez recevoir un SMS avec votre reçu.
                                </p>

                                <div style={{ backgroundColor: '#F9FAFB', border: '2px dashed #E5E7EB', borderRadius: '24px', padding: '25px', marginBottom: '30px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                        <span style={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', color: '#888' }}>Numéro de reçu</span>
                                        <span style={{ fontSize: '14px', fontWeight: 900, color: '#111' }}>#YA-{Math.floor(Math.random() * 90000 + 10000)}</span>
                                    </div>
                                    <hr style={{ border: 'none', borderTop: '1px solid #EEE', margin: '0 0 15px 0' }} />
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                                            <span style={{ color: '#666', fontWeight: 700 }}>Date prévue</span>
                                            <span style={{ color: '#111', fontWeight: 800 }}>{formData.date}</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                                            <span style={{ color: '#666', fontWeight: 700 }}>Acompte réglé</span>
                                            <span style={{ color: 'var(--primary)', fontWeight: 900 }}>{depositAmount.toLocaleString()} FCFA</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={onClose}
                                    style={{ width: '100%', padding: '20px', backgroundColor: '#111', color: 'white', borderRadius: '16px', fontSize: '16px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', border: 'none', cursor: 'pointer' }}
                                >
                                    Retourner à l'accueil
                                </button>
                            </div>
                        )}

                    </div>
                </motion.div>
            </div>

            <style>
                {`
                .input-focus-ring:focus-within {
                    border-color: var(--primary) !important;
                    background-color: white !important;
                    box-shadow: 0 0 0 4px rgba(227, 27, 35, 0.1);
                }
                `}
            </style>
        </AnimatePresence>
    );
};

export default ReservationModal;
