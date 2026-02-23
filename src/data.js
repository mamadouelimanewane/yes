export const categories = [
  { id: 'rest', name: 'Restaurants', icon: 'Utensils' },
  { id: 'hotel', name: 'Hôtels', icon: 'Hotel' },
  { id: 'shop', name: 'Shopping', icon: 'ShoppingBag' },
  { id: 'night', name: 'Vie Nocturne', icon: 'Music' },
  { id: 'auto', name: 'Automobile', icon: 'Car' },
  { id: 'beauty', name: 'Beauté & Spa', icon: 'Sparkles' },
];

export const businesses = [
  // ===== RESTAURANTS & GASTRONOMIE =====
  {
    id: 1, name: "Chez Loutcha", category: "Restaurants", rating: "4.8", reviews: 245,
    price: "€€", location: "Plateau, Dakar", city: "Dakar",
    address: "101 Rue Moussé Diop, Plateau, Dakar", phone: "+221 33 822 19 05",
    website: "www.chezloutcha.sn", hours: "Lun-Dim 11h-22h", lat: 14.6937, lng: -17.4441,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    description: "Le meilleur Thieboudienne de Dakar dans un cadre authentique depuis 1983.",
    tags: ["Thieboudienne", "Cuisine locale", "Authentique"], featured: true
  },
  {
    id: 2, name: "La Téranga Almadies", category: "Restaurants", rating: "4.6", reviews: 312,
    price: "€€€", location: "Almadies, Dakar", city: "Dakar",
    address: "Rue des Almadies, Dakar", phone: "+221 78 456 78 90",
    website: "www.lateranga-almadies.sn", hours: "Mar-Dim 12h-23h", lat: 14.7350, lng: -17.5200,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    description: "Cuisine sénégalaise raffinée face à l'Atlantique, spécialités de fruits de mer.",
    tags: ["Fruits de mer", "Gastronomie", "Halal"], featured: true
  },
  {
    id: 3, name: "Le Thiossane", category: "Restaurants", rating: "4.5", reviews: 189,
    price: "€€", location: "Point E, Dakar", city: "Dakar",
    address: "Rue 11, Point E, Dakar", phone: "+221 77 234 56 78",
    website: "www.lethiossane.sn", hours: "Lun-Sam 11h-22h", lat: 14.6990, lng: -17.4600,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
    description: "Spécialiste du Yassa poulet et du Mafé, ambiance familiale et conviviale.",
    tags: ["Yassa", "Mafé", "Cuisine locale"], featured: false
  },
  {
    id: 4, name: "Dibiterie du Port", category: "Restaurants", rating: "4.3", reviews: 421,
    price: "€", location: "Plateau, Dakar", city: "Dakar",
    address: "Port de Dakar, Plateau", phone: "+221 33 823 45 67",
    website: "www.dibiterie-port.sn", hours: "Lun-Dim 09h-20h", lat: 14.6728, lng: -17.4300,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    description: "La dibiterie la plus célèbre de Dakar, mouton grillé éclatant et oignons fondants.",
    tags: ["Dibi", "Grilade", "Fast-food"], featured: true
  },
  {
    id: 5, name: "Le Ngor Retreat", category: "Restaurants", rating: "4.7", reviews: 156,
    price: "€€€", location: "Ngor, Dakar", city: "Dakar",
    address: "Plage de Ngor, Dakar", phone: "+221 77 891 23 45",
    website: "www.ngor-retreat.sn", hours: "Mar-Dim 10h-23h", lat: 14.7500, lng: -17.5100,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    description: "Restaurant les pieds dans l'eau sur la plage de Ngor, poissons frais et couchers de soleil.",
    tags: ["Fruits de mer", "Vue mer", "Romantique"], featured: true
  },
  {
    id: 6, name: "L'Escale Saint-Louis", category: "Restaurants", rating: "4.9", reviews: 534,
    price: "€€€", location: "Saint-Louis", city: "Saint-Louis",
    address: "Rue Khalifa Ababacar Sy, Saint-Louis", phone: "+221 33 961 11 22",
    website: "www.escale-saintlouis.sn", hours: "Mar-Dim 11h-22h", lat: 16.0300, lng: -16.5000,
    image: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&q=80&w=800",
    description: "Institution culinaire de Saint-Louis, spécialités de poissons du fleuve Sénégal.",
    tags: ["Poisson", "Gastronomie", "Terrasse"], featured: true
  },
  {
    id: 7, name: "Noflaye Beach", category: "Restaurants", rating: "4.5", reviews: 310,
    price: "€€", location: "Corniche Ouest, Dakar", city: "Dakar",
    address: "Corniche Ouest, Dakar, Sénégal", phone: "+221 33 825 00 00",
    website: "www.noflaye-beach.sn", hours: "Lun-Dim 10h-00h", lat: 14.7001, lng: -17.4735,
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
    description: "Le spot idéal pour déguster des crêpes ou des salades fraîches au bord de l'océan.",
    tags: ["Crêpes", "Vue mer", "Brunch"], featured: false
  },
  {
    id: 8, name: "Le Laguna Beach", category: "Restaurants", rating: "4.4", reviews: 298,
    price: "€€", location: "Somone", city: "La Somone",
    address: "Plage de la Somone", phone: "+221 77 111 22 33",
    website: "www.laguna-beach-somone.sn", hours: "Lun-Dim 11h-23h", lat: 14.4925, lng: -17.0691,
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
    description: "Cuisine internationale et spécialités de langoustes au bord de la lagune.",
    tags: ["Langouste", "Plage", "Cocktails"], featured: true
  },
  {
    id: 9, name: "Djembé Restaurant", category: "Restaurants", rating: "4.6", reviews: 145,
    price: "€€", location: "Saly", city: "Saly",
    address: "Route de Saly, près du centre artisanal", phone: "+221 77 999 88 77",
    website: "www.djembe-saly.sn", hours: "Mar-Dim 12h-22h", lat: 14.4419, lng: -16.9945,
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=800",
    description: "Ambiance typique, saveurs sénégalaises, soirées avec percussions.",
    tags: ["Cuisine locale", "Ambiance", "Musique Live"], featured: false
  },

  // ===== HÔTELS & HÉBERGEMENTS =====
  {
    id: 10, name: "Hôtel Terrou-Bi", category: "Hôtels", rating: "4.8", reviews: 876,
    price: "€€€€", location: "Corniche, Dakar", city: "Dakar",
    address: "Corniche Ouest, Dakar", phone: "+221 33 859 27 00",
    website: "www.terrou-bi.sn", hours: "Ouvert 24h/24", lat: 14.6990, lng: -17.4800,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    description: "Palace 5 étoiles sur la Corniche dakaroise avec piscine panoramique sur l'Atlantique.",
    tags: ["Luxe", "Piscine", "Spa", "Vue mer", "Accès handicapé"], featured: true
  },
  {
    id: 11, name: "Royal Lodge Saly", category: "Hôtels", rating: "4.6", reviews: 423,
    price: "€€€", location: "Saly", city: "Saly",
    address: "Route de la Plage, Saly Portugal", phone: "+221 33 957 22 00",
    website: "www.royallodge-saly.sn", hours: "Ouvert 24h/24", lat: 14.4600, lng: -17.0000,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800",
    description: "Magnifique resort balnéaire à Saly, plage privée, animations et sports nautiques.",
    tags: ["Balnéaire", "Plage privée", "Activités"], featured: true
  },
  {
    id: 12, name: "Le Flamboyant Cap Skirring", category: "Hôtels", rating: "4.9", reviews: 312,
    price: "€€€", location: "Cap Skirring", city: "Cap Skirring",
    address: "Plage de Cap Skirring, Ziguinchor", phone: "+221 77 567 89 12",
    website: "www.flamboyant-cap.sn", hours: "Ouvert 24h/24", lat: 12.3600, lng: -16.7300,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
    description: "Le plus beau resort de Casamance, sur l'une des plus belles plages d'Afrique.",
    tags: ["Casamance", "Plage paradisiaque", "Détente"], featured: true
  },
  {
    id: 13, name: "La Résidence Saint-Louis", category: "Hôtels", rating: "4.5", reviews: 290,
    price: "€€", location: "Île de Saint-Louis", city: "Saint-Louis",
    address: "Rue Blaise Diagne, Saint-Louis", phone: "+221 33 961 12 60",
    website: "www.hotellaresidence.sn", hours: "Ouvert 24h/24", lat: 16.0275, lng: -16.5042,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
    description: "Hôtel de charme colonial situé en plein cœur de l'île historique de Ndar.",
    tags: ["Colonial", "Charme", "Patrimoine"], featured: false
  },
  {
    id: 14, name: "Pullman Dakar Teranga", category: "Hôtels", rating: "4.7", reviews: 1050,
    price: "€€€€", location: "Plateau, Dakar", city: "Dakar",
    address: "Place de L'indépendance, 10 Rue Colbert", phone: "+221 33 889 22 00",
    website: "www.pullman-dakar.com", hours: "Ouvert 24h/24", lat: 14.6672, lng: -17.4300,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800",
    description: "Au cœur du quartier des affaires, hôtel 5 étoiles offrant une vue imprenable sur l'île de Gorée.",
    tags: ["Luxe", "Affaires", "Piscine", "Vue Gorée", "Travail à distance", "Accès handicapé"], featured: true
  },
  {
    id: 15, name: "Campement Keur Saloum", category: "Hôtels", rating: "4.7", reviews: 198,
    price: "€€", location: "Sine Saloum", city: "Sine Saloum",
    address: "Delta du Saloum, Kaolack", phone: "+221 77 123 45 67",
    website: "www.campement-saloum.sn", hours: "Ouvert 24h/24", lat: 14.0000, lng: -16.5000,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    description: "Immersion totale dans la nature du Delta du Saloum, pirogue, oiseaux et mangroves.",
    tags: ["Écotourisme", "Nature", "Pirogue"], featured: false
  },

  // ===== SHOPPING =====
  {
    id: 16, name: "Marché Sandaga", category: "Shopping", rating: "4.2", reviews: 1203,
    price: "€", location: "Plateau, Dakar", city: "Dakar",
    address: "Place de l'Indépendance, Plateau, Dakar", phone: "+221 33 822 00 00",
    website: "www.marche-sandaga.sn", hours: "Lun-Sam 07h-19h", lat: 14.6930, lng: -17.4430,
    image: "https://images.unsplash.com/photo-1687422809617-a7d97879b3b0?auto=format&fit=crop&q=80&w=800",
    description: "Le plus grand marché de Dakar, mille produits africains : tissus wax, épices, artisanat.",
    tags: ["Tissus Wax", "Épices", "Artisanat"], featured: true
  },
  {
    id: 17, name: "Sea Plaza", category: "Shopping", rating: "4.6", reviews: 2045,
    price: "€€€", location: "Corniche Ouest, Dakar", city: "Dakar",
    address: "Corniche Ouest, Fann", phone: "+221 33 859 99 99",
    website: "www.seaplaza.sn", hours: "Lun-Dim 10h-21h", lat: 14.6935, lng: -17.4725,
    image: "https://images.unsplash.com/photo-1519567281727-8ea7363cd44a?auto=format&fit=crop&q=80&w=800",
    description: "Le premier grand centre commercial de Dakar avec boutiques de marques, cinéma et restaurants.",
    tags: ["Centre Commercial", "Cinéma", "Mode", "Accès handicapé"], featured: true
  },
  {
    id: 18, name: "Village Artisanal de Soumbédioune", category: "Shopping", rating: "4.7", reviews: 852,
    price: "€€", location: "Médina, Dakar", city: "Dakar",
    address: "Route de la Corniche Ouest", phone: "+221 33 822 11 00",
    website: "www.soumbedioune.art", hours: "Lun-Dim 09h-19h", lat: 14.6850, lng: -17.4600,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    description: "L'endroit idéal pour acheter des souvenirs : sculptures en bois, travail du cuir, bijoux traditionnels.",
    tags: ["Artisanat", "Sculptures", "Souvenirs"], featured: true
  },
  {
    id: 19, name: "Galerie Arte Africana", category: "Shopping", rating: "4.7", reviews: 345,
    price: "€€€", location: "Plateau, Dakar", city: "Dakar",
    address: "Rue Joseph Gomis, Plateau, Dakar", phone: "+221 77 890 12 34",
    website: "www.arte-africana.sn", hours: "Lun-Sam 09h-19h", lat: 14.6950, lng: -17.4420,
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800",
    description: "Galerie d'art contemporain sénégalais, sculptures, toiles et peintures sous verre.",
    tags: ["Art", "Peintures", "Sculptures"], featured: false
  },
  {
    id: 20, name: "Marché Kermel", category: "Shopping", rating: "4.4", reviews: 620,
    price: "€€", location: "Plateau, Dakar", city: "Dakar",
    address: "Place Kermel, Dakar", phone: "+221 33 823 45 61",
    website: "www.marchekermel.sn", hours: "Lun-Sam 08h-18h", lat: 14.6710, lng: -17.4310,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800",
    description: "Marché coloré à l'architecture coloniale connu pour la fraîcheur de ses produits et l'artisanat.",
    tags: ["Produits Frais", "Architecture", "Artisanat"], featured: false
  },

  // ===== VIE NOCTURNE =====
  {
    id: 21, name: "Just4U Club", category: "Vie Nocturne", rating: "4.5", reviews: 678,
    price: "€€€", location: "Point E, Dakar", city: "Dakar",
    address: "Avenue Cheikh Anta Diop, Dakar", phone: "+221 77 567 89 01",
    website: "www.just4u-dakar.sn", hours: "Ven-Sam 23h-05h", lat: 14.6931, lng: -17.4660,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800",
    description: "Institution pour la musique live à Dakar. Lieu de rencontre autour de l'Afrobeat et du M'balax.",
    tags: ["Afrobeat", "Live Music", "VIP"], featured: true
  },
  {
    id: 22, name: "Sky Bar Radisson", category: "Vie Nocturne", rating: "4.7", reviews: 289,
    price: "€€€€", location: "Almadies, Dakar", city: "Dakar",
    address: "Route de la Corniche Ouest, Radisson Blu", phone: "+221 33 869 39 39",
    website: "www.radisson.com", hours: "Lun-Dim 17h-01h", lat: 14.6920, lng: -17.4700,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    description: "L'un des rooftops les plus élégants de Dakar avec vue magique sur l'océan lors du coucher du soleil.",
    tags: ["Vue panoramique", "Cocktails", "Luxe"], featured: true
  },
  {
    id: 23, name: "Le Phare des Mamelles", category: "Vie Nocturne", rating: "4.6", reviews: 812,
    price: "€€€", location: "Ouakam, Dakar", city: "Dakar",
    address: "Colline des Mamelles", phone: "+221 77 123 44 55",
    website: "www.pharedesmamelles.sn", hours: "Ven-Dim 19h-03h", lat: 14.7228, lng: -17.5188,
    image: "https://images.unsplash.com/photo-1524414621493-7dec026782c3?auto=format&fit=crop&q=80&w=800",
    description: "Ambiance chill la journée, soirées DJ animées sous le fameux phare de Dakar, vue à 360°.",
    tags: ["Rooftop", "DJ", "Vue Océan"], featured: true
  },
  {
    id: 24, name: "Le Calbar", category: "Vie Nocturne", rating: "4.3", reviews: 345,
    price: "€€", location: "Plateau, Dakar", city: "Dakar",
    address: "Rue Assane Ndoye, Plateau, Dakar", phone: "+221 78 456 78 92",
    website: "www.lecalbar.sn", hours: "Mar-Dim 18h-02h", lat: 14.6910, lng: -17.4450,
    image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=80&w=800",
    description: "Bar-restaurant branché du centre-ville, cocktails créatifs et concerts live le week-end.",
    tags: ["Live music", "Cocktails", "Lounge"], featured: false
  },

  // ===== AUTOMOBILE =====
  {
    id: 25, name: "Garage Terranga Auto", category: "Automobile", rating: "4.4", reviews: 312,
    price: "€€", location: "Pikine, Dakar", city: "Dakar",
    address: "Route de Rufisque, Pikine, Dakar", phone: "+221 77 456 78 90",
    website: "www.terranga-auto.sn", hours: "Lun-Sam 08h-18h", lat: 14.7520, lng: -17.4030,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
    description: "Garage de confiance pour l'entretien de toutes marques, devis transparent et rapide.",
    tags: ["Réparation", "Entretien", "Toutes marques"], featured: true
  },
  {
    id: 26, name: "Senegal Rent a Car", category: "Automobile", rating: "4.8", reviews: 410,
    price: "€€€", location: "AIBD, Diass", city: "Diass",
    address: "Aéroport International Blaise Diagne", phone: "+221 33 555 66 77",
    website: "www.senegalrent.sn", hours: "Ouvert 24h/24", lat: 14.6714, lng: -17.0733,
    image: "https://images.unsplash.com/photo-1562243061-204550d8a2c9?auto=format&fit=crop&q=80&w=800",
    description: "Location de véhicules 4x4 et berlines haut de gamme directement à l'aéroport.",
    tags: ["Location", "4x4", "Aéroport"], featured: true
  },
  {
    id: 27, name: "Lavage Express VIP", category: "Automobile", rating: "4.2", reviews: 189,
    price: "€", location: "Sacré-Cœur, Dakar", city: "Dakar",
    address: "VDN, Sacré-Cœur, Dakar", phone: "+221 78 890 12 34",
    website: "www.lavage-vip.sn", hours: "Lun-Sam 07h-19h", lat: 14.7220, lng: -17.4640,
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800",
    description: "Station de lavage à haute pression, intérieur et extérieur, résultat garanti.",
    tags: ["Lavage", "Rapide", "Propre"], featured: false
  },

  // ===== BEAUTÉ & SPA =====
  {
    id: 28, name: "Buddha Bleu Spa", category: "Beauté & Spa", rating: "4.9", reviews: 398,
    price: "€€€", location: "Saly", city: "Saly",
    address: "Route de l'Hôtel Safari, Saly", phone: "+221 78 456 78 91",
    website: "www.buddha-bleu-spa.sn", hours: "Lun-Dim 09h-20h", lat: 14.4400, lng: -16.9950,
    image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&q=80&w=800",
    description: "Un havre de paix avec des massages orientaux et sénégalais à base d'huiles artisanales de Baobab.",
    tags: ["Massage", "Détente", "Spa de luxe"], featured: true
  },
  {
    id: 29, name: "Salon Lara Beauté", category: "Beauté & Spa", rating: "4.8", reviews: 534,
    price: "€€", location: "Almadies, Dakar", city: "Dakar",
    address: "Route des Almadies, Dakar", phone: "+221 77 345 67 89",
    website: "www.lara-beaute.sn", hours: "Mar-Sam 09h-19h", lat: 14.7370, lng: -17.5160,
    image: "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?auto=format&fit=crop&q=80&w=800",
    description: "Salon haut de gamme spécialisé en tresses africaines, box braids et twists.",
    tags: ["Tresses", "Box braids", "Coiffure"], featured: true
  },
  {
    id: 30, name: "Barber King Senegal", category: "Beauté & Spa", rating: "4.7", reviews: 456,
    price: "€", location: "HLM, Dakar", city: "Dakar",
    address: "Village des Arts, HLM, Dakar", phone: "+221 78 789 01 23",
    website: "www.barber-king.sn", hours: "Lun-Sam 08h-20h", lat: 14.7040, lng: -17.4500,
    image: "https://images.unsplash.com/photo-1590540179852-2110a54f813a?auto=format&fit=crop&q=80&w=800",
    description: "Barbershop lifestyle, dégradés afro ultra nets, soins de barbe et styling.",
    tags: ["Dégradé", "Barbe", "Homme"], featured: true
  },
  {
    id: 31, name: "Cosmétiques Teranga", category: "Beauté & Spa", rating: "4.5", reviews: 245,
    price: "€€", location: "Médina, Dakar", city: "Dakar",
    address: "Rue 15, Médina, Dakar", phone: "+221 76 567 89 01",
    website: "www.cosmetiques-teranga.sn", hours: "Lun-Sam 09h-18h", lat: 14.6870, lng: -17.4560,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800",
    description: "Savons naturels, shea butter, encens thiouraye, cosmétiques artisanaux locaux.",
    tags: ["Naturel", "Artisanat", "Soins"], featured: false
  },

  // ===== NEW ADDS (EXTENDED "CRAWL" COVERAGE) =====
  {
    id: 32, name: "La Cabane du Surfeur", category: "Restaurants", rating: "4.6", reviews: 520,
    price: "€€", location: "Almadies, Dakar", city: "Dakar",
    address: "Pointe des Almadies", phone: "+221 77 111 00 00",
    website: "www.cabanedusurfeur.sn", hours: "Ouvert tous les jours", lat: 14.7431, lng: -17.5284,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    description: "Ambiance surfer face à l'océan, pizzas au feu de bois et planches de tapas.",
    tags: ["Surf", "Tapas", "Pizza"], featured: true
  },
  {
    id: 33, name: "Hôtel Djoloff", category: "Hôtels", rating: "4.5", reviews: 412,
    price: "€€€", location: "Fann Hock, Dakar", city: "Dakar",
    address: "7 Rue Niox", phone: "+221 33 889 36 30",
    website: "www.hoteldjoloff.com", hours: "24h/24", lat: 14.6875, lng: -17.4690,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
    description: "Magnifique hôtel boutique avec vue sur l'océan et un toit-terrasse très réputé pour ses brunchs.",
    tags: ["Boutique Hôtel", "Brunch", "Rooftop", "Travail à distance"], featured: true
  },
  {
    id: 34, name: "Black & White Saly", category: "Vie Nocturne", rating: "4.2", reviews: 189,
    price: "€€€", location: "Saly", city: "Saly",
    address: "Centre commercial Saly Center", phone: "+221 77 888 77 66",
    website: "www.bw-saly.sn", hours: "Jeu-Dim 23h-05h", lat: 14.4370, lng: -16.9935,
    image: "https://images.unsplash.com/photo-1524414621493-7dec026782c3?auto=format&fit=crop&q=80&w=800",
    description: "La plus grande discothèque de la Petite Côte. Ambiance électrique, clientèle jeune et variée.",
    tags: ["Club", "Saly", "Danser"], featured: false
  },
  {
    id: 35, name: "Le Ndar Ndar Music Café", category: "Vie Nocturne", rating: "4.8", reviews: 231,
    price: "€€", location: "Saint-Louis", city: "Saint-Louis",
    address: "Rue Blaise Diagne, Saint-Louis", phone: "+221 33 961 00 00",
    website: "www.ndarndarmusic.sn", hours: "Mer-Dim 18h-02h", lat: 16.0289, lng: -16.5030,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800",
    description: "Un café musical incontournable lors du Festival de Jazz. Excellente musique sénégalaise en live.",
    tags: ["Jazz", "Café Musical", "Culture"], featured: true
  },
  {
    id: 36, name: "L'Océan Cap Skirring", category: "Restaurants", rating: "4.7", reviews: 300,
    price: "€€€", location: "Plage", city: "Cap Skirring",
    address: "Plage de Kabrousse", phone: "+221 77 222 33 44",
    website: "www.ocean-cap.sn", hours: "Tous les jours 12h-22h", lat: 12.3500, lng: -16.7400,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    description: "Les meilleurs fruits de mer de Casamance. Gambas, crevettes et huîtres fraîches.",
    tags: ["Casamance", "Fruits de Mer", "Pieds dans le sable"], featured: true
  },
  {
    id: 37, name: "Saly Safari Tours", category: "Automobile", rating: "4.9", reviews: 85,
    price: "€€€", location: "Saly", city: "Saly",
    address: "Avenue principale, Saly", phone: "+221 77 555 44 22",
    website: "www.salysafaritours.sn", hours: "08h-18h", lat: 14.4402, lng: -16.9902,
    image: "https://images.unsplash.com/photo-1562243061-204550d8a2c9?auto=format&fit=crop&q=80&w=800",
    description: "Location de Buggys, Quads et véhicules préparés pour visiter la réserve de Bandia et la savane.",
    tags: ["Buggy", "Quad", "Safari"], featured: true
  },
  {
    id: 38, name: "Marché de Touba", category: "Shopping", rating: "4.5", reviews: 1020,
    price: "€", location: "Touba", city: "Touba",
    address: "Près de la Grande Mosquée", phone: "+221 77 000 00 00",
    website: "www.marchetouba.sn", hours: "Toute la journée", lat: 14.8643, lng: -15.8767,
    image: "https://images.unsplash.com/photo-1687422809617-a7d97879b3b0?auto=format&fit=crop&q=80&w=800",
    description: "Le marché traditionnel bouillonnant d'activité de la ville sainte. Livres, tissus, tapis naturels.",
    tags: ["Traditionnel", "Tissus", "Marché ouvert"], featured: false
  },
  {
    id: 39, name: "Radisson Blu Dakar", category: "Hôtels", rating: "4.8", reviews: 1400,
    price: "€€€€", location: "Corniche", city: "Dakar",
    address: "Route de la Corniche ouest", phone: "+221 33 869 33 33",
    website: "www.radisson.com/dakar", hours: "24h/24", lat: 14.6925, lng: -17.4715,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    description: "Un complexe majestueux proposant des chambres modernes, une immense piscine à débordement et plusieurs restaurants de renommée mondiale.",
    tags: ["5 étoiles", "Piscine", "Affaires", "Travail à distance", "Accès handicapé"], featured: true
  },
  {
    id: 40, name: "Spa Maison de l'Océan", category: "Beauté & Spa", rating: "4.6", reviews: 215,
    price: "€€€", location: "Les Almadies", city: "Dakar",
    address: "Route de la pointe, Almadies", phone: "+221 77 123 78 78",
    website: "www.spa-ocean-dakar.sn", hours: "Mar-Dim 10h-20h", lat: 14.7350, lng: -17.5250,
    image: "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?auto=format&fit=crop&q=80&w=800",
    description: "Thalassothérapie, gommages exclusifs au sel rose du Lac Retba et hammam marocain.",
    tags: ["Hammam", "Thalasso", "Luxe"], featured: true
  },
  // === DONNÉES SPREADSHEETS (RÉPERTOIRES OFFICIELS 2025) ===
  {
    id: 41, name: "Noom Hotel Dakar Sea Plaza", category: "Hôtels", rating: "4.3", reviews: 520,
    price: "180 000 - 400 000 FCFA", location: "Dakar - Fann Rés.", city: "Dakar",
    address: "Rte de la Corniche Ouest", phone: "+221 33 000 00 00",
    website: "www.noomhotels.com", hours: "24h/24", lat: 14.6951, lng: -17.4736,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
    description: "Hôtel 5★ Luxe. Piscine, restaurants, bar rooftop, vue océan Atlantique.",
    tags: ["Luxe", "Piscine", "Rooftop", "Travail à distance", "Accès handicapé", "Coworking"], featured: true
  },
  {
    id: 42, name: "Azalaï Hôtel Dakar", category: "Hôtels", rating: "4.6", reviews: 210,
    price: "80 000 - 180 000 FCFA", location: "Dakar - Plateau", city: "Dakar",
    address: "Rue Victor Hugo", phone: "+221 33 000 00 01",
    website: "www.azalai.com", hours: "24h/24", lat: 14.6751, lng: -17.4693,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    description: "Hôtel 4★ Supérieur. Piscine, restaurant, salle de conférence, bar.",
    tags: ["Affaires", "Piscine", "Conférence", "Travail à distance", "Accès handicapé"], featured: false
  },
  {
    id: 43, name: "Novotel Dakar", category: "Hôtels", rating: "4.4", reviews: 450,
    price: "90 000 - 200 000 FCFA", location: "Dakar - Plateau", city: "Dakar",
    address: "Av. Abdoulaye Fadiga, BP 2073", phone: "+221 33 000 00 02",
    website: "www.all.accor.com", hours: "24h/24", lat: 14.6687, lng: -17.4268,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800",
    description: "Hôtel 4★ Chaîne. Piscine, restaurant buffet, bar, salle de sport.",
    tags: ["Chaîne", "Piscine", "Plateau"], featured: false
  },
  {
    id: 44, name: "Yaas Hotel Dakar Almadies", category: "Hôtels", rating: "4.0", reviews: 120,
    price: "50 000 - 100 000 FCFA", location: "Dakar - Almadies", city: "Dakar",
    address: "Route des Almadies", phone: "+221 33 000 00 03",
    website: "www.yaashotels.com", hours: "24h/24", lat: 14.7426, lng: -17.5203,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
    description: "Hôtel 3★ Moderne. Petit-déjeuner inclus, restaurant, quartier animé.",
    tags: ["Moderne", "Almadies", "Budget"], featured: false
  },
  {
    id: 45, name: "Casino du Cap Vert", category: "Hôtels", rating: "4.0", reviews: 340,
    price: "80 000 - 180 000 FCFA", location: "Dakar - Ngor", city: "Dakar",
    address: "Route de Ngor, Cité Cosepi", phone: "+221 33 000 00 04",
    website: "www.casinocapvert.sn", hours: "24h/24", lat: 14.7511, lng: -17.5027,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800",
    description: "Hôtel-Casino 4★. Casino, restaurant, piscine, navette aéroport, jardin.",
    tags: ["Casino", "Loisirs", "Jardin"], featured: true
  },
  {
    id: 46, name: "Dakar International House", category: "Hôtels", rating: "3.6", reviews: 85,
    price: "8 000 - 25 000 FCFA", location: "Dakar - Pikine", city: "Dakar",
    address: "Cité Kheur Khadim 164, Scat Urbam", phone: "+221 33 000 00 05",
    website: "www.dakarhostel.com", hours: "24h/24", lat: 14.7381, lng: -17.4605,
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
    description: "Auberge / Hostel. Dortoirs & chambres privées, terrasse, sécurité 24h.",
    tags: ["Hostel", "Économique", "Voyageur"], featured: false
  },
  {
    id: 47, name: "Nyéléni Maison Sahel", category: "Hôtels", rating: "4.6", reviews: 45,
    price: "60 000 - 120 000 FCFA", location: "Dakar - Ngor", city: "Dakar",
    address: "27 Rue YF 109", phone: "+221 33 000 00 06",
    website: "www.nyelenimaisonsahel.sn", hours: "24h/24", lat: 14.7604, lng: -17.4843,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    description: "Maison d'hotes 4★. Vue mer, art africain, piscine, ambiance intime, WiFi.",
    tags: ["Maison d'Hôtes", "Art", "Intime"], featured: true
  },
  {
    id: 48, name: "Auberge Keur Diame", category: "Hôtels", rating: "4.4", reviews: 52,
    price: "25 000 - 50 000 FCFA", location: "Dakar - Sicap", city: "Dakar",
    address: "Cité Djily Mbaye 265C", phone: "+221 33 000 00 07",
    website: "www.keurdiame.sn", hours: "24h/24", lat: 14.7626, lng: -17.4572,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    description: "Auberge 3★. Vue océan, plage à 3 min, décor africain, terrasse.",
    tags: ["Auberge", "Plage", "Vue Océan"], featured: false
  },
  {
    id: 49, name: "Auberge du Plateau", category: "Hôtels", rating: "3.7", reviews: 94,
    price: "20.000 - 45.000 FCFA", location: "Dakar - Plateau", city: "Dakar",
    address: "89 Rue Amadou Assane Ndoye", phone: "+221 33 000 00 08",
    website: "www.aubergeplateau.sn", hours: "8h-23h", lat: 14.6682, lng: -17.4377,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
    description: "Auberge 2★. Centre-ville, appartements meublés, mensuel possible.",
    tags: ["Centre-ville", "Appartement"], featured: false
  },
  {
    id: 50, name: "Auberge Keurmariguen", category: "Hôtels", rating: "4.2", reviews: 65,
    price: "30 000 - 70 000 FCFA", location: "Somone", city: "La Somone",
    address: "Rue de la Gendarmerie", phone: "+221 33 000 00 09",
    website: "www.keurmariguen.sn", hours: "24h/24", lat: 14.4834, lng: -17.0778,
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
    description: "Auberge 3★ Plage. 50m de la plage, piscine, restaurant, chiens accueil.",
    tags: ["Somone", "Plage", "Piscine"], featured: false
  },
  {
    id: 51, name: "Auberge Plein Soleil", category: "Hôtels", rating: "4.4", reviews: 48,
    price: "20.000 - 45.000 FCFA", location: "Mbodiène", city: "Mbodiène",
    address: "64MG+W56, Mbodiène", phone: "+221 33 000 00 10",
    website: "www.pleinsoleil.sn", hours: "24h/24", lat: 14.2348, lng: -16.8746,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
    description: "Auberge Écologique. Lagune, piscine, cases, jardin tropical, restaurant.",
    tags: ["Écologie", "Lagune", "Nature"], featured: true
  },
  {
    id: 52, name: "Auberge Africa Thiossane", category: "Hôtels", rating: "3.7", reviews: 82,
    price: "35.000 - 80.000 FCFA", location: "Saly Niakh Niakhal", city: "Saly",
    address: "Villa 1531, Saly", phone: "+221 33 000 00 11",
    website: "www.africathiossane.sn", hours: "24h/24", lat: 14.4271, lng: -16.9919,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800",
    description: "Auberge 3★ Balnéaire. 7 min de la mer, jardin, restaurant, hub culturel.",
    tags: ["Culture", "Saly", "Jardin"], featured: false
  },
  {
    id: 53, name: "Auberge KEUR SHASHA", category: "Hôtels", rating: "4.3", reviews: 76,
    price: "25 000 - 55 000 FCFA", location: "M'bour", city: "M'bour",
    address: "M'bour, Petite Côte", phone: "+221 33 000 00 12",
    website: "www.keurshasha.sn", hours: "24h/24", lat: 14.4228, lng: -16.9923,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800",
    description: "Auberge Plage 3★. Sur la plage, ambiance familiale, service chaleureux.",
    tags: ["Plage", "Mbour", "Familial"], featured: false
  },
  {
    id: 54, name: "Auberge Kayokulo", category: "Hôtels", rating: "4.0", reviews: 31,
    price: "15 000 - 35 000 FCFA", location: "Bignona (Casamance)", city: "Bignona",
    address: "Quartier Château d'Eau, Bignona", phone: "+221 33 000 00 13",
    website: "www.kayokulo.sn", hours: "24h/24", lat: 12.8085, lng: -16.2284,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    description: "Auberge 3★. Climatisé, moustiquaires, TV, frigo, WiFi, jardin.",
    tags: ["Casamance", "Confort", "Jardin"], featured: true
  },
  {
    id: 55, name: "Auberge de la Cité", category: "Hôtels", rating: "3.4", reviews: 25,
    price: "12 000 - 25 000 FCFA", location: "Richard Toll (Nord)", city: "Richard Toll",
    address: "Launga-Richard Toll Road", phone: "+221 33 000 00 14",
    website: "www.aubergedelacite.sn", hours: "8h-22h", lat: 16.4682, lng: -15.7040,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
    description: "Auberge 2★. Design artistique, chambres simples, accueil sympathique.",
    tags: ["Nord", "Simple", "Artistique"], featured: false
  },
  {
    id: 56, name: "Restaurant Le Lagon 1", category: "Restaurants", rating: "4.4", reviews: 520,
    price: "15 000 - 40 000 FCFA", location: "Dakar - Plateau", city: "Dakar",
    address: "MH9C+3H9, Corniche Ouest", phone: "+221 33 000 10 01",
    website: "www.lelagon.sn", hours: "9h00 - 00h00", lat: 14.6677, lng: -17.4285,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    description: "Fruits de mer / Gastronomique. Référence marine à Dakar.",
    tags: ["Gastronomie", "Mer", "Prestige"], featured: true
  },
  {
    id: 57, name: "Restaurant La Terrasse", category: "Restaurants", rating: "4.3", reviews: 310,
    price: "12 000 - 35 000 FCFA", location: "Dakar - Corniche", city: "Dakar",
    address: "Bvd M.L. King, Rte Corniche Ouest", phone: "+221 33 000 10 02",
    website: "www.laterrasse.sn", hours: "12h00 - 23h30", lat: 14.6764, lng: -17.4662,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    description: "Internationale / Vue mer. Terrasse surplombant l'océan.",
    tags: ["Vue mer", "Cosmopolite", "Terrasse"], featured: false
  },
  {
    id: 58, name: "Restaurant Le Carré Dakar", category: "Restaurants", rating: "4.0", reviews: 290,
    price: "8 000 - 25 000 FCFA", location: "Dakar - Almadies", city: "Dakar",
    address: "Cor des Almadies", phone: "+221 33 000 10 03",
    website: "www.lecarre.sn", hours: "11h-01h / 11h-03h WE", lat: 14.7410, lng: -17.5225,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    description: "Fusion / Bar & Brunch. Cuisine moderne et festive.",
    tags: ["Fusion", "Brunch", "Festif"], featured: true
  },
  {
    id: 59, name: "La Pointe des Almadies", category: "Restaurants", rating: "4.0", reviews: 360,
    price: "6 000 - 20 000 FCFA", location: "Dakar - Almadies", city: "Dakar",
    address: "Phare Pointe des Almadies", phone: "+221 33 000 10 04",
    website: "www.lapointe.sn", hours: "12h-00h / 10h30-01h WE", lat: 14.7455, lng: -17.5281,
    image: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&q=80&w=800",
    description: "Sénégalaise & Fruits de mer. Incontournable à la pointe ouest.",
    tags: ["Locale", "Pointe", "Authentique"], featured: false
  },
  {
    id: 60, name: "La Cabane du Pêcheur", category: "Restaurants", rating: "4.2", reviews: 410,
    price: "5 000 - 18 000 FCFA", location: "Dakar - Ngor", city: "Dakar",
    address: "Ndeureuhnou, Almadies", phone: "+221 33 000 10 05",
    website: "www.cabanedupecheur.sn", hours: "8h-23h", lat: 14.7498, lng: -17.5112,
    image: "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?auto=format&fit=crop&q=80&w=800",
    description: "Fruits de mer / Beach bar. Ambiance décontractée les pieds dans l'eau.",
    tags: ["Plage", "Ngor", "Détente"], featured: true
  },
  {
    id: 61, name: "Grill Time Dakar", category: "Restaurants", rating: "4.5", reviews: 88,
    price: "8 000 - 25 000 FCFA", location: "Dakar - Liberté", city: "Dakar",
    address: "Voie de dégagement N", phone: "+221 33 000 10 06",
    website: "www.grilltime.sn", hours: "12h - 02h00", lat: 14.7161, lng: -17.4708,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    description: "Grill / Steakhouse. Spécialités de viandes grillées.",
    tags: ["Grillade", "Steakhouse", "Viande"], featured: false
  },
  {
    id: 62, name: "Le Cabanon Dakar", category: "Restaurants", rating: "4.1", reviews: 140,
    price: "8 000 - 22 000 FCFA", location: "Dakar - Almadies", city: "Dakar",
    address: "Cor des Almadies, Rocca Marina", phone: "+221 33 000 10 07",
    website: "www.cabanon.sn", hours: "12h-23h30", lat: 14.7391, lng: -17.5170,
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
    description: "Méditerranéenne / Vue surfeurs. Cuisine fraîche face aux vagues.",
    tags: ["Surf", "Méditerranée", "Almadies"], featured: false
  },
  {
    id: 63, name: "La Pampa", category: "Restaurants", rating: "4.1", reviews: 95,
    price: "10 000 - 28 000 FCFA", location: "Dakar - Plateau", city: "Dakar",
    address: "28 Av. Hassan II", phone: "+221 33 000 10 08",
    website: "www.lapampa.sn", hours: "7h - 23h", lat: 14.6697, lng: -17.4303,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    description: "Argentine / Steakhouse. Le goût du boeuf argentin.",
    tags: ["Argentine", "Steak", "Plateau"], featured: false
  },
  {
    id: 64, name: "Chez Fatou", category: "Restaurants", rating: "4.0", reviews: 305,
    price: "5 000 - 18 000 FCFA", location: "Dakar - Almadies", city: "Dakar",
    address: "Almadies, face océan", phone: "+221 33 000 10 09",
    website: "www.chezfatou.sn", hours: "8h30 - 00h00", lat: 14.7409, lng: -17.5214,
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
    description: "Sénégalaise / Fruits de mer. Terrasse iconique des Almadies.",
    tags: ["Mer", "Almadies", "Incontournable"], featured: true
  },
  {
    id: 65, name: "Auchan Hypermarché Mermoz", category: "Shopping", rating: "4.2", reviews: 850,
    price: "Prix fixes", location: "Dakar - Mermoz", city: "Dakar",
    address: "Ancienne Piste, voies de l'Alternance", phone: "+221 33 000 20 01",
    website: "www.auchan.sn", hours: "8h00 - 00h00", lat: 14.7117, lng: -17.4762,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800",
    description: "Hypermarché (chaîne française). Large choix de produits.",
    tags: ["Supermarché", "Alimentation", "Mermoz"], featured: false
  },
  {
    id: 66, name: "Auchan Sacré-Cœur", category: "Shopping", rating: "3.9", reviews: 620,
    price: "Prix fixes", location: "Dakar - Sacré-Cœur", city: "Dakar",
    address: "N°3, Sacré-Cœur, Dakar", phone: "+221 33 000 20 02",
    website: "www.auchan.sn", hours: "8h00 - 00h00", lat: 14.7196, lng: -17.4660,
    image: "https://images.unsplash.com/photo-1687422809617-a7d97879b3b0?auto=format&fit=crop&q=80&w=800",
    description: "Supermarché / Hypermarché. Pratique et accessible.",
    tags: ["Supermarché", "Pratique", "Dakar"], featured: false
  },
  {
    id: 67, name: "Numero Uno", category: "Shopping", rating: "3.8", reviews: 410,
    price: "Varié", location: "Dakar - Parcelles", city: "Dakar",
    address: "PGPP+VGP, Dakar", phone: "+221 33 000 20 03",
    website: "www.numerouno.sn", hours: "9h30-21h30", lat: 14.7372, lng: -17.4637,
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800",
    description: "Centre commercial Vêtements. Marques internationales.",
    tags: ["Habillement", "Vêtements", "Shopping"], featured: false
  },
  {
    id: 68, name: "China Mall", category: "Shopping", rating: "3.8", reviews: 530,
    price: "Varié", location: "Dakar - Liberté", city: "Dakar",
    address: "Rue MZ 77, Liberté 5", phone: "+221 33 000 20 04",
    website: "N/A", hours: "9h00 - 20h00", lat: 14.7046, lng: -17.4754,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    description: "Magasin multirayons / Import. Tout pour la maison.",
    tags: ["Maison", "Import", "Divers"], featured: false
  },
  {
    id: 69, name: "Marché Tilène (HLM)", category: "Shopping", rating: "3.8", reviews: 2100,
    price: "Négociable", location: "Dakar - HLM", city: "Dakar",
    address: "Avenue Cheikh Anta Diop, HLM", phone: "N/A",
    website: "N/A", hours: "7h30 - 19h30", lat: 14.7132, lng: -17.4483,
    image: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?auto=format&fit=crop&q=80&w=800",
    description: "Marché tissu / prêt-à-porter. La référence pour le Wax.",
    tags: ["Marché", "Tissu", "HLM"], featured: false
  },
  {
    id: 70, name: "Carrefour Market Liberté 6", category: "Shopping", rating: "4.0", reviews: 420,
    price: "Prix fixes", location: "Dakar - Liberté 6", city: "Dakar",
    address: "VDN, Liberté 6", phone: "+221 33 000 20 05",
    website: "www.carrefour.sn", hours: "8h30 - 22h00", lat: 14.7320, lng: -17.4570,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800",
    description: "Supermarché (chaîne française). Pratique pour les courses.",
    tags: ["Supermarché", "Alimentation", "Liberté 6"], featured: false
  },
  {
    id: 71, name: "Casino Supermarché Almadies", category: "Shopping", rating: "4.1", reviews: 580,
    price: "Prix fixes", location: "Dakar - Almadies", city: "Dakar",
    address: "Route des Almadies", phone: "+221 33 000 20 06",
    website: "www.casinosupermarches.sn", hours: "8h00 - 22h00", lat: 14.7420, lng: -17.5100,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    description: "Supermarché (chaîne française). Large assortiment.",
    tags: ["Supermarché", "Almadies", "Qualité"], featured: false
  },
  {
    id: 72, name: "Marché Saint-Louis (Grand Marché)", category: "Shopping", rating: "3.7", reviews: 950,
    price: "Négociable", location: "Saint-Louis", city: "Saint-Louis",
    address: "Centre-ville Saint-Louis", phone: "N/A",
    website: "N/A", hours: "7h00 - 19h00", lat: 16.0271, lng: -16.4888,
    image: "https://images.unsplash.com/photo-1687422809617-a7d97879b3b0?auto=format&fit=crop&q=80&w=800",
    description: "Marché historique polyvalent. Couleurs et saveurs du Nord.",
    tags: ["Marché", "Nord", "Authentique"], featured: false
  },
  {
    id: 73, name: "Marché Central de Ziguinchor", category: "Shopping", rating: "3.8", reviews: 1100,
    price: "Négociable", location: "Ziguinchor", city: "Ziguinchor",
    address: "Centre-ville Ziguinchor", phone: "N/A",
    website: "N/A", hours: "7h00 - 18h00", lat: 12.5680, lng: -16.2729,
    image: "https://images.unsplash.com/photo-1687422809617-a7d97879b3b0?auto=format&fit=crop&q=80&w=800",
    description: "Marché alimentaire & textile. Le coeur de la Casamance.",
    tags: ["Marché", "Casamance", "Local"], featured: false
  }
];

export const cities = Array.from(new Set(businesses.map(b => b.city))).sort();
