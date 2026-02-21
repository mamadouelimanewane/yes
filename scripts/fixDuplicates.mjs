const fs = require('fs');

const pools = {
    "Restaurants": [
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
        "https://images.unsplash.com/photo-1547592166-23ac45744acd",
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        "https://images.unsplash.com/photo-1544025162-d76694265947",
        "https://images.unsplash.com/photo-1530469912745-a215c6b256ea",
        "https://images.unsplash.com/photo-1565557612-421c97a9f73f",
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
        "https://images.unsplash.com/photo-1481070555726-a28d57540266",
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
        "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0",
        "https://images.unsplash.com/photo-1476224203421-9ce132412b1cc",
        "https://images.unsplash.com/photo-1543339308-43e59d6b73a6",
        "https://images.unsplash.com/photo-1504113888839-1c59287f4cad",
        "https://images.unsplash.com/photo-1528698827591-e59cd91dc380",
        "https://images.unsplash.com/photo-1511690655022-0761e3dbeaf4"
    ].map(u => u + "?auto=format&fit=crop&q=80&w=800"),
    "Hôtels": [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
        "https://images.unsplash.com/photo-1542314831-c6a4d14d8628", // Using the correct ID added recently
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8",
        "https://images.unsplash.com/photo-1501117716987-c8c394bb29bf",
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6",
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6",
        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a",
        "https://images.unsplash.com/photo-1551882547-ff40c0d12c56"
    ].map(u => u + "?auto=format&fit=crop&q=80&w=800"),
    "Shopping": [
        "https://images.unsplash.com/photo-1506617420240-0529f4d78da5",
        "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
        "https://images.unsplash.com/photo-1591457824888-c9c14c0f96cd",
        "https://images.unsplash.com/photo-1599839619722-39751411ea63",
        "https://images.unsplash.com/photo-1542485547-19416ee97ba0",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
        "https://images.unsplash.com/photo-1533900298318-6b8da08a523e",
        "https://images.unsplash.com/photo-1481437156560-3205f6a55735",
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
        "https://images.unsplash.com/photo-1520006403909-838d6b92c22e"
    ].map(u => u + "?auto=format&fit=crop&q=80&w=800"),
    "Vie Nocturne": [
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
        "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2",
        "https://images.unsplash.com/photo-1545128485-c400ce7b23d5",
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
        "https://images.unsplash.com/photo-1521360096-7bb2a5ad625a",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
        "https://images.unsplash.com/photo-1533174000255-3203af705c74",
        "https://images.unsplash.com/photo-1511192336575-5a79af67a629",
        "https://images.unsplash.com/photo-1558317774-8b1e4aeb0a26",
        "https://images.unsplash.com/photo-1559564175-ea2df4237fbf",
        "https://images.unsplash.com/photo-1563841930606-67e2bce48b78"
    ].map(u => u + "?auto=format&fit=crop&q=80&w=800"),
    "Automobile": [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
        "https://images.unsplash.com/photo-1503376712341-ea080ddf4879",
        "https://images.unsplash.com/photo-1534067980590-fde85cdcaed3",
        "https://images.unsplash.com/photo-1620865766861-f0bd29ed31db",
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc",
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2",
        "https://images.unsplash.com/photo-1502877338535-766e1452684a",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        "https://images.unsplash.com/photo-1563720223185-11003d516935",
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8"
    ].map(u => u + "?auto=format&fit=crop&q=80&w=800"),
    "Beauté & Spa": [
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
        "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2",
        "https://images.unsplash.com/photo-1556228578-8d89b6acd8f1",
        "https://images.unsplash.com/photo-1531123414780-f74242c2b052",
        "https://images.unsplash.com/photo-1552559560-4b8c9d0121ed",
        "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70",
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
        "https://images.unsplash.com/photo-1616394584738-bfc3322b2bee",
        "https://images.unsplash.com/photo-1596178065887-1198b6148b2b",
        "https://images.unsplash.com/photo-1522337660859-02fbefca4702",
        "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388",
        "https://images.unsplash.com/photo-1506450596396-e244b7f83e87"
    ].map(u => u + "?auto=format&fit=crop&q=80&w=800")
};

const rawData = fs.readFileSync('src/data.js', 'utf8');

// The exported businesses object starts with 'export const businesses = ['
// Then there are arrays inside.
// We can use a regex loop to find every image field, but wait! We can just require/evaluate or since ES module evaluate if we strip the export keyword.
const jsCode = rawData.replace(/export const/g, 'const');

try {
    const context = {};
    const codeToRun = jsCode + "\\n" + "context.businesses = businesses; context.categories = categories; context.cities = cities;";
    const execute = new Function('context', codeToRun);
    execute(context);
    const bus = context.businesses;

    // Track offsets for our rotating pool so we cycle evenly per category
    const poolOffsets = {
        featured: {},
        all: {}
    };

    // Sort businesses: featured first so they get the very first fresh images
    bus.sort((a, b) => (b.featured === true) - (a.featured === true));

    for (let b of bus) {
        if (!poolOffsets.featured[b.category]) {
            poolOffsets.featured[b.category] = 0;
            // Let regular items start in the middle of the pool to minimize adjacent overlaps in list views
            poolOffsets.all[b.category] = Math.floor(pools[b.category].length / 2);
        }

        const currentPool = pools[b.category];
        if (b.featured) {
            b.image = currentPool[poolOffsets.featured[b.category] % currentPool.length];
            poolOffsets.featured[b.category]++;
        } else {
            b.image = currentPool[poolOffsets.all[b.category] % currentPool.length];
            poolOffsets.all[b.category]++;
        }
    }

    // Now bus is updated. Re-generate the file content!
    const newContent = \`export const categories = \${JSON.stringify(context.categories, null, 2)};

export const businesses = \${JSON.stringify(bus, null, 2)};

export const cities = \${JSON.stringify(context.cities, null, 2)};
\`;

    fs.writeFileSync('src/data.js', newContent, 'utf8');
    console.log("Successfully replaced and redistributed all images without direct duplicates!");

} catch (e) {
    console.error(e);
}
