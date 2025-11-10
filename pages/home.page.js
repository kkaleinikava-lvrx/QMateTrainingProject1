    
class HomePage {

    static PAGE_TITLE_SELECTOR = {
        "elementProperties": {
             "viewName": "sap.ui.demo.cart.view.Welcome",
            "metadata": "sap.m.Title",
            "text": [
                {
                    "path": "i18n>welcomeHeadline"
                }
            ]
        }
    }
  
    async open () {
        await browser.url('https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/index.html')
    } 

    async waitForPageLoaded () {
        await ui5.element.waitForAll(HomePage.PAGE_TITLE_SELECTOR);        
    }
    
}
     
export default new HomePage();