import { Page } from './page.ts';

class ProductPage extends Page {
     
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
    
    static PRODUCT_IMAGE_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Product",
            "metadata": "sap.m.Image",
            "id": "*productImage"
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

    async addProductToCart(): Promise<void> {
        await this.clickAddToCartButton();
        if (await this.getProductStatus() === "Out of Stock") {
            await ui5.confirmationDialog.clickOk();
        }
    }

    async clickAddToCartButton(): Promise<void> {
        await ui5.userInteraction.click(ProductPage.ADD_TO_CART_BUTTON_SELECTOR);
    }

    async getProductName(): Promise<string> {
        return await ui5.element.getPropertyValue(ProductPage.PRODUCT_NAME_SELECTOR, "text");
    }

    async getProductPrice(): Promise<string> {
        return await ui5.element.getPropertyValue(ProductPage.PRODUCT_PRICE_SELECTOR, "number");
    }

    async getProductStatus(): Promise<string> {
        return await ui5.element.getPropertyValue(ProductPage.PRODUCT_STATUS_SELECTOR, "text");
    }
    
    async showShoppingCart(): Promise<void> {
        await ui5.userInteraction.click(ProductPage.SHOW_SHOPPING_CART_BUTTON_SELECTOR);
    }

    async waitForPageLoaded(): Promise<void> {
        await ui5.element.getDisplayed(ProductPage.PRODUCT_IMAGE_SELECTOR);        
    }

}
     
export default new ProductPage();