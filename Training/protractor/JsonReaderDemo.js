var Object = require("./data/Object.json")

describe('Switch to demo', function () {

  it('Element inside a frame', function () {
    browser.get(Object.url);
    element(by.model(Object.locators.homepage.modelFN)).sendKeys(Object.inputs.number1);
    element(by.model(Object.locators.homepage.modelSN)).sendKeys(Object.inputs.number2);
    element(by.id(Object.locators.homepage.idGoButton)).click();
  });

});
