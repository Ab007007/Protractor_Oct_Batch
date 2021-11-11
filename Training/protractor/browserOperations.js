describe('Switch to demo', function () {

  it('Element inside a frame', function () {
    browser.waitForAngularEnabled(false)
    browser.get('https://www.google.com').then(function () {
      browser.sleep(10000);
      browser.driver.manage().window().maximize();
      browser.driver.navigate().back();
      browser.driver.navigate().forward();

    });



  })

});
