const { chromium } = require('playwright');

async function scrapeTables() {
    const seeds = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let totalSum = 0;
    const browser = await chromium.launch();
    const context = await browser.newContext();

    for (const seed of seeds) {
        const page = await context.newPage();
        const url = `https://sanand0.github.io/tdsdata/js_table/?seed=${seed}`;
        console.log(`Visiting seed ${seed}: ${url}`);
        
        try {
            await page.goto(url, { waitUntil: 'networkidle' });
            
            // Wait for tables to be present
            await page.waitForSelector('table');
            
            // Extract all text content from table cells
            const cellTexts = await page.$$eval('td', cells => cells.map(cell => cell.innerText.trim()));
            
            let seedSum = 0;
            for (const text of cellTexts) {
                const num = parseFloat(text);
                if (!isNaN(num)) {
                    seedSum += num;
                }
            }
            
            console.log(`Sum for seed ${seed}: ${seedSum}`);
            totalSum += seedSum;
            
        } catch (error) {
            console.error(`Error processing seed ${seed}: ${error.message}`);
        } finally {
            await page.close();
        }
    }

    console.log('====================================');
    console.log(`FINAL_TOTAL_SUM: ${totalSum}`);
    console.log('====================================');

    await browser.close();
}

scrapeTables().catch(err => {
    console.error(err);
    process.exit(1);
});
