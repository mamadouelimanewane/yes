import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Mail, Eye, EyeOff, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

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

        // Simulation d'authentification super-admin
        setTimeout(() => {
            if (email === 'admin@yes.sn' && password === 'admin2026') {
                localStorage.setItem('isAdminAuthenticated', 'true');
                setAuth(true);
                navigate('/admin');
            } else {
                setError('Identifiants invalides. Veuillez réessayer.');
                setIsLoading(false);
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center p-4 relative overflow-hidden font-sans">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-lg z-10"
            >
                {/* Logo Section */}
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ scale: 0.5, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-orange-600 text-white rounded-[24px] font-black text-4xl mb-6 shadow-[0_20px_50px_rgba(227,27,35,0.3)] border border-white/20"
                    >
                        Y
                    </motion.div>
                    <h1 className="text-4xl font-black text-white tracking-tight mb-2">Backoffice <span className="text-primary italic">Yes</span>.</h1>
                    <div className="flex items-center justify-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-[0.2em]">
                        <Cpu size={14} className="text-primary" /> Gateway Sécurisée v2.0
                    </div>
                </div>

                {/* Login Card - Glassmorphism */}
                <div className="bg-white/[0.03] backdrop-blur-2xl p-10 rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

                    <form onSubmit={handleLogin} className="space-y-8">
                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-sm font-bold flex items-center gap-3"
                                >
                                    <Lock size={18} /> {error}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="space-y-3">
                            <label className="text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 ml-1">Identifiant Admin</label>
                            <div className="relative group/input">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-primary transition-colors" size={20} />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@yes.sn"
                                    className="w-full bg-white/[0.05] border-2 border-white/5 focus:border-primary/40 focus:bg-white/[0.08] p-5 pl-14 rounded-2xl outline-none font-bold text-white transition-all placeholder:text-gray-600"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 ml-1">Clé d'Accès</label>
                            <div className="relative group/input">
                                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-primary transition-colors" size={20} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-white/[0.05] border-2 border-white/5 focus:border-primary/40 focus:bg-white/[0.08] p-5 pl-14 pr-14 rounded-2xl outline-none font-bold text-white transition-all placeholder:text-gray-600"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-[0.15em] text-sm shadow-[0_15px_35px_rgba(227,27,35,0.4)] hover:shadow-[0_20px_45px_rgba(227,27,35,0.6)] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            {isLoading ? (
                                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    Authentifier <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Cyber Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 flex flex-col items-center gap-4"
                >
                    <div className="flex items-center gap-3 text-gray-500 font-bold text-[10px] uppercase tracking-[0.25em]">
                        <ShieldCheck size={16} className="text-green-500" /> Infrastructure Certifiée SSL / RSA-4096
                    </div>
                    <div className="w-1 h-8 bg-gradient-to-b from-primary/50 to-transparent rounded-full"></div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Login;
