export const categories = [
  { id: 'rest', name: 'Restaurants', icon: 'Utensils' },
  { id: 'hotel', name: 'Hôtels', icon: 'Hotel' },
  { id: 'shop', name: 'Shopping', icon: 'ShoppingBag' },
  { id: 'night', name: 'Vie Nocturne', icon: 'Music' },
  { id: 'auto', name: 'Automobile', icon: 'Car' },
  { id: 'beauty', name: 'Beauté & Spa', icon: 'Sparkles' },
];

export const businesses = [
  // ===== RESTAURANTS (8 images uniques) =====
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
    id: 6, name: "Saveurs de Médina", category: "Restaurants", rating: "4.1", reviews: 98,
    price: "€", location: "Médina, Dakar", city: "Dakar",
    address: "Rue 10, Médina, Dakar", phone: "+221 78 567 89 01",
    website: "www.saveurs-medina.sn", hours: "Lun-Dim 08h-21h", lat: 14.6890, lng: -17.4530,
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&q=80&w=800",
    description: "Cuisine de rue authentique au cœur de la Médina, saveurs populaires et généreuses.",
    tags: ["Street food", "Halal", "Économique"], featured: false
  },
  {
    id: 7, name: "L'Escale Saint-Louis", category: "Restaurants", rating: "4.9", reviews: 534,
    price: "€€€", location: "Saint-Louis", city: "Saint-Louis",
    address: "Rue Khalifa Ababacar Sy, Saint-Louis", phone: "+221 33 961 11 22",
    website: "www.escale-saintlouis.sn", hours: "Mar-Dim 11h-22h", lat: 16.0300, lng: -16.5000,
    image: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&q=80&w=800",
    description: "Institution culinaire de Saint-Louis, spécialités de poissons du fleuve Sénégal.",
    tags: ["Poisson", "Gastronomie", "Terrasse"], featured: true
  },
  {
    id: 8, name: "Maquis Yoff Beach", category: "Restaurants", rating: "4.0", reviews: 234,
    price: "€€", location: "Yoff, Dakar", city: "Dakar",
    address: "Plage de Yoff, Dakar", phone: "+221 76 345 67 89",
    website: "www.maquis-yoff.sn", hours: "Lun-Dim 10h-23h", lat: 14.7800, lng: -17.4700,
    image: "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?auto=format&fit=crop&q=80&w=800",
    description: "Maquis de plage animé, grillades de barracuda et thiof frais directement du filet.",
    tags: ["Poisson grillé", "Plage", "Décontracté"], featured: false
  },

  // ===== HÔTELS (6 images uniques) =====
  {
    id: 9, name: "Hôtel Terrou-Bi", category: "Hôtels", rating: "4.8", reviews: 876,
    price: "€€€€", location: "Corniche, Dakar", city: "Dakar",
    address: "Corniche Ouest, Dakar", phone: "+221 33 859 27 00",
    website: "www.terrou-bi.sn", hours: "Ouvert 24h/24", lat: 14.6990, lng: -17.4800,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    description: "Palace 5 étoiles sur la Corniche dakaroise avec piscine panoramique sur l'Atlantique.",
    tags: ["Luxe", "Piscine", "Spa", "Vue mer"], featured: true
  },
  {
    id: 10, name: "Royal Lodge Saly", category: "Hôtels", rating: "4.6", reviews: 423,
    price: "€€€", location: "Saly, Mbour", city: "Saly",
    address: "Route de la Plage, Saly Portugal", phone: "+221 33 957 22 00",
    website: "www.royallodge-saly.sn", hours: "Ouvert 24h/24", lat: 14.4600, lng: -17.0000,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800",
    description: "Magnifique resort balnéaire à Saly, plage privée, animations et sports nautiques.",
    tags: ["Balnéaire", "Plage privée", "Activités"], featured: true
  },
  {
    id: 11, name: "Campement Keur Saloum", category: "Hôtels", rating: "4.7", reviews: 198,
    price: "€€", location: "Sine Saloum", city: "Sine Saloum",
    address: "Delta du Saloum, Kaolack", phone: "+221 77 123 45 67",
    website: "www.campement-saloum.sn", hours: "Ouvert 24h/24", lat: 14.0000, lng: -16.5000,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
    description: "Immersion totale dans la nature du Delta du Saloum, pirogue, oiseaux et mangroves.",
    tags: ["Écotourisme", "Nature", "Pirogue"], featured: false
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
    id: 13, name: "Villa Marguerite Dakar", category: "Hôtels", rating: "4.4", reviews: 145,
    price: "€€€", location: "Mermoz, Dakar", city: "Dakar",
    address: "Rue Aimé Césaire, Mermoz, Dakar", phone: "+221 33 860 01 02",
    website: "www.villamarguerite.sn", hours: "Ouvert 24h/24", lat: 14.7100, lng: -17.4800,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800",
    description: "Hôtel boutique de charme dans une ancienne villa coloniale rénovée avec goût.",
    tags: ["Boutique", "Charme", "Calme"], featured: false
  },
  {
    id: 14, name: "Auberge Casamance", category: "Hôtels", rating: "4.3", reviews: 267,
    price: "€€", location: "Ziguinchor", city: "Ziguinchor",
    address: "Quartier Boucotte, Ziguinchor", phone: "+221 33 991 12 23",
    website: "www.auberge-casamance.sn", hours: "Ouvert 24h/24", lat: 12.5600, lng: -16.2700,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    description: "Auberge de charme au cœur de la Casamance verte, accueil chaleureux et cuisine locale.",
    tags: ["Abordable", "Confort", "Wifi"], featured: false
  },

  // ===== SHOPPING (6 images uniques) =====
  {
    id: 15, name: "Marché Sandaga", category: "Shopping", rating: "4.2", reviews: 1203,
    price: "€", location: "Plateau, Dakar", city: "Dakar",
    address: "Place de l'Indépendance, Plateau, Dakar", phone: "+221 33 822 00 00",
    website: "www.marche-sandaga.sn", hours: "Lun-Sam 07h-19h", lat: 14.6930, lng: -17.4430,
    image: "https://images.unsplash.com/photo-1687422809617-a7d97879b3b0?auto=format&fit=crop&q=80&w=800",
    description: "Le plus grand marché de Dakar, mille produits africains : tissus wax, épices, artisanat.",
    tags: ["Tissu Wax", "Épices", "Artisanat"], featured: true
  },
  {
    id: 16, name: "Galerie Arte Africana", category: "Shopping", rating: "4.7", reviews: 345,
    price: "€€€", location: "Plateau, Dakar", city: "Dakar",
    address: "Rue Joseph Gomis, Plateau, Dakar", phone: "+221 77 890 12 34",
    website: "www.arte-africana.sn", hours: "Lun-Sam 09h-19h", lat: 14.6950, lng: -17.4420,
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800",
    description: "Galerie d'art contemporain sénégalais, sculptures, toiles et peintures sous verre.",
    tags: ["Art", "Peintures", "Sculptures"], featured: false
  },
  {
    id: 17, name: "Bijoux Ndar", category: "Shopping", rating: "4.5", reviews: 189,
    price: "€€", location: "Saint-Louis", city: "Saint-Louis",
    address: "Île de Saint-Louis, Saint-Louis", phone: "+221 33 962 11 34",
    website: "www.bijoux-ndar.sn", hours: "Lun-Sam 08h-18h", lat: 16.0320, lng: -16.5020,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    description: "Bijouterie artisanale en or et argent, créations inspirées de la tradition wolof.",
    tags: ["Bijoux", "Or", "Artisanat"], featured: false
  },
  {
    id: 18, name: "La Calebasse", category: "Shopping", rating: "4.8", reviews: 423,
    price: "€€", location: "Almadies, Dakar", city: "Dakar",
    address: "Route des Almadies, Dakar", phone: "+221 78 901 23 45",
    website: "www.lacalebasse.sn", hours: "Lun-Sam 10h-20h", lat: 14.7400, lng: -17.5100,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800",
    description: "Boutique de souvenirs premium, épices, huiles naturelles et cosmétiques locaux.",
    tags: ["Épices", "Cosmétiques", "Cadeaux"], featured: true
  },
  {
    id: 19, name: "Market by Setal", category: "Shopping", rating: "4.4", reviews: 267,
    price: "€€", location: "Sacré-Cœur, Dakar", city: "Dakar",
    address: "VDN, Sacré-Cœur, Dakar", phone: "+221 77 234 56 78",
    website: "www.setal-market.sn", hours: "Lun-Sam 09h-20h", lat: 14.7200, lng: -17.4650,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800",
    description: "Concept store African lifestyle, mode, déco et produits bio 100% sénégalais.",
    tags: ["Mode africaine", "Lifestyle", "Bio"], featured: false
  },
  {
    id: 20, name: "Atelier Absa", category: "Shopping", rating: "4.6", reviews: 134,
    price: "€€€", location: "Fann Résidence, Dakar", city: "Dakar",
    address: "Rue 97 Fann Résidence, Dakar", phone: "+221 76 890 12 34",
    website: "www.atelier-absa.sn", hours: "Mar-Sam 10h-18h", lat: 14.6970, lng: -17.4700,
    image: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?auto=format&fit=crop&q=80&w=800",
    description: "Créateur de mode africaine sur-mesure, bazin, wax et tissu kente sublimés.",
    tags: ["Mode sur-mesure", "Bazin", "Créateur"], featured: true
  },

  // ===== VIE NOCTURNE (5 images uniques) =====
  {
    id: 21, name: "Just4U Club", category: "Vie Nocturne", rating: "4.5", reviews: 678,
    price: "€€€", location: "Almadies, Dakar", city: "Dakar",
    address: "Route des Almadies, Dakar", phone: "+221 77 567 89 01",
    website: "www.just4u-dakar.sn", hours: "Ven-Sam 23h-05h", lat: 14.7380, lng: -17.5180,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800",
    description: "Le club le plus réputé de Dakar, DJs internationaux, M'balax et Afrobeat sur 3 dancefloors.",
    tags: ["Afrobeat", "DJ", "VIP"], featured: true
  },
  {
    id: 22, name: "Le Calbar", category: "Vie Nocturne", rating: "4.3", reviews: 345,
    price: "€€", location: "Plateau, Dakar", city: "Dakar",
    address: "Rue Assane Ndoye, Plateau, Dakar", phone: "+221 78 456 78 92",
    website: "www.lecalbar.sn", hours: "Mar-Dim 18h-02h", lat: 14.6910, lng: -17.4450,
    image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=80&w=800",
    description: "Bar-restaurant branché du centre-ville, cocktails créatifs et concerts live le week-end.",
    tags: ["Live music", "Cocktails", "Lounge"], featured: false
  },
  {
    id: 23, name: "Espace Djily Mbaye", category: "Vie Nocturne", rating: "4.6", reviews: 512,
    price: "€€", location: "Sacré-Cœur, Dakar", city: "Dakar",
    address: "Sacré-Cœur 3, Dakar", phone: "+221 76 678 90 12",
    website: "www.djily-mbaye.sn", hours: "Jeu-Dim 20h-04h", lat: 14.7250, lng: -17.4620,
    image: "https://images.unsplash.com/photo-1524414621493-7dec026782c3?auto=format&fit=crop&q=80&w=800",
    description: "Hommage vivant à la musique sénégalaise, concerts M'balax et soirées thématiques.",
    tags: ["M'balax", "Concerts", "Culture"], featured: true
  },
  {
    id: 24, name: "Sky Bar Radisson", category: "Vie Nocturne", rating: "4.7", reviews: 289,
    price: "€€€€", location: "Almadies, Dakar", city: "Dakar",
    address: "Route des Almadies, Dakar", phone: "+221 33 869 39 39",
    website: "www.radisson-dakar.com/skybar", hours: "Lun-Dim 17h-01h", lat: 14.7420, lng: -17.5250,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    description: "Bar panoramique au sommet du Radisson Blu, vue à 360° sur Dakar et l'Atlantique.",
    tags: ["Vue panoramique", "Cocktails", "Luxe"], featured: false
  },
  {
    id: 25, name: "Keur Mariama Live", category: "Vie Nocturne", rating: "4.2", reviews: 198,
    price: "€€", location: "Mermoz, Dakar", city: "Dakar",
    address: "Rue des Jacarandas, Mermoz, Dakar", phone: "+221 77 789 01 23",
    website: "www.keurmariama.sn", hours: "Ven-Dim 21h-04h", lat: 14.7180, lng: -17.4780,
    image: "https://images.unsplash.com/photo-1619973226698-b77a5b5dd14b?auto=format&fit=crop&q=80&w=800",
    description: "Scène live authentique avec des artistes locaux, ambiance chaleureuse et populaire.",
    tags: ["Live music", "Populaire", "Danse"], featured: false
  },

  // ===== AUTOMOBILE (4 images uniques) =====
  {
    id: 26, name: "Garage Terranga Auto", category: "Automobile", rating: "4.4", reviews: 312,
    price: "€€", location: "Pikine, Dakar", city: "Dakar",
    address: "Route de Rufisque, Pikine, Dakar", phone: "+221 77 456 78 90",
    website: "www.terranga-auto.sn", hours: "Lun-Sam 08h-18h", lat: 14.7520, lng: -17.4030,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
    description: "Garage de confiance pour l'entretien de toutes marques, devis transparent et rapide.",
    tags: ["Réparation", "Entretien", "Toutes marques"], featured: true
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
  {
    id: 28, name: "Méca-Tech Sénégal", category: "Automobile", rating: "4.5", reviews: 267,
    price: "€€€", location: "Guédiawaye, Dakar", city: "Dakar",
    address: "Rue 5, Guédiawaye, Dakar", phone: "+221 77 012 34 56",
    website: "www.mecatech.sn", hours: "Lun-Sam 08h-17h30", lat: 14.7680, lng: -17.3980,
    image: "https://images.unsplash.com/photo-1562243061-204550d8a2c9?auto=format&fit=crop&q=80&w=800",
    description: "Spécialiste climatisation auto et électronique embarquée, techniciens certifiés.",
    tags: ["Climatisation", "Électronique", "Certifié"], featured: false
  },
  {
    id: 29, name: "Pneus & Jantes Dakar", category: "Automobile", rating: "4.1", reviews: 145,
    price: "€€", location: "Parcelles Assainies, Dakar", city: "Dakar",
    address: "Unité 17, Parcelles Assainies, Dakar", phone: "+221 76 234 56 78",
    website: "www.pneus-dakar.sn", hours: "Lun-Sam 08h-18h", lat: 14.7700, lng: -17.4100,
    image: "https://images.unsplash.com/photo-1541238461542-84a690d5e638?auto=format&fit=crop&q=80&w=800",
    description: "Vente et montage de pneus neufs et jantes, toutes tailles disponibles en stock.",
    tags: ["Pneus", "Jantes", "Montage rapide"], featured: false
  },

  // ===== BEAUTÉ & SPA (6 images uniques) =====
  {
    id: 30, name: "Salon Lara Beauté", category: "Beauté & Spa", rating: "4.8", reviews: 534,
    price: "€€", location: "Almadies, Dakar", city: "Dakar",
    address: "Route des Almadies, Dakar", phone: "+221 77 345 67 89",
    website: "www.lara-beaute.sn", hours: "Mar-Sam 09h-19h", lat: 14.7370, lng: -17.5160,
    image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&q=80&w=800",
    description: "Salon haut de gamme spécialisé en tresses africaines, box braids et twists.",
    tags: ["Tresses", "Box braids", "Coiffure"], featured: true
  },
  {
    id: 31, name: "Spa Karité & Co", category: "Beauté & Spa", rating: "4.9", reviews: 398,
    price: "€€€", location: "Point E, Dakar", city: "Dakar",
    address: "Rue 9, Point E, Dakar", phone: "+221 78 456 78 91",
    website: "www.karite-spa.sn", hours: "Lun-Sam 10h-20h", lat: 14.6980, lng: -17.4620,
    image: "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?auto=format&fit=crop&q=80&w=800",
    description: "Massages aux huiles de karité, baobab et touloucouna, bien-être 100% naturel.",
    tags: ["Massage", "Karité", "Bio"], featured: true
  },
  {
    id: 32, name: "Cosmétiques Teranga", category: "Beauté & Spa", rating: "4.5", reviews: 245,
    price: "€€", location: "Médina, Dakar", city: "Dakar",
    address: "Rue 15, Médina, Dakar", phone: "+221 76 567 89 01",
    website: "www.cosmetiques-teranga.sn", hours: "Lun-Sam 09h-18h", lat: 14.6870, lng: -17.4560,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800",
    description: "Savons naturels, shea butter, encens thiouraye, cosmétiques artisanaux locaux.",
    tags: ["Naturel", "Artisanat", "Soins"], featured: false
  },
  {
    id: 33, name: "Institut Ndeye Beauté", category: "Beauté & Spa", rating: "4.6", reviews: 312,
    price: "€€", location: "Mermoz, Dakar", city: "Dakar",
    address: "Rue des Jacarandas, Mermoz, Dakar", phone: "+221 77 678 90 12",
    website: "www.ndeye-beaute.sn", hours: "Mar-Sam 09h-18h", lat: 14.7170, lng: -17.4800,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    description: "Maquillage, soins du visage et manucure par des professionnelles certifiées.",
    tags: ["Maquillage", "Manucure", "Soins visage"], featured: false
  },
  {
    id: 34, name: "Barber King Senegal", category: "Beauté & Spa", rating: "4.7", reviews: 456,
    price: "€", location: "HLM, Dakar", city: "Dakar",
    address: "Village des Arts, HLM, Dakar", phone: "+221 78 789 01 23",
    website: "www.barber-king.sn", hours: "Lun-Sam 08h-20h", lat: 14.7040, lng: -17.4500,
    image: "https://images.unsplash.com/photo-1590540179852-2110a54f813a?auto=format&fit=crop&q=80&w=800",
    description: "Barbershop lifestyle, dégradés afro ultra nets, soins de barbe et styling.",
    tags: ["Dégradé", "Barbe", "Homme"], featured: true
  },
  {
    id: 35, name: "Atelier Tresses Gorée", category: "Beauté & Spa", rating: "4.3", reviews: 178,
    price: "€€", location: "Gorée, Dakar", city: "Dakar",
    address: "Île de Gorée, Dakar", phone: "+221 77 890 12 34",
    website: "www.tresses-goree.sn", hours: "Mar-Dim 09h-17h", lat: 14.6685, lng: -17.3997,
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800",
    description: "Atelier de tressage traditionnel sur l'île de Gorée, cadre historique et unique.",
    tags: ["Tresses", "Gorée", "Tradition"], featured: false
  },
];

export const cities = Array.from(new Set(businesses.map(b => b.city))).sort();
