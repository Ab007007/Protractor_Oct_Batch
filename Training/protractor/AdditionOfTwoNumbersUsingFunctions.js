describe('angularjs homepage', function() {

  function operation(a,b,operation)
  {
    element(by.model('first')).sendKeys(40);
    element(by.model('operator')).element(by.css("option[value='"+ operation +"']")).click();
    element(by.model('second')).sendKeys(20);
    element(by.id('gobutton')).click();
    element(by.binding('latest')).getText().then(function(result){
      console.log(`Result of ${operation} is  ${result}`);
    });

  }
  it('Addition of two numbers', function() {
    browser.get('https://juliemr.github.io/protractor-demo/');

    operation(40,20,'SUBTRACTION');
    operation(40,20,'ADDITION');
    operation(40,20,'MULTIPLICATION');

   
  });


});
