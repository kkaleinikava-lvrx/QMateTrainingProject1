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

When ('I select category {string}', async function(categoryName) {
    await CatalogPage.selectCategory(categoryName);
});

When ('I select item {int}', async function(itemIndex) {
    await CatalogPage.selectItemByIndex(itemIndex - 1);
    await ProductPage.waitForPageLoaded();
});

When ('I add product to cart from the detailed view', async function() {
    await ProductPage.addProductToCart();
});

When ('I open shopping cart', async function() {
    await ProductPage.showShoppingCart();
    await ShoppingCartPage.waitForPageLoaded();
});

When ('I proceed to checkout', async function() {
    await ShoppingCartPage.clickProceedButton();
    await CheckoutPage.waitForPageLoaded();
});

When ('I review order details and proceed', async function() {
    const totalAmountText = await CheckoutPage.getTotalAmountText();
    const totalAmount = parseFloat(totalAmountText.substring(7));
    await common.assertion.expectTrue(totalAmount > 0);
    await CheckoutPage.clickStep2Button();
});

When ('I choose Payment method and proceed', async function() {
    await CheckoutPage.clickCreditCardButton();
    await CheckoutPage.clickStep3Button();
});

When ('I enter credit card details and proceed', async function() {
    await CheckoutPage.inputCardholderName("Jane Smith");
    await CheckoutPage.inputCardNumber("1122334455667788");
    await CheckoutPage.inputCreditCardSecurityCode("987");
    await CheckoutPage.inputCreditCardExpirationDate("06/2029");
    await common.userInteraction.pressEnter();
    await CheckoutPage.clickStep4Button();
});

When ('I enter invoice address and proceed', async function() {
    await CheckoutPage.inputInvoiceAddressStreet("Main street 12");
    await CheckoutPage.inputInvoiceAddressCity("Smalltown");
    await CheckoutPage.inputInvoiceAddressZipCode("990109");
    await CheckoutPage.inputInvoiceAddressCountry("Testcountry");
    await CheckoutPage.inputNotes("This is a test order");
    await CheckoutPage.clickStep5Button();
});

When ('I choose delivery type and proceed', async function() {
    await CheckoutPage.clickExpressDeliveryButton();
    await CheckoutPage.clickOrderSummaryButton();
});

When ('I submit order', async function() {
    await CheckoutPage.clickSubmitButton();
    await CheckoutPage.confirmOrderSubmission();
});

Then ('I can see order confirmation', async function() {
    const orderNumber = (await CheckoutPage.getOrderCompletedText()).match("Your order number: ([0-9]+)")[1];
    await common.assertion.expectDefined(orderNumber);
});

Then ('I can see category {string} screen', async function(categoryName) {
    await CatalogPage.waitForCategoryDisplayed();
    const selectedCategoryName = await CatalogPage.getSelectedCategoryTitle();
    await common.assertion.expectEqual(selectedCategoryName, categoryName);
});