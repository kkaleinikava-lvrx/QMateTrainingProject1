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
        const cartItemSelector = {
            "elementProperties": {
                "viewName": "sap.ui.demo.cart.view.Cart",
                "metadata": "sap.m.ObjectListItem",
                "title": productName,
                "bindingContextPath": "/cartEntries/*"
            }
        }
        if (arguments.length == 1) {
            return cartItemSelector;
        }
        
        cartItemSelector.number = price;
        return cartItemSelector;
    }

    async clickProceedButton() {
        await ui5.userInteraction.click(ShoppingCartPage.PROCEED_BUTTON_SELECTOR);  
    }

    async getItemListInShoppongCart() {
        const itemsInCartArray = new Array();
        for (let i = 0; i < await this.getQuantityOfItemsInShoppingCart(); i++) {
            itemsInCartArray.push({ 
                name: await ui5.element.getPropertyValue(ShoppingCartPage.CART_ENRTY_SELECTOR, "title", i), 
                price: await ui5.element.getPropertyValue(ShoppingCartPage.CART_ENRTY_SELECTOR, "number", i),
                quantity: parseInt(await ui5.element.getPropertyValue(ShoppingCartPage.CART_ENRTY_SELECTOR, "intro", i))
            });
        }
        return itemsInCartArray;
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