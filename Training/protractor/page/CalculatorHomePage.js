let homepage = function() {

    let fn = element(by.model('first'));
    let sn = element(by.model('second'));
    let goButton = element(by.id('gobutton'));
    let result = element(by.binding('latest'));


    this.enterFNum = function(firstnum) {
        fn.sendKeys(firstnum)
    }

    this.enterSNum = function(secondNum) {
        sn.sendKeys(secondNum)
    }

    this.Go = function(res) {
        goButton.click()
        expect(result.getText()).toEqual(res)
    }
}

module.exports = new homepage()