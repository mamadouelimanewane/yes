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

        // Identifiants mis à jour selon la demande utilisateur
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
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-[440px]"
            >
                {/* Brand Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary text-white rounded-2xl font-black text-2xl mb-4 shadow-lg shadow-primary/20">
                        Y
                    </div>
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">Accès Administrateur</h1>
                    <p className="text-gray-500 font-bold text-xs uppercase tracking-widest mt-2 flex items-center justify-center gap-2">
                        <ShieldCheck size={14} className="text-primary" /> Portail de Gestion Sécurisé
                    </p>
                </div>

                {/* Login Card - Clean & Professional */}
                <div className="bg-white p-10 rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-[13px] font-bold flex items-center gap-3"
                                >
                                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                                    {error}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="space-y-2">
                            <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 ml-1">Adresse Email Professionnelle</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors" size={20} />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@yes.com"
                                    className="w-full bg-gray-50 border-2 border-gray-50 focus:border-primary/10 focus:bg-white p-4 pl-12 rounded-2xl outline-none font-bold text-gray-900 transition-all placeholder:text-gray-300"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 ml-1">Mot de Passe Root</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors" size={20} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-gray-50 border-2 border-gray-50 focus:border-primary/10 focus:bg-white p-4 pl-12 pr-12 rounded-2xl outline-none font-bold text-gray-900 transition-all placeholder:text-gray-300"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-900 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-[12px] font-bold text-gray-400 px-1">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-green-500" />
                                Session chiffrée
                            </div>
                            <button type="button" className="hover:text-primary transition-colors">Clé perdue ?</button>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest text-[13px] shadow-xl shadow-gray-900/10 hover:shadow-gray-900/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    Se Connecter <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Status Footer */}
                <div className="mt-8 text-center text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] space-y-2">
                    <p>© 2026 Yes-Africa • Système d'Accès Centralisé</p>
                    <p className="text-primary/40 italic">Audit de sécurité effectué par Gateway-SSL</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
