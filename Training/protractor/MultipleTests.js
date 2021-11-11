describe('angularjs homepage', function() {
  it('Addition of two numbers', function() {
    browser.get('https://juliemr.github.io/protractor-demo/');

    element(by.model('first')).sendKeys(20);
    element(by.model('second')).sendKeys(20);
    element(by.id('gobutton')).click();

    element(by.binding('latest')).getText().then(function(result){
      console.log("Sum of 2 numbers is " + result);
    });

      expect(element(by.binding('latest')).getText()).toEqual('40')

  });



  it('Substraction of two numbers', function() {
    browser.get('https://juliemr.github.io/protractor-demo/');

    element(by.model('first')).sendKeys(40);
    element(by.model('operator')).element(by.css("option[value='SUBTRACTION']")).click();
    element(by.model('second')).sendKeys(20);
    element(by.id('gobutton')).click();

    element(by.binding('latest')).getText().then(function(result){
      console.log("Substraction of 2 numbers is " + result);
    });

      expect(element(by.binding('latest')).getText()).toEqual('20')

  });

});
