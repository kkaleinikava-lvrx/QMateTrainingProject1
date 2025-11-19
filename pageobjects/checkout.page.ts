import { BasePage } from './basePage.ts';

class CheckoutPage extends BasePage {

    static readonly CARDHOLDER_NAME_INPUT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Input",
            "id": "*creditCardHolderName"
        }
    }

    static readonly CARD_EXPIRATION_DATE_INPUT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.DatePicker",
            "id": "*creditCardExpirationDate"  
        }
    }

    static readonly CARD_NUMBER_INPUT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.MaskInput",
            "id": "*creditCardNumber"
            
        }
    }

    static readonly CARD_SECURITY_CODE_INPUT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.MaskInput",
            "id": "*creditCardSecurityNumber"   
        }
    }
    
    static readonly CREDIT_CARD_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*payViaCC-button"
        }
    }
    
    static readonly DELIVERY_TYPE_TEXT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Text",
            "id": "*selectedDeliveryMethod"
        }
    }

    static readonly EXPRESS_DELIVERY_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*expressDelivery-button"
        }
    }

    static readonly INVOICE_ADDRESS_CITY_INPUT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Input",
            "id": "*invoiceAddressCity"
        }
    }

    static readonly INVOICE_ADDRESS_COUNTRY_INPUT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Input",
            "id": "*invoiceAddressCountry"
        }
    }

    static readonly INVOICE_ADDRESS_STREET_INPUT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Input",
            "id": "*invoiceAddressAddress" 
        }
    }

    static readonly INVOICE_ADDRESS_ZIP_CODE_INPUT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Input",
            "id": "*invoiceAddressZip"
        }
    }
    
    static readonly NOTES_TEXT_AREA_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.TextArea"
        }
    }

    static readonly ORDER_COMPLETED_TEXT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.OrderCompleted",
            "metadata": "sap.m.FormattedText"
        }
    }

    static readonly ORDER_SUMMARY_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*deliveryTypeStep-nextButton"
        }
    }

    static readonly PAGE_TITLE_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Title",
            "id": "*wizardContentPage-title"
        }
    }

    static readonly RETURN_TO_SHOP_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.OrderCompleted",
            "metadata": "sap.m.Button",
            "id": "*returnToShopButton"
        }
    }

    static readonly STEP2_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*contentsStep-nextButton"    
        }
    }
    static readonly STEP3_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*paymentTypeStep-nextButton"    
        }
    }

    static readonly STEP4_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*creditCardStep-nextButton"   
        }
    }

    static readonly STEP5_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*invoiceStep-nextButton" 
        }
    }

    static readonly SUBMIT_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*submitOrder"
        }
    }

    static readonly TOTAL_TEXT_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Text",
            "text": "Total: *" 
        }
    }
    
    async clickCreditCardButton(): Promise<void> {
        await ui5.userInteraction.click(CheckoutPage.CREDIT_CARD_BUTTON_SELECTOR);
    }
    
    async clickExpressDeliveryButton(): Promise<void> {
        await ui5.userInteraction.click(CheckoutPage.EXPRESS_DELIVERY_BUTTON_SELECTOR);
    }

    async clickOrderSummaryButton(): Promise<void> {
        await ui5.userInteraction.click(CheckoutPage.ORDER_SUMMARY_BUTTON_SELECTOR);
    }

    async clickRetrunToShopButton(): Promise<void> {
        await ui5.userInteraction.click(CheckoutPage.RETURN_TO_SHOP_BUTTON_SELECTOR);
    }

    async clickStep2Button(): Promise<void> {
        await ui5.userInteraction.click(CheckoutPage.STEP2_BUTTON_SELECTOR);
    }

    async clickStep3Button(): Promise<void> {
        await ui5.userInteraction.click(CheckoutPage.STEP3_BUTTON_SELECTOR);
    }

    async clickStep4Button(): Promise<void> {
        await ui5.userInteraction.click(CheckoutPage.STEP4_BUTTON_SELECTOR);
    }

    async clickStep5Button(): Promise<void> {
        await ui5.userInteraction.click(CheckoutPage.STEP5_BUTTON_SELECTOR);
    }

    async clickSubmitButton(): Promise<void> {
        await ui5.userInteraction.click(CheckoutPage.SUBMIT_BUTTON_SELECTOR);
    }

    async confirmOrderSubmission(): Promise<void> {
        await ui5.confirmationDialog.clickYes();
    }

    async getDeliveryType(): Promise<string> {
        return await ui5.element.getPropertyValue(CheckoutPage.DELIVERY_TYPE_TEXT_SELECTOR, "text");
    }

    async getOrderCompletedText(): Promise<string> {
        return await ui5.element.getPropertyValue(CheckoutPage.ORDER_COMPLETED_TEXT_SELECTOR, "htmlText");
    }

    async getTotalAmountText(): Promise<string> {
        return await ui5.element.getPropertyValue(CheckoutPage.TOTAL_TEXT_SELECTOR, "text");
    }

    async inputCardholderName(name: string): Promise<void> {
        await ui5.userInteraction.fill(CheckoutPage.CARDHOLDER_NAME_INPUT_SELECTOR, name);
    }

    async inputCardNumber(number: string): Promise<void> {
        await ui5.userInteraction.clearAndFill(CheckoutPage.CARD_NUMBER_INPUT_SELECTOR, number);
    }

    async inputCreditCardExpirationDate(date: string): Promise<void> {
        await ui5.userInteraction.fill(CheckoutPage.CARD_EXPIRATION_DATE_INPUT_SELECTOR, date);
    }

    async inputCreditCardSecurityCode(code: string): Promise<void> {
        await ui5.userInteraction.clearAndFill(CheckoutPage.CARD_SECURITY_CODE_INPUT_SELECTOR, code);  
    }
    
    async inputInvoiceAddressCity(city: string): Promise<void> {
        await ui5.userInteraction.clearAndFill(CheckoutPage.INVOICE_ADDRESS_CITY_INPUT_SELECTOR, city);
    }
    
    async inputInvoiceAddressCountry(country: string): Promise<void> {
        await ui5.userInteraction.clearAndFill(CheckoutPage.INVOICE_ADDRESS_COUNTRY_INPUT_SELECTOR, country);
    }

    async inputInvoiceAddressStreet(streetAddress: string): Promise<void> {
        await ui5.userInteraction.clearAndFill(CheckoutPage.INVOICE_ADDRESS_STREET_INPUT_SELECTOR, streetAddress);
    }

    async inputInvoiceAddressZipCode(zipCode: string): Promise<void> {
        await ui5.userInteraction.clearAndFill(CheckoutPage.INVOICE_ADDRESS_ZIP_CODE_INPUT_SELECTOR, zipCode);
    }

    async inputNotes(notes: string): Promise<void> {
        await ui5.userInteraction.clearAndFill(CheckoutPage.NOTES_TEXT_AREA_SELECTOR, notes);
    }
    
    async waitForPageLoaded(): Promise<void> {
        await ui5.element.waitForAll(CheckoutPage.PAGE_TITLE_SELECTOR);
    }
    
}
     
export default new CheckoutPage();