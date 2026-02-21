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
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800", // Thieb
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800", // African food
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&q=80&w=800", // Dinner setting
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800", // Restaurant dark
        "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&q=80&w=800", // African soup
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800", // Food plate
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800", // Grill
        "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?auto=format&fit=crop&q=80&w=800", // Seafood
    ],
    Hôtels: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800", // Pool
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800", // Resort
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800", // Luxury pool
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800", // Colonial exterior
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800", // Room
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800", // Beach resort
    ],
    Shopping: [
        "https://images.unsplash.com/photo-1506617420240-0529f4d78da5?auto=format&fit=crop&q=80&w=800", // African fabric
        "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800", // African clothes
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800", // Jewelry
        "https://images.unsplash.com/photo-1591457824888-c9c14c0f96cd?auto=format&fit=crop&q=80&w=800", // Spices
        "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=800", // African market lady
        "https://images.unsplash.com/photo-1542485547-19416ee97ba0?auto=format&fit=crop&q=80&w=800" // African patterns
    ],
    'Vie Nocturne': [
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80", // Club drinks
        "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=80&w=800", // Bar setup
        "https://images.unsplash.com/photo-1545128485-c400ce7b23d5?auto=format&fit=crop&q=80&w=800", // Crowd dark
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800", // DJ
        "https://images.unsplash.com/photo-1521360096-7bb2a5ad625a?auto=format&fit=crop&q=80&w=800", // Black musician
    ],
    Automobile: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800", // Car repair general
        "https://images.unsplash.com/photo-1503376712341-ea080ddf4879?auto=format&fit=crop&q=80", // Car bottom
        "https://images.unsplash.com/photo-1534067980590-fde85cdcaed3?auto=format&fit=crop&q=80&w=800", // Black mechanic
        "https://images.unsplash.com/photo-1620865766861-f0bd29ed31db?auto=format&fit=crop&q=80&w=800", // Tires
    ],
    'Beauté & Spa': [
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800", // Braids african
        "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800", // Black woman spa/massage
        "https://images.unsplash.com/photo-1556228578-8d89b6acd8f1?auto=format&fit=crop&q=80&w=800", // Shea butter / oils
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
    return images[cat].pop();
}

let businesses = [];
let idCounter = 1;

// Helper to generate businesses until images run out
function generateCategory(category, namePrefixes, tagsPool, descriptions, cityCounts) {
    const totalBusinesses = cityCounts.dakar + cityCounts.autres;
    const items = Math.min(totalBusinesses, images[category] ? images[category].length : 0);

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

    return {
        id: idCounter++,
        name: name,
        category: category,
        rating: (Math.random() * 1.5 + 3.5).toFixed(1), // 3.5 to 5.0
        reviews: Math.floor(Math.random() * 500) + 10,
        price: ["€", "€€", "€€€", "€€€€"][Math.floor(Math.random() * 4)],
        location: location,
        city: city,
        address: "Rue " + Math.floor(Math.random() * 100) + ", " + location,
        phone: "+221 " + ['77', '78', '76', '33'][Math.floor(Math.random() * 4)] + " " + (Math.floor(Math.random() * 900) + 100) + " " + (Math.floor(Math.random() * 90) + 10) + " " + (Math.floor(Math.random() * 90) + 10),
        website: "www." + name.toLowerCase().replace(/[^a-z0-9]/g, '') + ".sn",
        hours: "Lun-Dim 09h-22h",
        lat: isDakar ? (14.6 + Math.random() * 0.2) : (12.0 + Math.random() * 4.0),
        lng: isDakar ? (-17.5 + Math.random() * 0.2) : (-16.5 + Math.random() * 1.0),
        image: getUniqueImage(category),
        description: descriptions[Math.floor(Math.random() * descriptions.length)],
        tags: tags,
        featured: Math.random() > 0.5 // INCREASE FEATURED ODDS to make sure we have enough since we have fewer items
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
