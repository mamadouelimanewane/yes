const ids = [
    'XzgW_vYpm8M',
    'm5F4cMjn-tk',
    'WHPOFFzY9gU',
    'C__JUIT_76E',
    '1511671782779-c97d3d27a1d4',
    '1520340356584-f9917d1eea6f'
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
