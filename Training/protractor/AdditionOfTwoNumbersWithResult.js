describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get('https://juliemr.github.io/protractor-demo/');

    element(by.model('first')).sendKeys(20);
    element(by.model('second')).sendKeys(20);
    element(by.id('gobutton')).click();

    element(by.binding('latest')).getText().then(function(result){
      console.log("Sum of 2 numbers is " + result);
    });
  });
});
