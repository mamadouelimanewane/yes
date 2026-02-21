const ids = [
    '1543087343-69335a4d0458',
    '1511671782779-c97d3d27a1d4',
    '1453090927415-5f45085b6aed',
    '1520340356584-f9917d1eea6f',
    '1506161435275-c0529f4d78da',
    '1560750585-33f7c9e07971'
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
