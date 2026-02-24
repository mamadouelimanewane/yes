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
import BusinessDashboard from './pages/BusinessDashboard';
import Chatbot from './components/Chatbot';
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

        <div className="flex-1 max-w-xl mx-4 lg:mx-8 hidden md-flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/20 p-2.5 rounded-full border border-gray-200 transition-all">
            <Search size={18} className="text-gray-400 ml-2 shrink-0" />
            <input
              type="text"
              placeholder="Rechercher (ex: Thieboudienne, Radisson...)"
              className="flex-1 bg-transparent border-none outline-none text-sm font-medium"
            />
          </div>
          <button
            onClick={() => window.dispatchEvent(new Event('open-chatbot'))}
            className="bg-gray-900 border border-gray-800 text-white p-2.5 px-4 rounded-full flex items-center justify-center gap-2 shadow-lg hover:bg-black transition-all group shrink-0 active:scale-95"
            title="Assistant IA Lexi"
          >
            <Sparkles size={16} className="text-accent group-hover:animate-pulse" />
            <span className="font-bold text-sm">Lexi AI</span>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg-flex items-center gap-6 font-medium">
          <Link to="/search" className="hover:text-primary transition-colors text-sm">Découvrir</Link>
          <Link to="/events" className="hover:text-primary transition-colors text-sm hidden xl:block">Événements</Link>
          <Link to="/talk" className="hover:text-primary transition-colors text-sm hidden xl:block">Communauté</Link>
          <Link to="/dashboard" className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500 hover:bg-gray-900 hover:text-white transition-all border border-gray-200">Pro</Link>
          <div className="flex items-center gap-3 border-l pl-6 border-gray-200">
            <button className="px-3 py-2 hover:bg-gray-100 rounded-md text-sm">Connexion</button>
            <button className="px-4 py-2 bg-primary text-white rounded-md shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all text-sm font-bold">S'inscrire</button>
          </div>
        </div>

        {/* Mobile Toggle & Chatbot */}
        <div className="md-hidden flex items-center gap-3">
          <button
            onClick={() => window.dispatchEvent(new Event('open-chatbot'))}
            className="bg-gray-900 text-white p-2 rounded-full shadow-md active:scale-95"
          >
            <Sparkles size={18} className="text-accent" />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 border border-gray-200 p-1.5 rounded-md">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
            <Link to="/dashboard" className="text-lg font-black text-primary" onClick={() => setIsOpen(false)}>Espace Pro (Chef d'entreprise)</Link>
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
    <div className="relative md-h-600 bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden" style={{
      backgroundImage: `url(${heroImage})`,
      minHeight: '400px',
      backgroundColor: '#1f4e3d'
    }}>
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{
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
          className="mt-8 flex gap-4"
        >
          <Link to="/search" className="bg-primary hover:bg-primary-hover text-white p-4 px-8 rounded-full font-black text-lg tracking-wide uppercase transition-all shadow-xl shadow-primary/30 active:scale-95">Explorer les adresses</Link>
        </motion.div>
      </div>
    </div>
  );
};

const CategoriesRow = () => {
  return (
    <div className="bg-white border-b border-gray-100 py-6 md:py-8 shadow-sm relative z-20">
      <div className="container">
        <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6 text-center">Trouvez ce dont vous avez besoin</h3>
        <div className="flex overflow-x-auto justify-start md:justify-center gap-4 md:gap-8 pb-4 no-scrollbar">
          {categories.slice(0, 6).map(cat => (
            <Link
              to={`/search?category=${cat.name}`}
              key={cat.id}
              className="flex flex-col items-center gap-3 text-gray-700 hover:text-primary hover:-translate-y-1 transition-all flex-shrink-0 group"
            >
              <div className="w-16 h-16 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors shadow-sm text-gray-600 group-hover:text-primary">
                {cat.id === 'rest' && <Utensils size={24} />}
                {cat.id === 'shop' && <ShoppingBag size={24} />}
                {cat.id === 'night' && <Music size={24} />}
                {cat.id === 'hotel' && <Hotel size={24} />}
                {cat.id === 'auto' && <Car size={24} />}
                {cat.id === 'beauty' && <Sparkles size={24} />}
              </div>
              <span className="font-bold text-xs uppercase tracking-widest text-center">{cat.name}</span>
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
      <CategoriesRow />

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md-flex items-start md-items-center justify-between mb-8 md-mb-12 gap-4">
            <div>
              <h2 className="text-2xl md-text-3xl font-extrabold flex items-center gap-3 tracking-tight">
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
            {businesses.filter(b => b.featured).slice(0, 3).map(business => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Premium Selection Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 skew-x-12 transform origin-right"></div>
        <div className="container relative z-10">
          <div className="flex flex-col md-flex items-start md-items-center justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-black uppercase tracking-widest border border-accent/30">
                  Concept Elite
                </span>
              </div>
              <h2 className="text-3xl md-text-4xl font-extrabold tracking-tight mb-4">
                Sélection Premium : <span className="text-accent">Excellence & Inclusion</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Découvrez nos établissements coup de cœur, sélectionnés pour leur confort exceptionnel, leurs infrastructures accessibles et leurs espaces dédiés au travail nomade.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
                <Sparkles size={16} className="text-accent" />
                <span className="text-sm font-bold">Work-Friendly</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
                <Award size={16} className="text-primary" />
                <span className="text-sm font-bold">Accessibilité PMR</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md-grid-cols-3 gap-8">
            {businesses
              .filter(b => b.tags.includes("Travail à distance") || b.tags.includes("Accès handicapé"))
              .slice(0, 3)
              .map(business => (
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
                          <span key={tag} className="text-[9px] font-black uppercase px-2 py-1 bg-white/10 text-white rounded border border-white/5">
                            {tag}
                          </span>
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
            <Route path="/dashboard" element={<BusinessDashboard />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
