const { Builder, By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let o = new chrome.Options();
o.addArguments('headless'); 

const Page = function() {

    this.driver = new Builder().setChromeOptions(o).forBrowser('chrome').build();

    // visit a webpage
    this.visit = async function (url) {
        return await this.driver.get(url);
    };

    // quit current session
    this.quit = async function() {
        return await this.driver.quit();
    };

    // find element by id
    this.findById =  async function(id) {
        await this.driver.wait(until.elementLocated(By.id(id)), 15000, 'Loking element by id');
        return await this.driver.findElement(By.id(id));
    };

    //find element by name
    this.findByName = async function(name) {
        await this.driver.wait(until.elementLocated(By.name(name)), 15000, 'Loking element by name');
        return await this.driver.findElement(By.name(name));
    };

    //write on input
    this.write = async function(element, text) {
        return await element.sendKeys(text);
    };

};

module.exports = Page;