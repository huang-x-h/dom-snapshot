const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('console', msg => {
        for (let i = 0; i < msg.args().length; ++i)
            console.log(`${i}: ${msg.args()[i]}`);
    });
    
    await page.goto('http://gitlab.ztesoft.com/ngweb/working-tracker/issues/91');
    await page.addScriptTag({
        path: './vendor/html2canvas.js'
    });
    await page.addScriptTag({
        path: './node_modules/file-saver/FileSaver.js'
    });
    await page.addScriptTag({
        path: './snapshot.js'
    });

    await browser.close();
})();