const { describe, it, beforeEach, afterEach } = require('mocha');
const Page = require('../lib/impl');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

process.on('unhandledRejection', () => { });

(async function example() {
    try {
        describe ('Google shearch automated test', async function() {
            this.timeout(50000);
            let driver, page;

            beforeEach(async function() {
                page = new Page();
                driver = page.driver;
                await page.visit('https://www.google.com/');
            });

            afterEach(async function() {
                await page.quit();
            });

            it('should search for sodimac' , async function() {
                const result = await page.submitKeyword('q', 'Sodimac', 'result-stats');
                expect(result.length).to.be.above(10);

            });

        });

    } catch (error) {
        console.log(new Error(error.message));

    } finally {

    }

})();