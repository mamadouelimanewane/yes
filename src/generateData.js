import fs from 'fs';

const categories = [
    { id: 'rest', name: 'Restaurants', icon: 'Utensils' },
    { id: 'hotel', name: 'Hôtels', icon: 'Hotel' },
    { id: 'shop', name: 'Shopping', icon: 'ShoppingBag' },
    { id: 'night', name: 'Vie Nocturne', icon: 'Music' },
    { id: 'auto', name: 'Automobile', icon: 'Car' },
    { id: 'beauty', name: 'Beauté & Spa', icon: 'Sparkles' },
];

const images = {
    Restaurants: [
        "/assets/restaurant.png",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800", // Thieb
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800", // African food
        "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&q=80&w=800", // African soup
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800", // Food plate
    ],
    Hôtels: [
        "/assets/hotel.png",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800", // Pool
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800", // Resort
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800", // Beach resort
    ],
    Shopping: [
        "/assets/shopping.png",
        "https://images.unsplash.com/photo-1506617420240-0529f4d78da5?auto=format&fit=crop&q=80&w=800", // African fabric
        "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800", // African clothes
        "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=800", // African market lady
    ],
    'Vie Nocturne': [
        "/assets/nightlife.png",
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80", // Club drinks
        "https://images.unsplash.com/photo-1521360096-7bb2a5ad625a?auto=format&fit=crop&q=80&w=800", // Black musician
    ],
    Automobile: [
        "/assets/auto.png",
        "https://images.unsplash.com/photo-1534067980590-fde85cdcaed3?auto=format&fit=crop&q=80&w=800", // Black mechanic
    ],
    'Beauté & Spa': [
        "/assets/beauty.png",
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800", // Braids african
        "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800", // Black woman spa/massage
        "https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&q=80&w=800", // Black woman makeup/beauty
        "https://images.unsplash.com/photo-1552559560-4b8c9d0121ed?auto=format&fit=crop&q=80&w=800", // African braiding
        "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?auto=format&fit=crop&q=80&w=800", // Black male barber
    ]
};

const dakarLocations = [
    "Plateau, Dakar", "Almadies, Dakar", "Ngor, Dakar", "Point E, Dakar",
    "Médina, Dakar", "Fann Résidence, Dakar", "Ouakam, Dakar", "Sacré-Cœur, Dakar",
    "Yoff, Dakar", "Mamelles, Dakar", "Gorée, Dakar", "Parcelles Assainies, Dakar",
    "HLM, Dakar", "Liberté 6, Dakar", "Mermoz, Dakar", "Hann Maristes, Dakar",
    "Guédiawaye, Dakar", "Pikine, Dakar", "Rufisque, Dakar", "Fass, Dakar"
];

const otherCities = [
    "Saint-Louis", "Saly, Mbour", "Touba", "Kaolack", "Ziguinchor",
    "Cap Skirring", "Somone", "Sine Saloum", "Joal-Fadiouth", "Kédougou"
];

function getUniqueImage(cat) {
    if (!images[cat] || images[cat].length === 0) return "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800";

    // Pick a random image from the pool instead of popping, to allow more businesses than images
    return images[cat][Math.floor(Math.random() * images[cat].length)];
}

let businesses = [];
let idCounter = 1;

// Helper to generate businesses until images run out
function generateCategory(category, namePrefixes, tagsPool, descriptions, cityCounts) {
    const totalBusinesses = cityCounts.dakar + cityCounts.autres;
    const items = totalBusinesses;

    for (let i = 0; i < items; i++) {
        const isDakar = i < cityCounts.dakar;
        const locations = isDakar ? dakarLocations : otherCities;
        const loc = locations[Math.floor(Math.random() * locations.length)];
        const name = namePrefixes[Math.floor(Math.random() * namePrefixes.length)] + " " + loc.split(",")[0];
        const city = isDakar ? "Dakar" : (loc.includes(",") ? loc.split(",")[1].trim() : loc);
        businesses.push(createBiz(category, name, loc, city, tagsPool, descriptions));
    }
}

