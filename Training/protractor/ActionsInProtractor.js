describe('angularjs homepage', function () {

  it('Addition of two numbers3', function () {
    browser.waitForAngularEnabled(false)
    browser.get('https://www.flipkart.com/');
    
    var ec = protractor.ExpectedConditions;
    browser.wait(ec.visibilityOf(element(by.xpath("//button[@class='_2KpZ6l _2doB4z']"))));
    element(by.xpath("//button[@class='_2KpZ6l _2doB4z']")).click();


    browser.actions().mouseMove(element(by.xpath("//div[text()='Fashion']"))).perform();

    element.all(by.xpath("//div[text()='Fashion']/parent::div/following-sibling::div//a")).each(function(element, index) {

      element.getText().then(function(ele){
        console.log(`Index at ${index} : ${ele}`);
      })
    })



  });


});
