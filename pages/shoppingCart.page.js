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

    async clickProceedButton() {
        await ui5.userInteraction.click(ShoppingCartPage.PROCEED_BUTTON_SELECTOR);  
    }

    async getItemListInShoppongCart() {
        const itemsInCartArray = [];
        for (let i = 0; i < await this.getQuantityOfItemsInShoppingCart(); i++) {
            itemsInCartArray.push({ 
                name: await ui5.element.getPropertyValue(ShoppingCartPage.CART_ENRTY_SELECTOR, "title", i), 
                price: await ui5.element.getPropertyValue(ShoppingCartPage.CART_ENRTY_SELECTOR, "number", i),
                quantity: parseInt(await ui5.element.getPropertyValue(ShoppingCartPage.CART_ENRTY_SELECTOR, "intro", i))
            });
        }
        return itemsInCartArray;
    }

    async getQuantityForProductFromShoppingCart(productName) {
        const productSelector = {
            "elementProperties": {
                "viewName": "sap.ui.demo.cart.view.Cart",
                "metadata": "sap.m.ObjectListItem",
                "title": productName,
                "bindingContextPath": "/cartEntries/*"
            }
        }
        const quantityString = await ui5.control.getProperty(productSelector, "intro");
        return parseInt(quantityString);
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