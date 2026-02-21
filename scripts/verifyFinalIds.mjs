const ids = [
    '1687422809617-a7d97879b3b0',
    '1619973226698-b77a5b5dd14b',
    '1520340356584-f9917d1eea6f',
    '1541238461542-84a690d5e638',
    '1616394584738-fc6e612e71b9',
    '1524414621493-7dec026782c3'
];

async function verify() {
    for (const id of ids) {
        const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=800`;
        try {
            const resp = await fetch(url, { method: 'HEAD' });
            console.log(`${id}: ${resp.status} ${resp.ok ? '✅' : '❌'}`);
        } catch (e) {
            console.log(`${id}: ERROR ${e.message}`);
        }
    }
}

verify();
