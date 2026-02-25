import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react';

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
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                {/* Logo Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-2xl font-black text-3xl mb-4 shadow-xl">
                        Y
                    </div>
                    <h1 className="text-2xl font-black text-gray-900">Backoffice Yes-Africa</h1>
                    <p className="text-gray-500 font-medium mt-1">Accès réservé à l'administration</p>
                </div>

                {/* Login Card */}
                <div className="bg-white p-8 rounded-[32px] shadow-2xl border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-primary"></div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-bold flex items-center gap-3"
                            >
                                <Lock size={18} /> {error}
                            </motion.div>
                        )}

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Adresse Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@yes.sn"
                                    className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white p-4 pl-12 rounded-2xl outline-none font-bold transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Mot de passe</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white p-4 pl-12 pr-12 rounded-2xl outline-none font-bold transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:shadow-gray-900/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    Se connecter <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Footer */}
                <div className="mt-8 flex items-center justify-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest">
                    <ShieldCheck size={16} /> Connection sécurisée SSL/End-to-End
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
