let homepage = require('../page/CalculatorHomePage.js')
let Object = require('../data/Object.json')


describe('Addition Test', () => {
    it('Addition Valid Scenario ', () => {
        browser.get(Object.url);
        browser.dirver.window().maximize();
        homepage.enterFNum(20)
        homepage.enterSNum(40)
        homepage.Go('60')
    });

    it('Addition Invalid Scenario ', () => {
        browser.get(Object.url);
        homepage.enterFNum(20)
        homepage.enterSNum(40)
        homepage.Go('40')
    });
});