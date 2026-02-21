import { businesses } from '../src/data.js';
// Native fetch is used (Node 18+)

async function testImages() {
    console.log(`Testing ${businesses.length} images...`);
    const results = [];

    for (const business of businesses) {
        try {
            const response = await fetch(business.image, { method: 'HEAD' });
            if (response.ok) {
                process.stdout.write('✅');
                results.push({ name: business.name, url: business.image, status: 'OK' });
            } else {
                process.stdout.write('❌');
                results.push({ name: business.name, url: business.image, status: `FAILED (${response.status})` });
            }
        } catch (error) {
            process.stdout.write('⚠️');
            results.push({ name: business.name, url: business.image, status: `ERROR (${error.message})` });
        }
    }

    console.log('\n\n--- Results ---');
    const failures = results.filter(r => r.status !== 'OK');
    if (failures.length === 0) {
        console.log('All images loaded successfully!');
    } else {
        console.log(`${failures.length} images failed to load:`);
        failures.forEach(f => console.log(`${f.name}: ${f.status} - ${f.url}`));
    }
}

testImages();
