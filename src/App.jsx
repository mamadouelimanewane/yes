import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  Star,
  Utensils,
  ShoppingBag,
  Music,
  Hotel,
  Car,
  Sparkles,
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  Award,
  Home as HomeIcon,
  MessageSquare,
  User,
  Heart,
  Navigation
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { businesses, categories } from './data';

// Image Imports
import SearchResults from './pages/SearchResults';
import BusinessDetail from './pages/BusinessDetail';
import Events from './pages/Events';
import Talk from './pages/Talk';
import BusinessDashboard from './pages/BusinessDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Chatbot from './components/Chatbot';
import heroImage from './assets/hero.jpg';

// ============================================================
// NAVBAR — Compact mobile, rich desktop
// ============================================================
const Navbar = () => {
  const navigate = useNavigate();
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav className="glass sticky top-0 z-50 border-b border-gray-200/50 bg-white/90 backdrop-blur-xl">
      <div className="container mx-auto px-3 md:px-4 py-2.5 md:py-3 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 md:w-10 md:h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white font-black text-lg md:text-xl shadow-lg border-2 border-primary/20">
            Y
          </div>
          <span className="text-lg md:text-2xl font-black tracking-tighter text-gray-900 hidden sm:block">
            Yes-<span className="text-primary">Africa</span>
          </span>
        </Link>

        {/* Desktop Search Bar */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md xl:max-w-lg mx-auto items-center gap-2">
          <div className="flex-1 flex items-center gap-2 bg-gray-100 border border-gray-200 shadow-sm focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/30 px-4 py-3 rounded-full transition-all">
            <Search size={18} className="text-gray-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher (ex: Thieboudienne...)"
              className="flex-1 bg-transparent border-none outline-none text-sm font-bold text-gray-800 placeholder-gray-500 w-full min-w-0"
            />
          </div>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event('open-chatbot'))}
            className="group relative bg-gray-900 border border-gray-800 text-white p-1.5 pr-4 rounded-full flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 shrink-0"
            title="Assistant IA Lexi"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?auto=format&fit=crop&q=80&w=150&h=150" alt="Lexi AI" className="w-8 h-8 rounded-full object-cover border-2 border-white relative z-10" />
            <span className="font-bold text-[13px] tracking-wide relative z-10 hidden lg:block">Lexi AI <Sparkles size={12} className="inline text-accent relative -top-0.5" /></span>
          </button>
        </form>

        {/* Mobile: Search Icon + Lexi Avatar */}
        <div className="flex md:hidden items-center gap-2 flex-1 justify-end">
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 active:bg-gray-200 transition-colors"
          >
            <Search size={20} />
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <nav className="flex items-center gap-6 font-bold text-sm text-gray-600">
            <Link to="/search" className="hover:text-gray-900 transition-colors">Découvrir</Link>
            <Link to="/talk" className="hover:text-gray-900 transition-colors">Communauté</Link>
            <Link to="/dashboard" className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-widest border border-primary/20 hover:bg-primary hover:text-white transition-all">PRO</Link>
          </nav>

          <div className="h-6 w-px bg-gray-200"></div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-bold text-gray-700 hover:text-gray-900 transition-colors">Connexion</button>
            <button className="px-5 py-2.5 bg-primary text-white rounded-xl shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all text-sm font-black tracking-wide">
              S'inscrire
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Expandable Bar */}
      <AnimatePresence>
        {mobileSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-gray-100"
          >
            <form onSubmit={handleSearch} className="px-3 py-3 flex items-center gap-2">
              <div className="flex-1 flex items-center gap-2 bg-gray-100 border border-gray-200 px-3 py-3 rounded-xl transition-all focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/30">
                <Search size={18} className="text-gray-400 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Restaurant, hôtel, activité..."
                  className="flex-1 bg-transparent border-none outline-none text-sm font-bold text-gray-800 placeholder-gray-400 w-full"
                  autoFocus
                />
              </div>
              <button
                type="button"
                onClick={() => setMobileSearchOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400"
              >
                <X size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// ============================================================
// MOBILE BOTTOM NAVIGATION — Native app-like
// ============================================================
const MobileBottomNav = () => {
  const location = useLocation();

  if (location.pathname === '/dashboard' || location.pathname.startsWith('/business/')) return null;

  const navItems = [
    { path: '/', icon: HomeIcon, label: 'Accueil' },
    { path: '/search', icon: Search, label: 'Explorer' },
    { path: '/talk', icon: MessageSquare, label: 'Talk' },
    { path: '/dashboard', icon: User, label: 'Profil' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/98 backdrop-blur-xl border-t border-gray-200/50 z-[100] shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
      style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom, 0.5rem))' }}
    >
      <div className="flex justify-between items-end px-2 pt-1.5">
        {navItems.slice(0, 2).map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center gap-0.5 w-16 py-1.5 rounded-xl transition-colors ${location.pathname === item.path ? 'text-primary' : 'text-gray-400'}`}
          >
            <item.icon size={22} strokeWidth={location.pathname === item.path ? 2.5 : 1.8} />
            <span className="text-[9px] font-extrabold uppercase tracking-widest leading-none">{item.label}</span>
          </Link>
        ))}

        {/* Central Lexi AI Avatar Button */}
        <div className="relative -mt-7 flex justify-center w-18">
          <div className="relative">
            <button
              onClick={() => window.dispatchEvent(new Event('open-chatbot'))}
              className="w-[3.75rem] h-[3.75rem] rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.25)] border-[3px] border-white active:scale-95 transition-transform overflow-hidden bg-gray-900"
            >
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?auto=format&fit=crop&q=80&w=150&h=150" alt="Lexi AI" className="w-full h-full object-cover" />
            </button>
            <div className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white z-10 animate-pulse"></div>
          </div>
        </div>

        {navItems.slice(2).map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center gap-0.5 w-16 py-1.5 rounded-xl transition-colors ${location.pathname === item.path ? 'text-primary' : 'text-gray-400'}`}
          >
            <item.icon size={22} strokeWidth={location.pathname === item.path ? 2.5 : 1.8} />
            <span className="text-[9px] font-extrabold uppercase tracking-widest leading-none">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

// ============================================================
// HERO — Mobile: compact & immersive, Desktop: full
// ============================================================
const Hero = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat flex items-end md:items-center overflow-hidden" style={{
      backgroundImage: `url(${heroImage})`,
      minHeight: '280px',
      height: '55vh',
      maxHeight: '600px',
      backgroundColor: '#1f4e3d'
    }}>
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.3) 100%)'
      }} />

      <div className="container relative z-10 text-white pb-8 md:pb-0 md:text-center w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 md:mb-5 leading-tight"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
        >
          Découvrez le meilleur<br className="md:hidden" /> du <span style={{ color: 'var(--accent)' }}>Sénégal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm md:text-lg text-white/80 mb-5 md:mb-8 max-w-xl md:mx-auto font-medium"
        >
          Restaurants, hôtels, activités — trouvez les meilleures adresses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex gap-3 md:justify-center"
        >
          <Link to="/search" className="bg-primary hover:bg-primary-hover text-white py-3.5 px-6 md:py-4 md:px-10 rounded-full font-black text-sm md:text-lg tracking-wide uppercase transition-all shadow-xl shadow-primary/30 active:scale-95 flex items-center gap-2">
            <Search size={18} />
            Explorer
          </Link>
          <button
            onClick={() => window.dispatchEvent(new Event('open-chatbot'))}
            className="md:hidden bg-white/15 backdrop-blur-md border border-white/30 text-white py-3.5 px-5 rounded-full font-bold text-sm transition-all active:scale-95 flex items-center gap-2"
          >
            <Sparkles size={16} className="text-accent" />
            Demander à Lexi
          </button>
        </motion.div>
      </div>
    </div>
  );
};

