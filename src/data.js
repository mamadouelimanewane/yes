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
    tags: ["Luxe", "Piscine", "Spa", "Vue mer"], featured: true
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
    tags: ["Luxe", "Affaires", "Piscine", "Vue Gorée"], featured: true
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
    tags: ["Centre Commercial", "Cinéma", "Mode"], featured: true
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
    tags: ["Boutique Hôtel", "Brunch", "Rooftop"], featured: true
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
    tags: ["5 étoiles", "Piscine", "Affaires"], featured: true
  },
  {
    id: 40, name: "Spa Maison de l'Océan", category: "Beauté & Spa", rating: "4.6", reviews: 215,
    price: "€€€", location: "Les Almadies", city: "Dakar",
    address: "Route de la pointe, Almadies", phone: "+221 77 123 78 78",
    website: "www.spa-ocean-dakar.sn", hours: "Mar-Dim 10h-20h", lat: 14.7350, lng: -17.5250,
    image: "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?auto=format&fit=crop&q=80&w=800",
    description: "Thalassothérapie, gommages exclusifs au sel rose du Lac Retba et hammam marocain.",
    tags: ["Hammam", "Thalasso", "Luxe"], featured: true
  }
];

export const cities = Array.from(new Set(businesses.map(b => b.city))).sort();
