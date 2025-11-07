import CatalogPage from '../pages/catalog.page.js';
import ProductPage from '../pages/product.page.js';
import ShoppingCartPage from '../pages/shoppingCart.page.js';

describe("Shopping Cart App", function(){
    it("Add Multiple Products From Different Categories To The Cart", async function(){

        await CatalogPage.selectCategory("Desktop Computers");
        await CatalogPage.waitForCategoryDisplayed();

        await CatalogPage.selectItemByIndexAndStatus(0, "Available");
        await ProductPage.waitForPageLoaded();

        await ProductPage.addProductToCart();

        await CatalogPage.clickBackButton();
        await CatalogPage.waitForPageLoaded();

        await CatalogPage.selectCategory("Accessories");
        await CatalogPage.waitForCategoryDisplayed();

        await CatalogPage.selectItemByIndexAndStatus(9, "Available");
        await ProductPage.waitForPageLoaded();

        const itemQuantity = 4;
        for (let i = 0; i < itemQuantity; i++) {
            await ProductPage.addProductToCart();
        }

        await ProductPage.showShoppingCart();
        await ShoppingCartPage.waitForPageLoaded();

        const firstProductQuantity = await ShoppingCartPage.getQuantityForProductFromShoppingCart(firstProductName);
        await common.assertion.expectEqual(firstProductQuantity, 1);

        const secondProductQuantity = await ShoppingCartPage.getQuantityForProductFromShoppingCart(secondProductName);
        await common.assertion.expectEqual(secondProductQuantity, itemQuantity);
                
    });        
});