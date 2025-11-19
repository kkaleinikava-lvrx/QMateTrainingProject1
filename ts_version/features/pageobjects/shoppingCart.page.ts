import { Page } from './page.ts';
import { Product } from "../../classes/types.ts"

class ShoppingCartPage extends Page {
     
    static readonly CART_ENRTY_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Cart",
            "metadata": "sap.m.ObjectListItem",
            "bindingContextPath": "/cartEntries/*"
        }
    }
    
    static readonly PAGE_TITLE_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Cart",
            "metadata": "sap.m.Title",
            "id": "*page-title"
        }
    }

    static readonly PROCEED_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Cart",
            "metadata": "sap.m.Button",
            "id": "*proceedButton"
        }
    }

    async clickProceedButton(): Promise<void> {
        await ui5.userInteraction.click(ShoppingCartPage.PROCEED_BUTTON_SELECTOR);  
    }

    async getItemListInShoppongCart(): Promise<Array<Product>> {
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

    async getQuantityForProductFromShoppingCart(productName: string): Promise<number> {
        const productSelector = {
            "elementProperties": {
                "viewName": "sap.ui.demo.cart.view.Cart",
                "metadata": "sap.m.ObjectListItem",
                "title": productName,
                "bindingContextPath": "/cartEntries/*"
            }
        }
        return parseInt(await ui5.control.getProperty(productSelector, "intro"));
    }

    async getQuantityOfItemsInShoppingCart(): Promise<number> {      
        const cartItemsArray = await ui5.element.getAllDisplayed(ShoppingCartPage.CART_ENRTY_SELECTOR);
        return cartItemsArray.length;
    }
    
    async waitForPageLoaded(): Promise<void> {
        await ui5.element.waitForAll(ShoppingCartPage.PAGE_TITLE_SELECTOR);        
    }
    
}
     
export default new ShoppingCartPage();