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

    // Print the total number of rows
    element.all(by.repeater('result in memory')).count().then(function(count){
      console.log("Total number of Rows displayed " + count);
    });
   
    // print the date and time of first row
    element.all(by.repeater('result in memory')).first().element(by.binding('result.timestamp')).getText().then(function(dateandtime){
      console.log(`Date and time of a first Row ${dateandtime}`);
    });
    // print the date and time of all rows
    element.all(by.repeater('result in memory')).all(by.binding('result.timestamp')).getText().then(function(time){
      console.log('Time is '+time);
    })

    // print the second row date and time
    element.all(by.repeater('result in memory')).get(1).element(by.binding('result.timestamp')).getText().then(function(dateandtime){
      console.log(`Date and time of a Second Row ${dateandtime}`);
    });

    // print all rows in the table 
    element.all(by.repeater('result in memory')).each(function(element,index){
      element.getText().then(function(row){
        console.log(`Index ${index} has ${row}`);
      })
    })

  });


});
