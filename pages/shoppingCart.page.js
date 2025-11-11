class ShoppingCartPage {
     
    static CART_ENRTY_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Cart",
            "metadata": "sap.m.ObjectListItem",
            "bindingContextPath": "/cartEntries/*"
        }
    }
    
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
        
    static getCartItemSelector(productName, price) {
        if (arguments.length == 1) {
            return {
                "elementProperties": {
                    "viewName": "sap.ui.demo.cart.view.Cart",
                    "metadata": "sap.m.ObjectListItem",
                    "title": productName,
                    "bindingContextPath": "/cartEntries/*"
                }
            }

        }
        return {
            "elementProperties": {
                "viewName": "sap.ui.demo.cart.view.Cart",
                "metadata": "sap.m.ObjectListItem",
                "title": productName,
                "number": price,
                "bindingContextPath": "/cartEntries/*"
            }
        }
    }

    async clickProceedButton() {
        await ui5.userInteraction.click(ShoppingCartPage.PROCEED_BUTTON_SELECTOR);  
    }

    async getQuantityForProductFromShoppingCart(productName, price) {
        return parseInt(await ui5.control.getProperty(ShoppingCartPage.getCartItemSelector(productName, price), "intro"));
    }

    async getQuantityOfItemsInShoppingCart() {      
        const cartItemsArray = await ui5.element.getAllDisplayed(ShoppingCartPage.CART_ENRTY_SELECTOR);
        return cartItemsArray.length;
    }
    
    async waitForPageLoaded () {
        await ui5.element.waitForAll(ShoppingCartPage.PAGE_TITLE_SELECTOR);        
    }
    
}
     
export default new ShoppingCartPage();