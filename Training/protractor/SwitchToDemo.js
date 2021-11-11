describe('Switch to demo', function () {

  it('Handling Alerts', function () {
    browser.waitForAngularEnabled(false)
    browser.get('http://formy-project.herokuapp.com/switch-window');

    element(by.id('alert-button')).click();
    browser.switchTo().alert().getText().then(function (text) {
      browser.sleep(5000);
      console.log(`Alert message ${text}`);
    })
    browser.switchTo().alert().accept();
  });


  it('Handling window', function () {
    browser.waitForAngularEnabled(false)

    browser.get('https://www.irctc.co.in/eticketing/errors.html#');
    element(by.linkText('Contact Us')).click();
    browser.getAllWindowHandles().then(function (windowIDs) {
      console.log(windowIDs[0] + " : " + windowIDs[1]);
      browser.switchTo().window(windowIDs[1]);
      element.all(by.tagName('a')).each(function (link) {
        link.getText().then(function (textOnLink) {
          console.log("email ids " + textOnLink);
        })
      })
      browser.switchTo().window(windowIDs[0]);
      element.all(by.tagName('a')).each(function (link) {
        link.getText().then(function (textOnLink) {
          console.log("Links in parent page " + textOnLink);
        })
      })

    })

  })



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