function createBiz(category, name, location, city, tagsPool, descriptions) {
    const isDakar = city === "Dakar";
    const numTags = Math.floor(Math.random() * 3) + 2;
    const tags = [];
    while (tags.length < numTags) {
        const t = tagsPool[Math.floor(Math.random() * tagsPool.length)];
        if (!tags.includes(t)) tags.push(t);
    }

    // Coordonnées précises décalées vers l'intérieur pour éviter la mer
    const locationCoords = {
        "Plateau, Dakar": { lat: 14.672, lng: -17.436 },
        "Almadies, Dakar": { lat: 14.745, lng: -17.512 },
        "Ngor, Dakar": { lat: 14.742, lng: -17.505 },
        "Point E, Dakar": { lat: 14.692, lng: -17.452 },
        "Médina, Dakar": { lat: 14.685, lng: -17.445 },
        "Fann Résidence, Dakar": { lat: 14.688, lng: -17.458 },
        "Ouakam, Dakar": { lat: 14.718, lng: -17.485 },
        "Sacré-Cœur, Dakar": { lat: 14.712, lng: -17.465 },
        "Yoff, Dakar": { lat: 14.755, lng: -17.462 },
        "Mamelles, Dakar": { lat: 14.725, lng: -17.502 },
        "Gorée, Dakar": { lat: 14.667, lng: -17.398 },
        "Parcelles Assainies, Dakar": { lat: 14.758, lng: -17.438 },
        "HLM, Dakar": { lat: 14.708, lng: -17.442 },
        "Liberté 6, Dakar": { lat: 14.722, lng: -17.455 },
        "Mermoz, Dakar": { lat: 14.702, lng: -17.468 },
        "Hann Maristes, Dakar": { lat: 14.738, lng: -17.428 },
        "Guédiawaye, Dakar": { lat: 14.772, lng: -17.388 },
        "Pikine, Dakar": { lat: 14.742, lng: -17.388 },
        "Rufisque, Dakar": { lat: 14.712, lng: -17.268 },
        "Fass, Dakar": { lat: 14.692, lng: -17.442 },
        "Saint-Louis": { lat: 16.02, lng: -16.50 },
        "Saly, Mbour": { lat: 14.44, lng: -16.99 },
        "Touba": { lat: 14.86, lng: -15.87 },
        "Kaolack": { lat: 14.14, lng: -16.07 },
        "Ziguinchor": { lat: 12.56, lng: -16.27 },
        "Cap Skirring": { lat: 12.36, lng: -16.73 },
        "Somone": { lat: 14.48, lng: -17.07 },
        "Sine Saloum": { lat: 13.88, lng: -16.52 },
        "Joal-Fadiouth": { lat: 14.16, lng: -16.85 },
        "Kédougou": { lat: 12.55, lng: -12.17 }
    };

    const baseCoords = locationCoords[location] || { lat: 14.7, lng: -17.4 };

    // Jitter beaucoup plus petit (environ 100-200m) pour éviter de sortir du quartier ou aller en mer
    // Pas de jitter pour l'île de Gorée (trop petite)
    const isGoree = location.includes("Gorée");
    const jitterVal = isGoree ? 0 : 0.002;
    const jitter = () => (Math.random() - 0.5) * jitterVal;

    return {
        id: idCounter++,
        name: name,
        category: category,
        rating: (Math.random() * 1.5 + 3.5).toFixed(1), // 3.5 to 5.0
        reviews: Math.floor(Math.random() * 500) + 10,
        price: (function () {
            if (category === 'Restaurants') {
                const ranges = ["2 500 - 7 500 FCFA", "7 500 - 15 000 FCFA", "15 000 - 35 000 FCFA", "35 000 - 75 000 FCFA"];
                return ranges[Math.floor(Math.random() * ranges.length)];
            } else if (category === 'Hôtels') {
                const ranges = ["25 000 - 45 000 FCFA", "45 000 - 95 000 FCFA", "95 000 - 250 000 FCFA", "250 000 - 650 000 FCFA"];
                return ranges[Math.floor(Math.random() * ranges.length)];
            } else if (category === 'Shopping') {
                const ranges = ["1 500 - 15 000 FCFA", "15 000 - 50 000 FCFA", "50 000 - 150 000 FCFA", "Varié"];
                return ranges[Math.floor(Math.random() * ranges.length)];
            } else if (category === 'Vie Nocturne') {
                const ranges = ["5 000 - 20 000 FCFA", "20 000 - 50 000 FCFA", "50 000 - 150 000 FCFA"];
                return ranges[Math.floor(Math.random() * ranges.length)];
            } else if (category === 'Automobile') {
                const ranges = ["3 500 - 15 000 FCFA", "15 000 - 85 000 FCFA", "85 000 - 500 000 FCFA"];
                return ranges[Math.floor(Math.random() * ranges.length)];
            } else { // Beauté & Spa
                const ranges = ["2 500 - 12 500 FCFA", "12 500 - 45 000 FCFA", "45 000 - 120 000 FCFA"];
                return ranges[Math.floor(Math.random() * ranges.length)];
            }
        })(),
        location: location,
        city: city,
        address: "Rue " + Math.floor(Math.random() * 100) + ", " + location,
        phone: "+221 " + ['77', '78', '76', '33'][Math.floor(Math.random() * 4)] + " " + (Math.floor(Math.random() * 900) + 100) + " " + (Math.floor(Math.random() * 90) + 10) + " " + (Math.floor(Math.random() * 90) + 10),
        website: "www." + name.toLowerCase().replace(/[^a-z0-9]/g, '') + ".sn",
        hours: "Lun-Dim 09h-22h",
        lat: baseCoords.lat + jitter(),
        lng: baseCoords.lng + jitter(),
        image: getUniqueImage(category),
        description: descriptions[Math.floor(Math.random() * descriptions.length)],
        tags: tags,
        featured: Math.random() > 0.5
    };
}

