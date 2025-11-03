    
class HomePage {
     
    //page locators:
     
    //page actions:  
    async open () {
        await browser.url('/test-resources/sap/m/demokit/cart/webapp/index.htm')
    } 
    
}
     
module.exports = new HomePage();