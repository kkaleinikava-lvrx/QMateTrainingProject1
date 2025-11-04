    
class HomePage {
     
    //page locators:
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
     
    //page actions:  
    async open () {
        await browser.url('/test-resources/sap/m/demokit/cart/webapp/index.htm')
    } 

    async waitForPageLoaded () {
        await ui5.element.waitForAll(HomePage.PAGE_TITLE_SELECTOR);        
    }
    
}
     
module.exports = new HomePage();