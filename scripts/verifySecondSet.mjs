const urls = [
    "https://images.unsplash.com/photo-1590540179852-2110a54f813a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800"
];

async function verify() {
    for (const url of urls) {
        try {
            const resp = await fetch(url, { method: 'HEAD' });
            console.log(`${url}: ${resp.status} ${resp.ok ? '✅' : '❌'}`);
        } catch (e) {
            console.log(`${url}: ERROR ${e.message}`);
        }
    }
}

verify();
