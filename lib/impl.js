let Page = require('./core');

Page.prototype.submitKeyword = async function(inputName, keyword, resultId) {
    const input = await this.findByName('q');
    await this.write(input, `${keyword}\n`);
    const element = await this.findById(resultId);

    return await this.driver.wait( async function() {
        return await element.getText();
        
    }, 15000);
};

module.exports = Page;