// ============================================================
// CATEGORIES ROW — Horizontal scroll, big touch targets
// ============================================================
const CategoriesRow = () => {
  const catIcons = { rest: Utensils, shop: ShoppingBag, night: Music, hotel: Hotel, auto: Car, beauty: Sparkles };

  return (
    <div className="bg-white border-b border-gray-100 py-4 md:py-8 relative z-20">
      <div className="container">
        <div className="flex overflow-x-auto gap-2.5 md:gap-6 pb-1 no-scrollbar md:justify-center">
          {categories.slice(0, 6).map(cat => {
            const Icon = catIcons[cat.id];
            return (
              <Link
                to={`/search?category=${cat.name}`}
                key={cat.id}
                className="flex flex-col items-center gap-2 text-gray-600 hover:text-primary transition-all flex-shrink-0 group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors shadow-sm group-hover:text-primary">
                  {Icon && <Icon size={22} />}
                </div>
                <span className="font-bold text-[10px] md:text-xs uppercase tracking-wider text-center whitespace-nowrap">{cat.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// BUSINESS CARD — Mobile: horizontal, Desktop: vertical
// ============================================================
const BusinessCard = ({ business }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
    >
      <Link to={`/business/${business.id}`}>
        {/* Desktop: vertical card */}
        <div className="hidden md:block">
          <div className="relative h-48 overflow-hidden">
            <img
              src={business.image}
              alt={business.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {business.featured && (
              <div className="absolute top-3 left-3 bg-accent text-gray-900 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                <TrendingUp size={12} /> À la une
              </div>
            )}
          </div>
          <div className="p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{business.name}</h3>
              <span className="text-gray-400 font-medium text-sm">{business.price}</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(business.rating) ? "var(--primary)" : "none"} className={i < Math.floor(business.rating) ? "text-primary" : "text-gray-200"} />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-600">{business.reviews} avis</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
              <MapPin size={14} /> {business.location}
            </div>
            <p className="text-gray-600 text-sm line-clamp-2 mb-4">{business.description}</p>
            <div className="flex flex-wrap gap-2">
              {business.tags.slice(0, 3).map(tag => (
                <span key={tag} className="text-xs font-bold uppercase tracking-tighter bg-gray-100 text-gray-500 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: horizontal card — compact & thumb-friendly */}
        <div className="md:hidden flex gap-3">
          <div className="w-28 h-28 shrink-0 relative overflow-hidden rounded-l-2xl">
            <img
              src={business.image}
              alt={business.name}
              className="w-full h-full object-cover"
            />
            {business.featured && (
              <div className="absolute top-1.5 left-1.5 bg-accent text-[0.55rem] font-black uppercase px-1.5 py-0.5 rounded shadow-sm text-gray-900">
                Elite
              </div>
            )}
          </div>
          <div className="flex-1 py-2.5 pr-3 flex flex-col justify-between min-w-0">
            <div>
              <h3 className="text-[15px] font-extrabold text-gray-900 leading-tight line-clamp-1 mb-0.5">{business.name}</h3>
              <div className="flex items-center gap-1.5 mb-1">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill={i < Math.floor(business.rating) ? 'currentColor' : 'none'} className={i >= Math.floor(business.rating) ? 'text-gray-200' : ''} />
                  ))}
                </div>
                <span className="text-[11px] font-bold text-gray-400">{business.rating}</span>
                <span className="text-[10px] text-gray-300">•</span>
                <span className="text-[11px] text-gray-400 font-medium">{business.reviews} avis</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
                <MapPin size={10} className="text-primary shrink-0" />
                <span className="truncate">{business.location}</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-1.5">
              <div className="flex gap-1.5">
                {business.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="text-[9px] font-bold uppercase bg-gray-50 text-gray-400 px-1.5 py-0.5 rounded">{tag}</span>
                ))}
              </div>
              <span className="text-[11px] font-bold text-gray-500">{business.price}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// ============================================================
// MOBILE HORIZONTAL SCROLL CARD
// ============================================================
const MobileScrollCard = ({ business }) => (
  <Link
    to={`/business/${business.id}`}
    className="flex-shrink-0 w-[72vw] max-w-[300px] bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 active:scale-[0.98] transition-transform"
  >
    <div className="relative h-36 overflow-hidden">
      <img src={business.image} alt={business.name} className="w-full h-full object-cover" />
      {business.featured && (
        <div className="absolute top-2 left-2 bg-accent text-[0.6rem] font-black uppercase px-2 py-0.5 rounded shadow-sm text-gray-900 flex items-center gap-1">
          <TrendingUp size={10} /> Elite
        </div>
      )}
      <div className="absolute top-2 right-2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
        <Heart size={14} className="text-gray-400" />
      </div>
    </div>
    <div className="p-3.5">
      <h3 className="text-[15px] font-extrabold text-gray-900 line-clamp-1 mb-1">{business.name}</h3>
      <div className="flex items-center gap-1.5 mb-1.5">
        <div className="flex text-primary">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={11} fill={i < Math.floor(business.rating) ? 'currentColor' : 'none'} className={i >= Math.floor(business.rating) ? 'text-gray-200' : ''} />
          ))}
        </div>
        <span className="text-[11px] font-bold text-gray-500">{business.rating} ({business.reviews})</span>
      </div>
      <div className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
        <MapPin size={10} className="text-primary" />
        <span className="truncate">{business.location}</span>
      </div>
    </div>
  </Link>
);

// ============================================================
// HOME PAGE — Mobile-optimized layout
// ============================================================
const Home = () => {
  const featuredBusinesses = businesses.filter(b => b.featured);
  const premiumBusinesses = businesses.filter(b => b.tags.includes("Travail à distance") || b.tags.includes("Accès handicapé"));

  return (
    <div>
      <Hero />
      <CategoriesRow />

      {/* Popular — Mobile: horizontal scroll, Desktop: grid */}
      <section className="py-8 md:py-20 bg-gray-50">
        <div className="container">
          <div className="flex items-center justify-between mb-5 md:mb-10">
            <div>
              <h2 className="text-xl md:text-3xl font-extrabold flex items-center gap-2 tracking-tight">
                <TrendingUp className="text-primary" size={22} />
                Populaire
              </h2>
              <p className="text-gray-500 font-medium text-sm hidden md:block mt-1">Les établissements les mieux notés en ce moment.</p>
            </div>
            <Link to="/search" className="text-primary font-bold flex items-center gap-0.5 text-sm hover:underline">
              Tout <ChevronRight size={18} />
            </Link>
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="md:hidden flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-1 px-1">
            {featuredBusinesses.slice(0, 6).map(business => (
              <MobileScrollCard key={business.id} business={business} />
            ))}
          </div>

          {/* Desktop: grid */}
          <div className="hidden md:grid md-grid-cols-2 lg-grid-cols-3 gap-8">
            {featuredBusinesses.slice(0, 3).map(business => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Restaurants — Mobile-first section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container">
          <div className="flex items-center justify-between mb-5 md:mb-10">
            <div>
              <h2 className="text-xl md:text-3xl font-extrabold flex items-center gap-2 tracking-tight">
                <Utensils className="text-primary" size={20} />
                Restaurants
              </h2>
            </div>
            <Link to="/search?category=Restaurants" className="text-primary font-bold flex items-center gap-0.5 text-sm hover:underline">
              Tout <ChevronRight size={18} />
            </Link>
          </div>

          {/* Mobile: vertical list, Desktop: grid */}
          <div className="flex flex-col gap-3 md:hidden">
            {businesses.filter(b => b.category === 'Restaurants').slice(0, 4).map(business => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
          <div className="hidden md:grid md-grid-cols-2 lg-grid-cols-3 gap-8">
            {businesses.filter(b => b.category === 'Restaurants').slice(0, 3).map(business => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </div>
      </section>

      {/* Premium Selection */}
      <section className="py-10 md:py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 skew-x-12 transform origin-right"></div>
        <div className="container relative z-10">
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-[10px] font-black uppercase tracking-widest border border-accent/30">
                Concept Elite
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3">
              Sélection <span className="text-accent">Premium</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-lg max-w-2xl">
              Excellences, espaces coworking-friendly et établissements accessibles PMR.
            </p>
            <div className="flex gap-2 mt-4">
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
                <Sparkles size={12} className="text-accent" />
                <span className="text-[11px] font-bold">Work-Friendly</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
                <Award size={12} className="text-primary" />
                <span className="text-[11px] font-bold">PMR</span>
              </div>
            </div>
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="md:hidden flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-1 px-1">
            {premiumBusinesses.slice(0, 5).map(business => (
              <Link
                key={business.id}
                to={`/business/${business.id}`}
                className="flex-shrink-0 w-[72vw] max-w-[300px] bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-white/5 active:scale-[0.98] transition-transform"
              >
                <img src={business.image} alt={business.name} className="w-full h-36 object-cover opacity-80" />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[9px] font-black uppercase tracking-widest text-primary">{business.category}</span>
                    <div className="flex items-center gap-1 text-accent">
                      <Star size={10} fill="currentColor" />
                      <span className="text-[11px] font-bold">{business.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-[15px] font-bold mb-1.5 line-clamp-1">{business.name}</h3>
                  <div className="flex gap-1.5">
                    {business.tags.filter(t => ["Accès handicapé", "Travail à distance", "Coworking"].includes(t)).slice(0, 2).map(tag => (
                      <span key={tag} className="text-[8px] font-bold uppercase px-1.5 py-0.5 bg-white/10 text-white rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Desktop: grid */}
          <div className="hidden md:grid md-grid-cols-3 gap-8">
            {premiumBusinesses.slice(0, 3).map(business => (
              <div key={business.id} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/50 to-primary/50 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <img src={business.image} alt={business.name} className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary">{business.category}</span>
                      <div className="flex items-center gap-1 text-accent">
                        <Star size={12} fill="currentColor" />
                        <span className="text-xs font-bold">{business.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{business.name}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">{business.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {business.tags.filter(t => ["Accès handicapé", "Travail à distance", "Coworking"].includes(t)).map(tag => (
                        <span key={tag} className="text-[9px] font-black uppercase px-2 py-1 bg-white/10 text-white rounded border border-white/5">{tag}</span>
                      ))}
                    </div>
                    <Link
                      to={`/business/${business.id}`}
                      className="mt-6 w-full py-3 bg-white text-gray-900 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-accent transition-colors shadow-lg"
                    >
                      Consulter <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid — Desktop only (mobile already has row) */}
      <section className="hidden md:block py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-extrabold mb-12 text-center">Trouvez ce dont vous avez besoin</h2>
          <div className="grid md-grid-cols-3 lg-grid-cols-6 gap-6">
            {categories.map(cat => {
              const catIcons = { rest: Utensils, shop: ShoppingBag, night: Music, hotel: Hotel, auto: Car, beauty: Sparkles };
              const Icon = catIcons[cat.id];
              return (
                <motion.div key={cat.id} whileHover={{ scale: 1.05, y: -5 }}>
                  <Link to="/search" className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all group w-full">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 group-hover:bg-primary/10 group-hover:text-primary transition-all shadow-inner">
                      {Icon && <Icon size={32} />}
                    </div>
                    <span className="font-bold text-gray-800">{cat.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary overflow-hidden relative">
        <div className="container grid md-grid-cols-2 gap-8 md:gap-12 items-center text-white relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-accent" size={24} />
              <span className="font-bold tracking-widest uppercase text-sm text-white/80">Yes Africa Elite</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
              Rejoignez la plus grande communauté de Teranga
            </h2>
            <p className="text-base md:text-xl text-white/80 mb-6 font-medium">
              Partagez vos expériences, aidez les autres à découvrir des pépites locales.
            </p>
            <div className="flex gap-3">
              <button className="bg-accent text-gray-900 px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-bold shadow-xl active:scale-95 transition-all text-sm md:text-base">
                Commencer
              </button>
              <button className="border border-white/30 bg-white/10 hover:bg-white/20 px-5 py-3.5 md:px-8 md:py-4 rounded-xl font-bold backdrop-blur-sm transition-all text-white text-sm md:text-base">
                En savoir plus
              </button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl" style={{ transform: 'skewY(3deg)' }}>
              <img
                src="https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=800"
                alt="Communauté sénégalaise"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full" style={{ filter: 'blur(100px)', opacity: 0.2 }}></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary rounded-full" style={{ filter: 'blur(100px)', opacity: 0.2 }}></div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
      </section>
    </div>
  );
};

// ============================================================
// FOOTER — Compact on mobile
// ============================================================
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 md:py-20">
      <div className="container">
        {/* Mobile: simplified footer */}
        <div className="md:hidden">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">Y</div>
            <span className="text-lg font-extrabold tracking-tight text-white">Yes-Africa</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            La plateforme n°1 au Sénégal pour découvrir, évaluer et partager les meilleures adresses.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <h4 className="text-white text-sm font-bold mb-3">Découvrir</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/search" className="hover:text-primary">Explorer</Link></li>
                <li><Link to="/talk" className="hover:text-primary">Forum Talk</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-bold mb-3">Légal</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/privacy" className="hover:text-primary">Confidentialité</Link></li>
                <li><Link to="/terms" className="hover:text-primary">Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop: full footer */}
        <div className="hidden md:grid grid-cols-2 md-grid-cols-4 gap-12">
          <div className="col-span-2 md-col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">Y</div>
              <span className="text-xl font-extrabold tracking-tight text-white">Yes-Africa</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              La plateforme n°1 pour découvrir, évaluer et partager les meilleures adresses au Sénégal. Fidèle à l'esprit de la Teranga.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">À propos</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-primary">Notre histoire</Link></li>
              <li><Link to="/jobs" className="hover:text-primary">Carrières</Link></li>
              <li><Link to="/press" className="hover:text-primary">Presse</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Découvrir</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/collections" className="hover:text-primary">Collections</Link></li>
              <li><Link to="/talk" className="hover:text-primary">Forum Talk</Link></li>
              <li><Link to="/business" className="hover:text-primary">Pour les pros</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Légal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/privacy" className="hover:text-primary">Confidentialité</Link></li>
              <li><Link to="/terms" className="hover:text-primary">Conditions</Link></li>
              <li><Link to="/safety" className="hover:text-primary">Sécurité</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 md:mt-20 pt-6 md:pt-8 border-t border-gray-800 text-center text-xs">
          &copy; {new Date().getFullYear()} Yes-Africa. Créé avec ❤️ pour le Sénégal.
        </div>
      </div>
    </footer>
  );
};

// ============================================================
// APP CONTENT & ROUTING
// ============================================================
function AppContent() {
  const location = useLocation();

  if (location.pathname.startsWith('/admin')) {
    return (
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen flex flex-col pb-20 md:pb-0">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/business/:id" element={<BusinessDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/talk" element={<Talk />} />
          <Route path="/dashboard" element={<BusinessDashboard />} />
        </Routes>
      </main>
      <Footer />
      <MobileBottomNav />
      <Chatbot />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
