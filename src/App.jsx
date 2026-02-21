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
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { businesses, categories } from './data';

// Image Imports
import SearchResults from './pages/SearchResults';
import BusinessDetail from './pages/BusinessDetail';
import Events from './pages/Events';
import Talk from './pages/Talk';
import heroImage from './assets/hero.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass sticky top-0 z-50 border-b border-gray-200">
      <div className="container py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
            Y
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-primary">Yes-Africa</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md-flex items-center gap-8 font-medium">
          <Link to="/search" className="hover:text-primary transition-colors">Découvrir</Link>
          <Link to="/events" className="hover:text-primary transition-colors">Événements</Link>
          <Link to="/talk" className="hover:text-primary transition-colors">Communauté</Link>
          <div className="flex items-center gap-4 border-l pl-8 border-gray-200">
            <button className="px-4 py-2 hover:bg-gray-100 rounded-md">Se connecter</button>
            <button className="px-5 py-2.5 bg-primary text-white rounded-md shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all">S'inscrire</button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md-hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md-hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 p-6 flex flex-col gap-4 shadow-xl"
          >
            <Link to="/search" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Découvrir</Link>
            <Link to="/events" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Événements</Link>
            <Link to="/talk" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Communauté</Link>
            <hr />
            <button className="w-full py-3 text-center font-medium border border-primary text-primary rounded-md">Se connecter</button>
            <button className="w-full py-3 text-center font-medium bg-primary text-white rounded-md shadow-md">S'inscrire</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <div style={{
      position: 'relative',
      height: '600px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#1f4e3d'
    }}>
      {/* Dark overlay */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 100%)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: 'white' }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', fontWeight: 800, marginBottom: '1.5rem', textShadow: '0 2px 20px rgba(0,0,0,0.5)', lineHeight: 1.1 }}
        >
          Découvrez le meilleur du <span style={{ color: 'var(--accent)' }}>Sénégal</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            maxWidth: '900px', margin: '0 auto',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            padding: '0.5rem',
            borderRadius: '1rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}
        >
          <div style={{ flex: 1, minWidth: '180px', display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'white', color: '#374151', padding: '1rem 1.25rem', borderRadius: '0.75rem' }}>
            <Search size={22} style={{ color: '#9ca3af', flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Thieboudienne, Garages, Plages..."
              style={{ width: '100%', outline: 'none', border: 'none', fontFamily: 'inherit', fontSize: '0.95rem', fontWeight: 500, color: '#374151' }}
            />
          </div>
          <div style={{ flex: 1, minWidth: '140px', display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'white', color: '#374151', padding: '1rem 1.25rem', borderRadius: '0.75rem' }}>
            <MapPin size={22} style={{ color: '#9ca3af', flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Dakar, Saint-Louis..."
              style={{ width: '100%', outline: 'none', border: 'none', fontFamily: 'inherit', fontSize: '0.95rem', fontWeight: 500, color: '#374151' }}
            />
          </div>
          <Link to="/search" style={{
            background: 'var(--primary)', color: 'white',
            padding: '1rem 2rem', borderRadius: '0.75rem',
            fontWeight: 700, fontSize: '1rem',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            boxShadow: '0 4px 15px rgba(227,27,35,0.4)',
            whiteSpace: 'nowrap', textDecoration: 'none'
          }}>
            <Search size={20} /> Rechercher
          </Link>
        </motion.div>

        <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', fontSize: '0.95rem', fontWeight: 600 }}>
          {categories.slice(0, 4).map(cat => (
            <Link to="/search" key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'white', textDecoration: 'none' }}>
              <span style={{
                padding: '0.5rem',
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '9999px',
                border: '1px solid rgba(255,255,255,0.3)',
                display: 'flex',
                backdropFilter: 'blur(8px)'
              }}>
                {cat.id === 'rest' && <Utensils size={18} />}
                {cat.id === 'shop' && <ShoppingBag size={18} />}
                {cat.id === 'night' && <Music size={18} />}
                {cat.id === 'hotel' && <Hotel size={18} />}
              </span>
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};


const BusinessCard = ({ business }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
    >
      <Link to={`/business/${business.id}`}>
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
                <Star
                  key={i}
                  size={16}
                  fill={i < Math.floor(business.rating) ? "var(--primary)" : "none"}
                  className={i < Math.floor(business.rating) ? "text-primary border-primary" : "text-gray-200"}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-600">{business.reviews} avis</span>
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
            <MapPin size={14} />
            {business.location}
          </div>

          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {business.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {business.tags.map(tag => (
              <span key={tag} className="text-xs font-bold uppercase tracking-tighter bg-gray-100 text-gray-500 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Home = () => {
  return (
    <div>
      <Hero />

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-extrabold flex items-center gap-3">
                <TrendingUp className="text-primary" />
                Populaire au Sénégal
              </h2>
              <p className="text-gray-500 font-medium">Les établissements les mieux notés en ce moment.</p>
            </div>
            <Link to="/search" className="text-primary font-bold flex items-center gap-1 hover:underline">
              Voir tout <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8">
            {businesses.filter(b => b.featured).map(business => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-extrabold mb-12 text-center">Trouvez ce dont vous avez besoin</h2>
          <div className="grid grid-cols-2 md-grid-cols-3 lg-grid-cols-6 gap-6">
            {categories.map(cat => (
              <motion.div
                key={cat.id}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Link to="/search" className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all group w-full">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 group-hover:bg-primary/10 group-hover:text-primary transition-all shadow-inner">
                    {cat.id === 'rest' && <Utensils size={32} />}
                    {cat.id === 'shop' && <ShoppingBag size={32} />}
                    {cat.id === 'night' && <Music size={32} />}
                    {cat.id === 'hotel' && <Hotel size={32} />}
                    {cat.id === 'auto' && <Car size={32} />}
                    {cat.id === 'beauty' && <Sparkles size={32} />}
                  </div>
                  <span className="font-bold text-gray-800">{cat.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section with Senegalese Characters focus */}
      <section className="py-20 bg-primary overflow-hidden relative">
        <div className="container grid md-grid-cols-2 gap-12 items-center text-white relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="text-accent" size={32} />
              <span className="font-bold tracking-widest uppercase text-accent-80">Yes Africa Elite</span>
            </div>
            <h2 className="text-4xl md-text-5xl font-extrabold mb-6 leading-tight">
              Rejoignez la plus grande communauté de Teranga
            </h2>
            <p className="text-xl text-white mb-8 font-medium" style={{ opacity: 0.8 }}>
              Partagez vos expériences, aidez les autres à découvrir des pépites locales et devenez un guide incontournable du Sénégal.
            </p>
            <div className="flex gap-4">
              <button className="bg-accent text-gray-900 px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition-all">
                Commencer maintenant
              </button>
              <button className="border border-white/30 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl font-bold backdrop-blur-sm transition-all text-white">
                En savoir plus
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl" style={{ transform: 'skewY(3deg)' }}>
              <img
                src="https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=800"
                alt="Communauté sénégalaise"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full" style={{ filter: 'blur(100px)', opacity: 0.2 }}></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary rounded-full" style={{ filter: 'blur(100px)', opacity: 0.2 }}></div>
          </div>
        </div>
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
      </section>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-20">
      <div className="container grid grid-cols-2 md-grid-cols-4 gap-12">
        <div className="col-span-2 md-col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              Y
            </div>
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
      <div className="container mt-20 pt-8 border-t border-gray-800 text-center text-xs">
        &copy; {new Date().getFullYear()} Yes-Africa. Créé avec ❤️ pour le Sénégal.
      </div>
    </footer>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/business/:id" element={<BusinessDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/talk" element={<Talk />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
