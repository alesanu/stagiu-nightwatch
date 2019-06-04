/*jslint node: true */
/*global module, require*/


module.exports = {
    tags: ['google'], // Target tests to run based on tags, a test can be related to multiple tags

    'Google page must be displayed': function(client) {

        client
            .init()
            .waitForElementPresent('#tsf > div:nth-child(2) > div > div > div > div > input')
            .waitForElementVisible('#tsf > div:nth-child(2) > div > div > div > div > input')
            .sendKeys('#tsf > div:nth-child(2) > div > div > div > div > input', 'nightwatch')
            .click('#tsf > div:nth-child(2) > div > div > div > div > center > input')
            .pause(5000)
            .end();
    }
};
