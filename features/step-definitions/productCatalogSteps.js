import { Given, When, Then, setWorldConstructor } from '@wdio/cucumber-framework';
import CatalogPage from '../../pages/catalog.page.js';
import HomePage from '../../pages/home.page.js';
import ProductPage from '../../pages/product.page.js';
import ShoppingCartPage from '../../pages/shoppingCart.page.js';

import CustomWorld from "../../classes/CustomWorld.js";

setWorldConstructor(CustomWorld);

Given ('Home page is open', async function() {
    await HomePage.open();
    await HomePage.waitForPageLoaded();
    await browser.takeScreenshot();
});

When ('Select category {string}', async function(categoryName) {
    await CatalogPage.selectCategory(categoryName);
    await CatalogPage.waitForCategoryDisplayed();
    await browser.takeScreenshot();
});

When ('Filter by availabilty status {string}', async function(status) {
    await CatalogPage.clickFilterButton();
    await CatalogPage.selectFilter("Availability");
    await CatalogPage.selectFilterOption(status);
    await browser.takeScreenshot();
    await CatalogPage.clickOkButton();
    await CatalogPage.waitForProductListDisplayed();
    await browser.takeScreenshot();
});

When ('Add top item from catalog to cart {int} time(s)', {timeout: 90000}, async function(itemQuantity) {
    await CatalogPage.selectItemByIndex(0);
    await ProductPage.waitForPageLoaded();
    
    for (let i = 0; i < itemQuantity; i++) {
        await ProductPage.addProductToCart();
    }
    await browser.takeScreenshot();

    this.addProductToDataStorage({
        name: await ProductPage.getProductName(), 
        price: await ProductPage.getProductPrice(), 
        quantity: itemQuantity
    });
});

When ('Go back to home page', async function() {
    await CatalogPage.clickBackButton();
    await HomePage.waitForPageLoaded();
    await browser.takeScreenshot();
});

When ('Search for product {string}', async function(productName) {
    await CatalogPage.searchForProduct(productName);
    await CatalogPage.waitForProductListDisplayed();
    await browser.takeScreenshot();
});

When ('Open cart', async function() {
    await ProductPage.showShoppingCart();
    await ShoppingCartPage.waitForPageLoaded();
    await browser.takeScreenshot();
});

Then ('Verify products in cart', async function() {
    const expectedItems = this.getProductsFromDataStorage();
    const actualItems = await ShoppingCartPage.getItemListInShoppongCart();
    expectedItems.sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
    actualItems.sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
    common.assertion.expectEqual(expectedItems, actualItems);
});