class CatalogPage {
     
    //page locators:

    static AVAILABILITY_LIST_ITEM_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Category",
            "metadata": "sap.m.StandardListItem",
            "title": "Availability"
        }
    }

    static AVAILABLE_LIST_ITEM_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Category",
            "metadata": "sap.m.CheckBox"
        },
        "ancestorProperties": {
            "viewName": "sap.ui.demo.cart.view.Category",
            "metadata": "sap.m.StandardListItem",
            "title": "Available"
        }
    }

    static CATEGORY_LIST_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Home",
            "metadata": "sap.m.List",
            "id": "*categoryList"
        }
    }

    static CATEGORY_TITLE_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Category",
            "metadata": "sap.m.Title",
            "id": "*page-title"
        }
    }

    static FILTER_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Category",
            "metadata": "sap.m.Button",
            "id": "*masterListFilterButton"
        }
    }

    static MICE_CATEGORY_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Home",
            "metadata": "sap.m.StandardListItem",
            "bindingContextPath": "/ProductCategories*'MI')"
        }
    }

    static OK_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Category",
                "metadata": "sap.m.Button",
                "id": "*categoryFilterDialog-acceptbutton"
        }
    }

    static PRODUCT_ITEM_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Category",
            "metadata": "sap.m.ObjectListItem"
        }
    }


    //page actions:  
    
    async selectMiceCategoryFromMenu() {

        await ui5.userInteraction.click(CatalogPage.MICE_CATEGORY_SELECTOR);

    }

    async clickFilterButton() {

        await ui5.userInteraction.click(CatalogPage.FILTER_BUTTON_SELECTOR);

    }

    async selectFilterByAvailability() {

        await ui5.userInteraction.click(CatalogPage.AVAILABILITY_LIST_ITEM_SELECTOR);

    }

    async selectFilterOptionAvailable() {

        await ui5.userInteraction.click(CatalogPage.AVAILABLE_LIST_ITEM_SELECTOR);

    }

    async clickOkButton() {

        await ui5.userInteraction.click(CatalogPage.OK_BUTTON_SELECTOR);

    }
    
    async selectItem (number) {

        await ui5.userInteraction.click(CatalogPage.PRODUCT_ITEM_SELECTOR, number);

    }

    async waitForCategoryDisplayed () {

        await ui5.element.getDisplayed(CatalogPage.CATEGORY_TITLE_SELECTOR);

    }

    async waitForPageLoaded () {

        await ui5.element.waitForAll(CatalogPage.CATEGORY_LIST_SELECTOR);
        
    }
    
}
     
export default new CatalogPage();