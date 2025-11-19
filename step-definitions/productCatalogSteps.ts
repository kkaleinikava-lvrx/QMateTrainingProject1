import { Given, When, Then, setWorldConstructor } from '@wdio/cucumber-framework';
import CatalogPage from '../pageobjects/catalog.page.ts';
import HomePage from '../pageobjects/home.page.ts';
import ProductPage from '../pageobjects/product.page.ts';
import ShoppingCartPage from '../pageobjects/shoppingCart.page.ts';

import CustomWorld from "./CustomWorld.ts";
import { Product } from "../Product.ts";
import { Filter } from "../Filter.ts"

setWorldConstructor(CustomWorld);

Given ('Home page is open', async function(): Promise<void> {
    await HomePage.open();
    await HomePage.waitForPageLoaded();
    await browser.takeScreenshot();
});

When ('Select category {string}', async function(categoryName: string): Promise<void> {
    await CatalogPage.selectCategory(categoryName);
    await CatalogPage.waitForCategoryDisplayed();
    await browser.takeScreenshot();
});

When ('Filter by availabilty status {string}', async function(status: string): Promise<void> {
    await CatalogPage.clickFilterButton();
    await CatalogPage.selectFilter(Filter.Availability);
    await CatalogPage.selectFilterOption(status);
    await browser.takeScreenshot();
    await CatalogPage.clickOkButton();
    await CatalogPage.waitForProductListDisplayed();
    await browser.takeScreenshot();
});

When ('Add top item from catalog to cart {int} time(s)', {timeout: 90000}, 
  async function(itemQuantity: number): Promise<void> {
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

When ('Go back to home page', async function(): Promise<void> {
    await CatalogPage.clickBackButton();
    await HomePage.waitForPageLoaded();
    await browser.takeScreenshot();
});

When ('Search for product {string}', async function(productName: string): Promise<void> {
    await CatalogPage.searchForProduct(productName);
    await CatalogPage.waitForProductListDisplayed();
    await browser.takeScreenshot();
});

When ('Open cart', async function(): Promise<void> {
    await ProductPage.showShoppingCart();
    await ShoppingCartPage.waitForPageLoaded();
    await browser.takeScreenshot();
});

Then ('Verify products in cart', async function(): Promise<void> {
    const expectedItems: Array<Product> = this.getProductsFromDataStorage();
    const actualItems: Array<Product> = await ShoppingCartPage.getItemListInShoppongCart();
    expectedItems.sort((a: object, b: object) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
    actualItems.sort((a: object, b: object) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
    common.assertion.expectEqual(expectedItems, actualItems);
});