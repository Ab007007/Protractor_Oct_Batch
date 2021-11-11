var Object = require("./data/Object.json")
var using = require('jasmine-data-provider');

describe('Switch to demo', function () {
  beforeEach(function(){
    browser.get(Object.url);
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;

  })

  function additionData() {
    return [{ a: 5, b: 10 }, { a: 15, b: 10 }, { a: 25, b: 10 }, { a: 35, b: 10 }];
  }
  using(additionData, function (data) {

    it('Element inside a frame', function () {
     
      element(by.model(Object.locators.homepage.modelFN)).sendKeys(data.a);
      element(by.model(Object.locators.homepage.modelSN)).sendKeys(data.b);
      element(by.id(Object.locators.homepage.idGoButton)).click();
      element(by.binding('latest')).getText().then(function (result) {
        console.log(`Result is :  ${result}`);
      });

    });
  })
});
