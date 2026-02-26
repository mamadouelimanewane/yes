import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
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
  ChevronRight,
  TrendingUp,
  Home as HomeIcon,
  MessageSquare,
  User,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { businesses, categories } from './data';

import SearchResults from './pages/SearchResults';
import BusinessDetail from './pages/BusinessDetail';
import Talk from './pages/Talk';
import BusinessDashboard from './pages/BusinessDashboard';
import BusinessRegister from './pages/BusinessRegister';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Chatbot from './components/Chatbot';
import heroImage from './assets/hero.jpg';

// --- SHARED COMPONENTS ---
const ChatbotTrigger = ({ className }) => (
  <button onClick={() => window.dispatchEvent(new Event('open-chatbot'))} className={`lexi-btn ${className || ''}`}>
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  </button>
);

// --- NAV BAR DESKTOP ---
const Navbar = () => {
  return (
    <nav className="main-nav desktop-hide-mobile">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 900, textDecoration: 'none', color: '#111' }}>
          <div style={{ background: '#111', color: '#fff', padding: '6px 12px', borderRadius: '10px' }}>Y</div>
          <span className="desktop-hide">Yes-Africa</span>
        </Link>
        <div className="desktop-only" style={{ display: 'flex', gap: '20px', fontWeight: 700 }}>
          <Link to="/search">Explorer</Link>
          <Link to="/talk">Talk</Link>
          <Link to="/pro/register" style={{ color: 'var(--primary)', fontWeight: 900 }}>Devenir Partenaire</Link>
          <Link to="/dashboard">Pro</Link>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Link to="/search?view=map" style={{
            padding: '8px 16px',
            background: 'var(--primary)',
            borderRadius: '50px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            textDecoration: 'none',
            color: 'white',
            fontWeight: 900,
            fontSize: '13px',
            boxShadow: '0 4px 12px rgba(227, 27, 35, 0.2)'
          }}>
            <MapPin size={18} color="white" />
            <span>Map</span>
          </Link>
          <Link to="/search" style={{ padding: '8px', color: '#111' }}><Search size={22} /></Link>
        </div>
      </div>
    </nav>
  );
};

// --- MOBILE BOTTOM NAV FIXED ---
const MobileNav = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/business/')) return null;

  return (
    <nav className="mobile-nav">
      <Link to="/" className={`mobile-nav-item ${location.pathname === '/' ? 'active' : ''}`}>
        <HomeIcon size={24} />
        <span>ACCUEIL</span>
      </Link>
      <Link to="/search?view=map" className={`mobile-nav-item ${location.search.includes('view=map') ? 'active' : ''}`} style={{ position: 'relative' }}>
        <div style={{
          background: 'var(--primary)',
          color: 'white',
          width: '42px',
          height: '42px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(227, 27, 35, 0.3)',
          marginBottom: '4px'
        }}>
          <MapPin size={22} />
        </div>
        <span style={{ fontSize: '9px', fontWeight: 900 }}>CARTE</span>
      </Link>

      <div className="lexi-btn-container">
        <ChatbotTrigger />
      </div>

      <Link to="/talk" className={`mobile-nav-item ${location.pathname === '/talk' ? 'active' : ''}`}>
        <MessageSquare size={24} />
        <span>TALK</span>
      </Link>
      <Link to="/dashboard" className={`mobile-nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}>
        <User size={24} />
        <span>PROFIL</span>
      </Link>
    </nav>
  );
};

// --- HERO ---
const Hero = () => (
  <header className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
    <div className="hero-overlay"></div>
    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <h1 style={{ marginBottom: '16px', lineHeight: 1.1 }}>Découvrez le meilleur<br />du <span style={{ color: 'var(--accent)' }}>Sénégal</span></h1>
      <p style={{ marginBottom: '30px', fontSize: '1.2rem', opacity: 0.9 }}>Les meilleures adresses à portée de main.</p>
      <Link to="/search" className="btn-primary" style={{ textDecoration: 'none' }}>Explorer maintenant</Link>
    </div>
  </header>
);

// --- BUSINESS CARD ---
const BusinessCard = ({ business }) => (
  <Link to={`/business/${business.id}`} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
    <div style={{ position: 'relative' }}>
      <img src={business.image} alt={business.name} className="card-img" />
      {business.featured && (
        <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'var(--accent)', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 900 }}>ELITE</div>
      )}
      {business.promotion && (
        <div style={{ position: 'absolute', top: '10px', right: '10px', background: '#E31B23', color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '10px', fontWeight: 900, boxShadow: '0 4px 10px rgba(227, 27, 35, 0.3)', animation: 'pulse 2s infinite' }}>
          FLASH: {business.promotion}
        </div>
      )}
    </div>
    <div className="card-body">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <h3 style={{ fontSize: '1.2rem' }}>{business.name}</h3>
        <span style={{ fontWeight: 800 }}>{business.price}</span>
      </div>
      <div style={{ display: 'flex', gap: '4px', marginBottom: '8px', color: 'var(--primary)' }}>
        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < Math.floor(business.rating) ? 'currentColor' : 'none'} />)}
        <span style={{ color: '#6B7280', fontSize: '12px', fontWeight: 700 }}>{business.reviews} avis</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6B7280', fontSize: '12px', fontWeight: 600 }}>
        <MapPin size={12} /> {business.location}
      </div>
    </div>
  </Link>
);

const Home = () => {
  const featured = businesses.filter(b => b.featured).slice(0, 6);
  const catIcons = { rest: Utensils, shop: ShoppingBag, night: Music, hotel: Hotel, auto: Car, beauty: Sparkles };

  return (
    <div style={{ paddingBottom: '100px' }}>
      <Hero />
      <div className="container">
        <div className="categories-scroll">
          {categories.map(cat => {
            const Icon = catIcons[cat.id];
            return (
              <Link to={`/search?category=${encodeURIComponent(cat.name)}`} key={cat.id} className="category-item" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="category-icon">{Icon && <Icon size={24} />}</div>
                <span style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase' }}>{cat.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="section-title">
          <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <TrendingUp size={24} color="var(--primary)" /> Populaire
          </h2>
          <Link to="/search" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>Voir tout</Link>
        </div>

        <div className="cards-grid">
          {featured.map(b => <BusinessCard key={b.id} business={b} />)}
        </div>
      </div>
    </div>
  );
};

// --- APP ---
function AppContent() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
    localStorage.getItem('isAdminAuthenticated') === 'true'
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/business/:id" element={<BusinessDetail />} />
          <Route path="/pro/register" element={<BusinessRegister />} />
          <Route path="/talk" element={<Talk />} />
          <Route path="/dashboard" element={<BusinessDashboard />} />
          <Route path="/login" element={<Login setAuth={setIsAdminAuthenticated} />} />
          <Route
            path="/admin"
            element={isAdminAuthenticated ? <AdminDashboard /> : <Login setAuth={setIsAdminAuthenticated} />}
          />
        </Routes>
      </main>
      <MobileNav />
      <div className="chatbot-desktop-float">
        <ChatbotTrigger />
      </div>
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
