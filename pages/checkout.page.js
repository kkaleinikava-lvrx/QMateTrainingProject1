class CheckoutPage {
     
    //page locators:
    
    static CARDHOLDER_NAME_INPUT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Input",
            "id": "*creditCardHolderName"
        }
    }

    static CARD_EXPIRATION_DATE_INPUT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.DatePicker",
            "id": "*creditCardExpirationDate"  
        }
    }

    static CARD_NUMBER_INPUT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.MaskInput",
            "id": "*creditCardNumber"
            
        }
    }

    static CARD_SECURITY_CODE_INPUT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.MaskInput",
            "id": "*creditCardSecurityNumber"   
        }
    }
    
    static CREDIT_CARD_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*payViaCC-button"
        }
    }
    
    static DELIVERY_TYPE_TEXT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Text",
            "id": "*selectedDeliveryMethod"
        }
    }

    static EXPRESS_DELIVERY_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*expressDelivery-button"
        }
    }

    static INVOICE_ADDRESS_CITY_INPUT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Input",
            "id": "*invoiceAddressCity"
        }
    }

    static INVOICE_ADDRESS_COUNTRY_INPUT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Input",
            "id": "*invoiceAddressCountry"
        }
    }

    static INVOICE_ADDRESS_STREET_INPUT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Input",
            "id": "*invoiceAddressAddress" 
        }
    }

    static INVOICE_ADDRESS_ZIP_CODE_INPUT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Input",
            "id": "*invoiceAddressZip"
        }
    }
    
    static NOTES_TEXT_AREA_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.TextArea"
        }
    }

    static ORDER_COMPLETED_TEXT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.OrderCompleted",
            "metadata": "sap.m.FormattedText"
        }
    }

    static ORDER_SUMMARY_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*deliveryTypeStep-nextButton"
        }
    }

    static PAGE_TITLE_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Title",
            "id": "*wizardContentPage-title"
        }
    }

    static RETURN_TO_SHOP_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.OrderCompleted",
            "metadata": "sap.m.Button",
            "id": "*returnToShopButton"
        }
    }

    static STEP2_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*contentsStep-nextButton"    
        }
    }
    static STEP3_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*paymentTypeStep-nextButton"    
        }
    }

    static STEP4_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*creditCardStep-nextButton"   
        }
    }

    static STEP5_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*invoiceStep-nextButton" 
        }
    }

    static SUBMIT_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*submitOrder"
        }
    }

    static TOTAL_TEXT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Text",
            "text": "Total: *" 
        }
    }
    
    //page actions:  
    
    async checkDeliveryType(deliveryType) {
        await ui5.assertion.expectTextToBe(CheckoutPage.DELIVERY_TYPE_TEXT_SELECTOR,deliveryType);
    }

    async checkIfOrderCompletedTextContains(text) {
        await ui5.assertion.expectAttributeToContain(CheckoutPage.ORDER_COMPLETED_TEXT_SELECTOR, "htmlText", text);
    }

    async checkIfTotalAmountTextContains(amount) {
        await ui5.assertion.expectAttributeToContain(CheckoutPage.TOTAL_TEXT_SELECTOR, "text", amount);
    }

    async clickCreditCardButton() {
        await ui5.userInteraction.click(CheckoutPage.CREDIT_CARD_BUTTON_SELECTOR);
    }
    
    async clickExpressDeliveryButton() {
        await ui5.userInteraction.click(CheckoutPage.EXPRESS_DELIVERY_BUTTON_SELECTOR);
    }

    async clickOrderSummaryButton() {
        await ui5.userInteraction.click(CheckoutPage.ORDER_SUMMARY_BUTTON_SELECTOR);
    }

    async clickRetrunToShopButton() {
        await ui5.userInteraction.click(CheckoutPage.RETURN_TO_SHOP_BUTTON_SELECTOR);
    }

    async clickStep2Button() {
        await ui5.userInteraction.click(CheckoutPage.STEP2_BUTTON_SELECTOR);
    }

    async clickStep3Button() {
        await ui5.userInteraction.click(CheckoutPage.STEP3_BUTTON_SELECTOR);
    }

    async clickStep4Button() {
        await ui5.userInteraction.click(CheckoutPage.STEP4_BUTTON_SELECTOR);
    }

    async clickStep5Button() {
        await ui5.userInteraction.click(CheckoutPage.STEP5_BUTTON_SELECTOR);
    }

    async clickSubmitButton() {
        await ui5.userInteraction.click(CheckoutPage.SUBMIT_BUTTON_SELECTOR);
    }

    async confirmOrderSubmission() {
        await ui5.confirmationDialog.clickYes();
    }

    async inputCardholderName(name) {
        await ui5.userInteraction.fill(CheckoutPage.CARDHOLDER_NAME_INPUT_SELECTOR, name);
    }

    async inputCardNumber(number) {
        await ui5.userInteraction.clearAndFill(CheckoutPage.CARD_NUMBER_INPUT_SELECTOR, number);
    }

    async inputCreditCardExpirationDate(date) {
        await ui5.userInteraction.fill(CheckoutPage.CARD_EXPIRATION_DATE_INPUT_SELECTOR, date);
    }

    async inputCreditCardSecurityCode(code) {
        await ui5.userInteraction.clearAndFill(CheckoutPage.CARD_SECURITY_CODE_INPUT_SELECTOR, code);  
    }
    
    async inputInvoiceAddressCity(city) {
        await ui5.userInteraction.clearAndFill(CheckoutPage.INVOICE_ADDRESS_CITY_INPUT_SELECTOR, city);
    }
    
    async inputInvoiceAddressCountry(country) {
        await ui5.userInteraction.clearAndFill(CheckoutPage.INVOICE_ADDRESS_COUNTRY_INPUT_SELECTOR, country);
    }

    async inputInvoiceAddressStreet(streetAddress) {
        await ui5.userInteraction.clearAndFill(CheckoutPage.INVOICE_ADDRESS_STREET_INPUT_SELECTOR, streetAddress);
    }

    async inputInvoiceAddressZipCode(zipCode) {
        await ui5.userInteraction.clearAndFill(CheckoutPage.INVOICE_ADDRESS_ZIP_CODE_INPUT_SELECTOR, zipCode);
    }

    async inputNotes(notes) {
        await ui5.userInteraction.clearAndFill(CheckoutPage.NOTES_TEXT_AREA_SELECTOR, notes);
    }
    
    async waitForPageLoaded () {
        await ui5.element.waitForAll(CheckoutPage.PAGE_TITLE_SELECTOR);
    }
    
}
     
export default new CheckoutPage();