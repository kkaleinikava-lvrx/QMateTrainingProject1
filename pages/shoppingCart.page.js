class ShoppingCartPage {
     
    //page locators:
    static PAGE_TITLE_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Cart",
            "metadata": "sap.m.Title",
            "id": "*page-title"
        }
    }

    static PROCEED_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Cart",
            "metadata": "sap.m.Button",
            "id": "*proceedButton"
        }
    }

    //page actions:  
    async clickProceedButton() {

        await ui5.userInteraction.click(ShoppingCartPage.PROCEED_BUTTON_SELECTOR);  

    }
    
    async waitForPageLoaded () {

        await ui5.element.waitForAll(ShoppingCartPage.PAGE_TITLE_SELECTOR);
        
    }
    
}
     
export default new ShoppingCartPage();