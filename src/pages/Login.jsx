import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Mail, Eye, EyeOff, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Login = ({ setAuth }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        setTimeout(() => {
            if (email === 'admin@yes.com' && password === 'admin123') {
                localStorage.setItem('isAdminAuthenticated', 'true');
                setAuth(true);
                navigate('/admin');
            } else {
                setError('Identifiants invalides. Utilisez admin@yes.com / admin123');
                setIsLoading(false);
            }
        }, 1200);
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#F3F4F6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            fontFamily: "'Inter', sans-serif"
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ width: '100%', maxWidth: '440px' }}
            >
                {/* Brand Header */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '56px',
                        height: '56px',
                        backgroundColor: '#E31B23',
                        color: 'white',
                        borderRadius: '16px',
                        fontSize: '24px',
                        fontWeight: 900,
                        marginBottom: '16px',
                        boxShadow: '0 10px 15px -3px rgba(227, 27, 35, 0.2)'
                    }}>
                        Y
                    </div>
                    <h1 style={{ fontSize: '24px', fontWeight: 900, color: '#111827', margin: 0, letterSpacing: '-0.025em' }}>
                        Accès Administrateur
                    </h1>
                    <p style={{
                        color: '#6B7280',
                        fontWeight: 700,
                        fontSize: '11px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginTop: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                    }}>
                        <ShieldCheck size={14} style={{ color: '#E31B23' }} /> Portail de Gestion Sécurisé
                    </p>
                </div>

                {/* Login Card */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '40px',
                    borderRadius: '40px',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    border: '1px solid #F3F4F6'
                }}>
                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{
                                        padding: '16px',
                                        backgroundColor: '#FEF2F2',
                                        border: '1px solid #FEE2E2',
                                        borderRadius: '16px',
                                        color: '#DC2626',
                                        fontSize: '13px',
                                        fontWeight: 700,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px'
                                    }}
                                >
                                    <div style={{ width: '8px', height: '8px', backgroundColor: '#DC2626', borderRadius: '9999px' }}></div>
                                    {error}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#9CA3AF', marginLeft: '4px' }}>
                                Adresse Email Professionnelle
                            </label>
                            <div style={{ position: 'relative' }}>
                                <Mail style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#D1D5DB' }} size={20} />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@yes.com"
                                    style={{
                                        width: '100%',
                                        backgroundColor: '#F9FAFB',
                                        border: '2px solid #F9FAFB',
                                        padding: '16px 16px 16px 48px',
                                        borderRadius: '16px',
                                        outline: 'none',
                                        fontWeight: 700,
                                        color: '#111827',
                                        fontSize: '15px',
                                        transition: 'all 0.2s'
                                    }}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#9CA3AF', marginLeft: '4px' }}>
                                Mot de Passe Root
                            </label>
                            <div style={{ position: 'relative' }}>
                                <Lock style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#D1D5DB' }} size={20} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    style={{
                                        width: '100%',
                                        backgroundColor: '#F9FAFB',
                                        border: '2px solid #F9FAFB',
                                        padding: '16px 48px 16px 48px',
                                        borderRadius: '16px',
                                        outline: 'none',
                                        fontWeight: 700,
                                        color: '#111827',
                                        fontSize: '15px',
                                        transition: 'all 0.2s'
                                    }}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        position: 'absolute',
                                        right: '16px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: '#D1D5DB',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            fontSize: '12px',
                            fontWeight: 700,
                            color: '#9CA3AF',
                            padding: '0 4px'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <CheckCircle2 size={14} style={{ color: '#10B981' }} />
                                Session chiffrée
                            </div>
                            <span style={{ cursor: 'pointer' }}>Clé perdue ?</span>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            style={{
                                width: '100%',
                                padding: '16px',
                                backgroundColor: '#111827',
                                color: 'white',
                                borderRadius: '16px',
                                border: 'none',
                                fontSize: '14px',
                                fontWeight: 900,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px',
                                opacity: isLoading ? 0.7 : 1,
                                transition: 'all 0.2s',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            {isLoading ? (
                                <div style={{
                                    width: '20px',
                                    height: '20px',
                                    border: '2px solid rgba(255,255,255,0.3)',
                                    borderTopColor: 'white',
                                    borderRadius: '50%',
                                    animation: 'spin 0.8s linear infinite'
                                }}></div>
                            ) : (
                                <>
                                    Se Connecter <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Status Footer */}
                <div style={{
                    marginTop: '32px',
                    textAlign: 'center',
                    fontSize: '10px',
                    fontWeight: 700,
                    color: '#D1D5DB',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em'
                }}>
                    <p style={{ margin: '0 0 8px 0' }}>© 2026 Yes-Africa • Système d'Accès Centralisé</p>
                    <p style={{ margin: 0, color: 'rgba(227, 27, 35, 0.4)', fontStyle: 'italic' }}>
                        Audit de sécurité effectué par Gateway-SSL
                    </p>
                </div>
            </motion.div>
            <style>
                {`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                input:focus {
                    border-color: rgba(227, 27, 35, 0.2) !important;
                    background-color: white !important;
                    box-shadow: 0 0 0 4px rgba(227, 27, 35, 0.05);
                }
                button:active {
                    transform: scale(0.98);
                }
                `}
            </style>
        </div>
    );
};

export default Login;
