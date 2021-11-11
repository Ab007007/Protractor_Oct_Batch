describe('angularjs homepage', function () {

  it('Addition of two numbers3', function () {
    browser.waitForAngularEnabled(false)
    browser.get('http://formy-project.herokuapp.com/form');

    element(by.id('first-name')).sendKeys("Aravinda");
    element(by.id('last-name')).sendKeys("HB");
    element(by.id('job-title')).sendKeys("Trainer");
    element(by.id('radio-button-1')).click();
    element(by.id('checkbox-1')).click();
    element(by.id('select-menu')).element(by.css("option[value='1']")).click();
    element(by.id('datepicker')).click();
    element(by.linkText('Submit')).click();

    var ec = protractor.ExpectedConditions;
    browser.wait(ec.visibilityOf(element(by.xpath("//div[@class='alert alert-success']"))));
    element(by.xpath("//div[@class='alert alert-success']")).getText().then(function(text){
      console.log(`Text displayed ${text}`);
    })
  });


});
