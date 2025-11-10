class ProductPage {
     
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

    static PRODUCT_NAME_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Product",
            "metadata": "sap.m.Text",
            "id": "*titleText"
        }
    }

    static PRODUCT_PRICE_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Product",
            "metadata": "sap.m.ObjectNumber"
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

    async addProductToCart() {
        await ui5.userInteraction.click(ProductPage.ADD_TO_CART_BUTTON_SELECTOR);
    }

    async getProductName() {
        return await ui5.element.getPropertyValue(ProductPage.PRODUCT_NAME_SELECTOR, "text");
    }

    async getProductPrice() {
        return await ui5.element.getPropertyValue(ProductPage.PRODUCT_PRICE_SELECTOR, "number");
    }

    async getProductStatus() {
        return await ui5.element.getPropertyValue(ProductPage.PRODUCT_STATUS_SELECTOR, "text");
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