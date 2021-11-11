describe('angularjs homepage', function () {

  function operation(a, b, operation) {
    element(by.model('first')).sendKeys(a);
    element(by.model('operator')).element(by.css("option[value='" + operation + "']")).click();
    element(by.model('second')).sendKeys(b);
    element(by.id('gobutton')).click();
    element(by.binding('latest')).getText().then(function (result) {
      console.log(`Result of ${operation} is  ${result}`);
    });
    
  }

  it('Addition of two numbers1', function () {
    browser.get('https://juliemr.github.io/protractor-demo/');

    operation(40, 20, 'SUBTRACTION');

    expect(element(by.binding('latest')).getText()).toEqual('20')
  });

  it('Addition of two numbers2', function () {
    browser.get('https://juliemr.github.io/protractor-demo/');


    operation(40, 20, 'ADDITION');


    expect(element(by.binding('latest')).getText()).toEqual('60')
  })

  it('Addition of two numbers3', function () {
    browser.get('https://juliemr.github.io/protractor-demo/');


    operation(40, 20, 'MULTIPLICATION');

    expect(element(by.binding('latest')).getText()).toEqual('222')

  });


});
