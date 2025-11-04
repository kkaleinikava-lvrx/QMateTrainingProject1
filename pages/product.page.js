class ProductPage {
     
    //page locators:
    static ADD_TO_CART_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Product",
            "metadata": "sap.m.Button",
            "text": [
                {
                    "path": "i18n>addToCartShort"
                }
            ]
        }
    }

    static LOGIN_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Product",
            "metadata": "sap.m.Button",
            "tooltip": [
                {
                    "path": "i18n>avatarButtonTooltip"
                }
            ]
        }
    }
    
    static PRODUCT_IMAGE_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Product",
            "metadata": "sap.m.ToggleButton",
            "tooltip": [
                {
                    "model": "i18n",
                    "path": "toCartButtonTooltip",
                    "value": "Show Shopping Cart",
                    "type": "string"
                }
            ]
        }
    }

    static PRODUCT_STATUS_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Product",
            "metadata": "sap.m.ObjectStatus"
        }
    }

    static SHOW_SHOPPING_CART_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Product",
            "metadata": "sap.m.ToggleButton",
            "tooltip": [
                {
                    "model": "i18n",
                    "path": "toCartButtonTooltip",
                    "value": "Show Shopping Cart",
                    "type": "string"
                }
            ]
        }
    }

     
    //page actions:  
    
    async addProductToCart() {
        await ui5.userInteraction.click(ProductPage.ADD_TO_CART_BUTTON_SELECTOR);
    }

    async checkProductStatus(status) {
        await ui5.assertion.expectAttributeToBe(ProductPage.PRODUCT_STATUS_SELECTOR, "text", status);
    }

    async login() {
        await ui5.userInteraction.click(ProductPage.LOGIN_BUTTON_SELECTOR);
    }
    
    async showShoppingCart() {
        await ui5.userInteraction.click(ProductPage.SHOW_SHOPPING_CART_BUTTON_SELECTOR);
    }

    async waitForPageLoaded () {
        await ui5.element.getDisplayed(ProductPage.PRODUCT_IMAGE_SELECTOR);        
    }

}
     
export default new ProductPage();