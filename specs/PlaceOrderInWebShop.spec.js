import CatalogPage from '../pages/catalog.page.js';
import CheckoutPage from '../pages/checkout.page.js';
import ProductPage from '../pages/product.page.js';
import ShoppingCartPage from '../pages/shoppingCart.page.js';

describe("Shopping Cart App", function(){

    it("Select Category", async function(){
        await CatalogPage.selectMiceCategoryFromMenu();
        await CatalogPage.waitForCategoryDisplayed();        
    });
    
    it("Filer by Availability", async function(){        
        await CatalogPage.clickFilterButton();
        await CatalogPage.selectFilterByAvailability();
        await CatalogPage.selectFilterOptionAvailable();
        await CatalogPage.clickOkButton();        
    });
     
    it("Select Item", async function(){
        //select the 3rd item from the list
        await CatalogPage.selectItem(2);
        await ProductPage.waitForPageLoaded();                
    });

    it("Check Item Status", async function(){
        await ProductPage.checkProductStatus("Available");
    });
    
    it("Add Item to Cart", async function(){
        await ProductPage.addProductToCart();
    });
    
    it("Show Shopping Cart", async function(){
        await ProductPage.showShoppingCart();
        await ShoppingCartPage.waitForPageLoaded();
    });
    
    it("Proceed to Order", async function(){
        await ShoppingCartPage.clickProceedButton();
        await CheckoutPage.waitForPageLoaded();
    });
    
    it("Check Total Amount and Proceed", async function(){
        await CheckoutPage.checkIfTotalAmountTextContains(" 23,00 EUR"); 
        await CheckoutPage.clickStep2Button(); 
    });
    
    it("Choose Payment Method and Proceed", async function(){
        await CheckoutPage.clickCreditCardButton();
        await CheckoutPage.clickStep3Button();
    });
    
    it("Enter Credit Card Details and Proceed", async function(){
        await CheckoutPage.inputCardholderName("Jane Smith");
        await CheckoutPage.inputCardNumber("1122334455667788");
        await CheckoutPage.inputCreditCardSecurityCode("987");
        await CheckoutPage.inputCreditCardExpirationDate("06/2029");
        await common.userInteraction.pressEnter();
        await CheckoutPage.clickStep4Button();
    });
    
    it("Enter Invoice Address and Proceed", async function(){
        await CheckoutPage.inputInvoiceAddressStreet("Main street 12");
        await CheckoutPage.inputInvoiceAddressCity("Smalltown");
        await CheckoutPage.inputInvoiceAddressZipCode("990109");
        await CheckoutPage.inputInvoiceAddressCountry("Testcountry");
        await CheckoutPage.inputNotes("This is a test order");
        await CheckoutPage.clickStep5Button(); 
    });
    
    it("Choose Delivery Type and Proceed", async function(){
        await CheckoutPage.clickExpressDeliveryButton();
        await CheckoutPage.clickOrderSummaryButton();  
    });
    
    it("Check Order Details", async function(){
        await CheckoutPage.checkDeliveryType("Express Delivery");
    });
    
    it("Submit Order", async function(){
        await CheckoutPage.clickSubmitButton();
        await CheckoutPage.confirmOrderSubmission();
    });
    
    it("Check Order Confirmation", async function(){
        await CheckoutPage.checkIfOrderCompletedTextContains("Your order number:");
    });
    
    it("Return to Shop", async function(){
        await CheckoutPage.clickRetrunToShopButton();
    });
    
});