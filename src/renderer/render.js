const puppeteer = require('puppeteer');

/**
 * 
 * @param {string} url
 * @returns {Promise<string>} 
 */
const render = (url) => {
    return puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars', '--disable-gpu']
    }).then(browser => browser.newPage()
        .then((page) => page.goto(url, { waitUntil: 'networkidle0' }).then(() => page.content().then((html)=> {
            browser.close();
            return html;
        }))));
};

module.exports = render;