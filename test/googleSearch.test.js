const { describe, it, beforeEach, afterEach } = require('mocha');
const Page = require('../lib/impl');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

process.on('unhandledRejection', () => {});

(async function example() {

    try {
        describe('Google search automated test', async function () {

            this.timeout(50000);
            let driver, page;

            beforeEach(async function() {
                page = new Page();
                driver = page.driver;
                await page.visit('https://www.google.com')
            });

            afterEach( async function() {
                await page.quit();
            });

            it('should search sodimac', async function() {
                const result = await page.submitKeyword('q', 'sodimac', 'result-stats');
                expect(result.length).to.be.above(10);
            })
            
        });
        
    } catch (error) {
        
    }finally {

    }

})();