generateCategory(
    "Restaurants",
    ["Chez", "Le Palais de", "Saveurs de", "Restaurant", "Dibiterie", "Maquis", "La Téranga", "L'Escale de"],
    ["Thieboudienne", "Yassa", "Mafé", "Dibi", "Fruits de mer", "Fast-food", "Cuisine locale", "Gastronomie", "Halal"],
    [
        "Le meilleur endroit pour déguster un Thieboudienne authentique, préparé avec des poissons frais locaux.",
        "Une expérience culinaire inoubliable au cœur du Sénégal avec un accueil 100% Téranga.",
        "Découvrez les saveurs locales dans un cadre chaleureux et convivial, avec vue imprenable.",
        "Dibiterie très prisée par les locaux pour son mouton grillé et ses oignons caramélisés.",
        "Restaurant proposant des plats typiques et revisités pour émerveiller vos papilles.",
        "Un havre de paix pour savourer un jus de bissap et un bon plat de Yassa poulet."
    ],
    { dakar: 40, autres: 15 }
);

generateCategory(
    "Hôtels",
    ["Hôtel", "Résidence", "Campement", "Lodge", "Villa", "Auberge"],
    ["Vue mer", "Piscine", "Luxe", "Confort", "Wifi gratuit", "Climatisation", "Spa", "Business"],
    [
        "Superbe hôtel offrant un confort optimal et une vue magnifique sur un paysage 100% sénégalais.",
        "Séjournez dans un cadre luxueux, parfait pour les séjours d'affaires comme pour les vacances.",
        "Un campement traditionnel offrant une immersion totale dans la culture et la nature locale.",
        "Hôtel moderne avec piscine, chambres spacieuses et un service client aux petits soins.",
        "Résidence calme et sécurisée, idéale pour les familles en visite."
    ],
    { dakar: 25, autres: 15 }
);

generateCategory(
    "Shopping",
    ["Marché de", "Boutique", "Galerie d'Art", "Centre Commercial", "Artisanat de", "Couture"],
    ["Tissu Wax", "Artisanat", "Mode africaine", "Souvenirs", "Épices", "Bijoux", "Bazin"],
    [
        "Trouvez les meilleurs tissus Wax, Bazin et artisanat local dans ce marché emblématique.",
        "Boutique de créateurs sénégalais, mettant en valeur la mode africaine moderne.",
        "Des œuvres d'art uniques, sculptures en bois, peintures sous verre et souvenirs du Sénégal.",
        "Le paradis des épices locales, du bissap, du pain de singe et de l'encens (thiouraye).",
        "Tailleur réputé pour des créations sur-mesure rapides et élégantes."
    ],
    { dakar: 20, autres: 10 }
);

generateCategory(
    "Vie Nocturne",
    ["Club", "Bar", "Lounge", "Discothèque", "Espace", "Cabaret"],
    ["M'balax", "Afrobeat", "DJ", "Live music", "Cocktails", "VIP", "Terrasse", "Ambiance folle"],
    [
        "Le lieu incontournable pour danser sur du M'balax et de l'Afrobeat jusqu'au bout de la nuit.",
        "Lounge chic avec des cocktails signatures et des concerts live d'artistes locaux.",
        "Espace convivial en plein air, parfait pour un afterwork ou une soirée entre amis.",
        "Club exclusif fréquenté par la jeunesse branchée et la Jet Set sénégalaise.",
        "Concerts live tous les week-ends avec les grands noms de la scène musicale sénégalaise."
    ],
    { dakar: 25, autres: 5 }
);

generateCategory(
    "Automobile",
    ["Garage", "Auto Service", "Lavage", "Concession", "Mécanique"],
    ["Révision", "Carrosserie", "Lavage auto", "Climatisation", "Pièces neuves", "Dépannage"],
    [
        "Garage fiable pour l'entretien et la réparation de votre véhicule avec des pièces d'origine.",
        "Station de lavage ultra moderne pour rendre votre voiture éclatante, intérieur comme extérieur.",
        "Spécialiste de la climatisation auto, essentiel pour affronter la chaleur sénégalaise.",
        "Dépannage rapide partout dans la région et mécaniciens qualifiés sur toutes les marques."
    ],
    { dakar: 20, autres: 5 }
);

generateCategory(
    "Beauté & Spa",
    ["Salon", "Spa", "Institut", "Espace Beauté", "Onglerie", "Barber"],
    ["Tresses", "Soins au Karité", "Massage", "Coiffure", "Ongles", "Hammam", "Soins naturels"],
    [
        "Salon de beauté spécialisé dans les tresses africaines complexes et les soins capillaires naturels.",
        "Profitez de massages relaxants aux huiles locales (Baobab, Karité, Touloucouna).",
        "Institut moderne offrant des soins du visage, manucure, et pédicure impeccables.",
        "Barbershop très stylé pour des coupes afros nettes, dégradés et soins de la barbe.",
        "Un oasis de bien-être pour vous détendre et vous ressourcer."
    ],
    { dakar: 25, autres: 5 }
);

const existingContent = "export const categories = " + JSON.stringify(categories, null, 2) + ";\n\n" +
    "export const businesses = " + JSON.stringify(businesses, null, 2) + ";\n" +
    "\nexport const cities = Array.from(new Set(businesses.map(b => b.city))).sort();\n";

fs.writeFileSync('./data.js', existingContent);
console.log('data.js generated successfully with ' + businesses.length + ' businesses!');
