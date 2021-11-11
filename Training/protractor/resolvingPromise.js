describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get('http://www.angularjs.org');

    browser.sleep(10000).then(function(){
      console.log("Last line in the Test!!!");
    })
  });
});
