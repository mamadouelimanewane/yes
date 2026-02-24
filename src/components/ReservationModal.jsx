import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, Clock, CreditCard, CheckCircle, Info } from 'lucide-react';
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
    const isHotel = business.category === 'Hôtels';
    const isRestaurant = business.category === 'Restaurants';

    // Extract base price from string like "180 000 - 400 000 FCFA" or default
    const extractPrice = (priceStr) => {
        if (!priceStr) return isHotel ? 50000 : 15000;
        const matches = priceStr.match(/(\d+[\s\d]*)/);
        return matches ? parseInt(matches[0].replace(/\s/g, '')) : (isHotel ? 50000 : 15000);
    };

    const basePrice = extractPrice(business.price);
    const totalPrice = isHotel ? basePrice * (formData.people || 1) : basePrice * (formData.people || 1);
    const depositAmount = Math.round(totalPrice * 0.15);

    const handleConfirmInfo = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handlePayment = () => {
        setStep(3);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
                >
                    {/* Header */}
                    <div className="bg-gray-900 p-6 text-white flex justify-between items-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
                        <div className="relative z-10">
                            <h2 className="text-xl font-black uppercase tracking-widest leading-none mb-1">
                                {isHotel ? 'Réservation de Chambre' : 'Réservation de Table'}
                            </h2>
                            <p className="text-gray-400 text-xs font-bold truncate max-w-[250px]">{business.name}</p>
                        </div>
                        <button onClick={onClose} className="relative z-10 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="p-8">
                        {step === 1 && (
                            <form onSubmit={handleConfirmInfo} className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-2">
                                        <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Date {isHotel ? "d'arrivée" : ""}</label>
                                        <div className="relative group">
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={20} />
                                            <input
                                                type="date"
                                                required
                                                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-primary/50 focus:bg-white outline-none font-bold transition-all"
                                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    {isHotel ? (
                                        <div className="col-span-2">
                                            <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Date de départ</label>
                                            <div className="relative group">
                                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={20} />
                                                <input
                                                    type="date"
                                                    required
                                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-primary/50 focus:bg-white outline-none font-bold transition-all"
                                                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="col-span-1">
                                            <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Heure</label>
                                            <div className="relative group">
                                                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={20} />
                                                <input
                                                    type="time"
                                                    defaultValue="20:00"
                                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-primary/50 focus:bg-white outline-none font-bold transition-all"
                                                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className={isHotel ? "col-span-2" : "col-span-1"}>
                                        <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">{isHotel ? "Chambres / Voyageurs" : "Personnes"}</label>
                                        <div className="relative group">
                                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={20} />
                                            <input
                                                type="number"
                                                min="1"
                                                defaultValue="2"
                                                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-primary/50 focus:bg-white outline-none font-bold transition-all"
                                                onChange={(e) => setFormData({ ...formData, people: parseInt(e.target.value) || 1 })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-500 font-bold text-sm">Estimation totale</span>
                                        <span className="font-extrabold text-gray-900">{totalPrice.toLocaleString()} FCFA</span>
                                    </div>
                                    <div className="flex justify-between items-center text-primary">
                                        <span className="font-black text-xs uppercase tracking-widest">Acompte requis (15%)</span>
                                        <span className="font-black text-xl">{depositAmount.toLocaleString()} FCFA</span>
                                    </div>
                                </div>

                                <button type="submit" className="w-full py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95">
                                    Suivant
                                </button>
                            </form>
                        )}

                        {step === 2 && (
                            <div className="space-y-8 text-center">
                                <div className="flex justify-center">
                                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center text-accent animate-pulse">
                                        <CreditCard size={40} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-black text-gray-900">Paiement de l'acompte</h3>
                                    <p className="text-gray-500 font-medium italic">Veuillez finaliser le paiement de <b>{depositAmount.toLocaleString()} FCFA</b> via Orange Money ou Wave pour confirmer.</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <button onClick={handlePayment} className="p-4 border-2 border-gray-100 rounded-2xl hover:border-[#FF7900] hover:bg-[#FF7900]/5 transition-all group">
                                        <div className="w-full aspect-video bg-[#FF7900] rounded-lg mb-2 flex items-center justify-center font-black text-xs text-white uppercase tracking-widest shadow-inner">Orange Money</div>
                                        <span className="text-black font-bold text-sm">Sélectionner</span>
                                    </button>
                                    <button onClick={handlePayment} className="p-4 border-2 border-gray-100 rounded-2xl hover:border-[#1ca1ff] hover:bg-[#1ca1ff]/5 transition-all group">
                                        <div className="w-full aspect-video bg-[#1ca1ff] rounded-lg mb-2 flex items-center justify-center font-black text-xs text-white uppercase tracking-widest shadow-inner">Wave</div>
                                        <span className="text-black font-bold text-sm">Sélectionner</span>
                                    </button>
                                </div>

                                <div className="flex items-center gap-3 text-xs text-gray-400 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <Info size={16} className="shrink-0" />
                                    <p className="text-left leading-relaxed">Le paiement est sécurisé par <b>Sen-Pay</b>. L'acompte de 15% est déductible du montant final lors de votre passage.</p>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-8 text-center py-6">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="flex justify-center"
                                >
                                    <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-200">
                                        <CheckCircle size={56} />
                                    </div>
                                </motion.div>
                                <div className="space-y-3">
                                    <h3 className="text-3xl font-black text-gray-900 leading-tight">Confirmation <br /><span className="text-green-500">Réussie !</span></h3>
                                    <p className="text-gray-500 font-medium">Votre demande a été transmise à <b>{business.name}</b>. Un SMS de confirmation vous a été envoyé.</p>
                                </div>
                                <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl p-6">
                                    <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
                                        <span>Reçu de réservation</span>
                                        <span>#YA-{Math.floor(Math.random() * 90000 + 10000)}</span>
                                    </div>
                                    <div className="space-y-2 text-left">
                                        <div className="flex justify-between font-bold"><span className="text-gray-400">Date :</span> <span>{formData.date}</span></div>
                                        <div className="flex justify-between font-bold"><span className="text-gray-400">Acompte :</span> <span className="text-primary">{depositAmount.toLocaleString()} FCFA</span></div>
                                    </div>
                                </div>
                                <button onClick={onClose} className="w-full py-5 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-black transition-all">
                                    Fermer
                                </button>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ReservationModal;
