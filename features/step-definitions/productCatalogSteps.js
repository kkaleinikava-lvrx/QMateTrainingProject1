import { Given, When, Then } from '@wdio/cucumber-framework';
import CatalogPage from '../../pages/catalog.page.js';
import HomePage from '../../pages/home.page.js';
import ProductPage from '../../pages/product.page.js';
import ShoppingCartPage from '../../pages/shoppingCart.page.js';

const itemsAddedToCartMap = new Map();

Given ('Home page is open', async function() {
    await HomePage.open();
    await HomePage.waitForPageLoaded();
    itemsAddedToCartMap.clear();
});

When ('Select category {string}', async function(categoryName) {
    await CatalogPage.selectCategory(categoryName);
    await CatalogPage.waitForCategoryDisplayed();
});

When ('Filter by availabilty status {string}', async function(status) {
    await CatalogPage.clickFilterButton();
    await CatalogPage.selectFilter("Availability");
    await CatalogPage.selectFilterOption(status);
    await browser.takeScreenshot();
    await CatalogPage.clickOkButton();
    await CatalogPage.waitForProductListDisplayed();
});

When ('Add top item from catalog to cart {int} time(s)', {timeout: 90000}, async function(itemQuantity) {
    await CatalogPage.selectItemByIndex(0);
    await ProductPage.waitForPageLoaded();
    
    const isProductOutOfStock = (await ProductPage.getProductStatus() === "Out of Stock");
    for (let i = 0; i < itemQuantity; i++) {
        await ProductPage.addProductToCart();
        if (isProductOutOfStock) {
            await ui5.confirmationDialog.clickOk();
        }
    }

    const productDetails = { 
        name: await ProductPage.getProductName(), 
        quantity: itemQuantity, 
        price: await ProductPage.getProductPrice() 
    }
    const itemKey =  productDetails.name + productDetails.price;
    if (itemsAddedToCartMap.has(itemKey)) {
        productDetails.quantity = itemsAddedToCartMap.get(itemKey).quantity + itemQuantity;
    }
    itemsAddedToCartMap.set(itemKey, productDetails);
});

When ('Go back to home page', async function() {
    await CatalogPage.clickBackButton();
    await HomePage.waitForPageLoaded();
});

When ('Search for product {string}', async function(productName) {
    await CatalogPage.searchForProduct(productName);
    await CatalogPage.waitForProductListDisplayed();
});

When ('Open cart', async function() {
    await ProductPage.showShoppingCart();
    await ShoppingCartPage.waitForPageLoaded();
});

Then ('Verify products in cart', async function() {
    await common.assertion.expectEqual(itemsAddedToCartMap.size, await ShoppingCartPage.getQuantityOfItemsInShoppingCart());
    for (let item of itemsAddedToCartMap) {
        await common.assertion.expectEqual(item[1].quantity, 
            await ShoppingCartPage.getQuantityForProductFromShoppingCart(item[1].name, item[1].price));
    }
});