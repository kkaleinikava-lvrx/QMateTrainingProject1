import { Given, When, Then } from '@wdio/cucumber-framework';
import CatalogPage from '../../pages/catalog.page.js';
import HomePage from '../../pages/home.page.js';
import ProductPage from '../../pages/product.page.js';
import ShoppingCartPage from '../../pages/shoppingCart.page.js';

let itemsAddedToCartMap = new Map();

Given ('Home page is open', async function() {
    await HomePage.open();
    await HomePage.waitForPageLoaded();
    itemsAddedToCartMap.clear();
});

When ('Select category {string}', async function(categoryName) {
    await CatalogPage.selectCategory(categoryName);
});

When ('Filter by availabilty status {string}', async function(status) {
    await CatalogPage.clickFilterButton();
    await CatalogPage.selectFilter("Availability");
    await CatalogPage.selectFilterOption(status);
    await CatalogPage.clickOkButton();
});

When ('Add top item from catalog to cart {int} time(s)', async function(quantity) {
    await CatalogPage.selectItemByIndex(0);
    await ProductPage.waitForPageLoaded();
    const productName =  await ProductPage.getProductName();
    const isProductOutOfStock = await ProductPage.getProductStatus() === "Out of Stock";
    let productDetails = { quantity: quantity, price: await ProductPage.getProductPrice() };
    for (let i = 0; i < quantity; i++) {
        await ProductPage.addProductToCart();
        if (isProductOutOfStock) {
            await ui5.confirmationDialog.clickOk();
        }
    }
    if (itemsAddedToCartMap.has(productName)) {
        productDetails.quantity = itemsAddedToCartMap.get(productName).quantity + quantity;
    }
    itemsAddedToCartMap.set(productName, productDetails);
});

When ('Go back to home page', async function() {
    await CatalogPage.clickBackButton();
    await HomePage.waitForPageLoaded();
});

When ('Search for product {string}', async function(productName) {
    await CatalogPage.searchForProduct(productName);
});

When ('Display cart', async function() {
    await ProductPage.showShoppingCart();
    await ShoppingCartPage.waitForPageLoaded();
});

Then ('Verify products in cart', async function() {
    await common.assertion.expectEqual(itemsAddedToCartMap.size, await ShoppingCartPage.getQuantityOfItemsInShoppingCart());
    for (let entry of itemsAddedToCartMap) {
        await common.assertion.expectEqual(entry[1].quantity, await ShoppingCartPage.getQuantityForProductFromShoppingCart(entry[0]));
        await common.assertion.expectEqual(entry[1].price, await ShoppingCartPage.getPriceForProductFromShoppingCart(entry[0]));
    }
});