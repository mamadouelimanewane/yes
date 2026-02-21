const urls = [
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1561214078-f3247647fc5e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1621370217431-155f69f8c6eb?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1605497746153-76fd18a996c9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1583091931846-953e5365518b?auto=format&fit=crop&q=80&w=800"
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
