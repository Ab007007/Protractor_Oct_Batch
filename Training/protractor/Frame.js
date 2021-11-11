describe('Switch to demo', function () {

  it('Element inside a frame', function () {
    browser.waitForAngularEnabled(false)
    browser.get('https://jqueryui.com/droppable/');

      browser.switchTo().frame(element(by.xpath("//iframe[contains(@src,'default')]"))).getWebElement();
      browser.actions().dragAndDrop(element(by.id('draggable')), element(by.id('droppable'))).
        perform().then(function () {
          element(by.id('droppable')).getText().then(function (dropText) {
            console.log(`Droppable Text ${dropText}`);
        });
    });


  })

});
