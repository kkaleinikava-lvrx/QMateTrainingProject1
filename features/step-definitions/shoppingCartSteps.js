import { Given, When, Then } from '@wdio/cucumber-framework';
import CatalogPage from '../../pages/catalog.page.js';
import CheckoutPage from '../../pages/checkout.page.js';
import HomePage from '../../pages/home.page.js';
import ProductPage from '../../pages/product.page.js';
import ShoppingCartPage from '../../pages/shoppingCart.page.js';

Given ('I can see Shopping cart home screen', async function() {
    await HomePage.waitForPageLoaded();
});

Given ('I can see Catalog', async function() {
    await CatalogPage.waitForPageLoaded();
});

When ('I select category', async function() {
    await CatalogPage.selectCategory("Mice");
});

Then ('I can see category screen', async function() {
    await CatalogPage.waitForCategoryDisplayed();
});