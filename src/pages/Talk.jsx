import React from 'react';
import { MessageSquare, Users, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Talk = () => {
    return (
        <div className="container py-8 md-py-12 min-h-[80vh] flex flex-col gap-8 md-gap-12">
            <div className="text-center max-w-3xl mx-auto px-4">
                <h1 className="text-3xl md-text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    Communauté Yes-Africa
                </h1>
                <p className="text-base md-text-xl text-gray-500 leading-relaxed">
                    Partagez vos bonnes adresses, débattez de l'actualité sénégalaise et connectez-vous avec d'autres passionnés de la Teranga.
                </p>
            </div>

            <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-6">
                {[
                    { icon: <MessageSquare size={40} />, title: "Forums", desc: "Bientôt disponible. Sports, art, et politique." },
                    { icon: <Users size={40} />, title: "Rencontres", desc: "Événements de networking dans tout le Sénégal." },
                    { icon: <TrendingUp size={40} />, title: "Sujets", desc: "Découvrez de quoi parlent les Sénégalais." },
                    { icon: <Award size={40} />, title: "Elite", desc: "Devenez ambassadeur et gagnez des badges." }
                ].map((item, idx) => (
                    <div key={idx} className="bg-gray-50 p-8 rounded-2xl text-center border border-transparent hover:border-primary/10 transition-all">
                        <div className="text-primary mb-4 flex justify-center">{item.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="bg-primary text-white p-8 md-p-20 rounded-3xl text-center relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                    <h2 className="text-3xl md-text-4xl font-extrabold mb-4">Inscrivez-vous à la bêta !</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                        Le lancement officiel des forums est prévu bientôt. Entrez votre email pour être prévenu.
                    </p>
                    <div className="flex flex-col md-flex-row justify-center gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="votre@email.com"
                            className="p-4 rounded-xl border-none flex-1 outline-none text-gray-900 font-medium"
                        />
                        <button className="bg-gray-900 text-white p-4 px-8 rounded-xl font-bold shadow-lg active:scale-95 transition-all">
                            S'inscrire
                        </button>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            </div>
        </div>
    );
};

export default Talk;
