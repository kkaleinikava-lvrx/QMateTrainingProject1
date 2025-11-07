class CatalogPage {

    static BACK_BUTTON_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Category",
            "metadata": "sap.m.Button",
            "type": "Back"
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

    async clickBackButton() {
        await ui5.userInteraction.click(CatalogPage.BACK_BUTTON_SELECTOR);
    }

    async clickFilterButton() {
        await ui5.userInteraction.click(CatalogPage.FILTER_BUTTON_SELECTOR);
    }

    async clickOkButton() {
        await ui5.userInteraction.click(CatalogPage.OK_BUTTON_SELECTOR);
    }

    async getSelectedCategoryTitle() {
        const categoryTitle = await ui5.element.getPropertyValue(CatalogPage.CATEGORY_TITLE_SELECTOR,"text");
        return categoryTitle;
    }
    
    async selectCategory(categoryName) {
        const categorySelector = {
             "elementProperties": {
                "viewName": "sap.ui.demo.cart.view.Home",
                "metadata": "sap.m.StandardListItem",
                "title": categoryName
            }
        }
        await ui5.userInteraction.click(categorySelector);
    }

    async selectFilter(filterName) {
        const filterItemSelector = {
            "elementProperties": {
                "viewName": "sap.ui.demo.cart.view.Category",
                "metadata": "sap.m.StandardListItem",
                "title": filterName
            }
        }
        await ui5.userInteraction.click(filterItemSelector);
    }
    async selectFilterOption(filterOptionName) {
        const filterOptionSelector = {
            "elementProperties": {
                "viewName": "sap.ui.demo.cart.view.Category",
                "metadata": "sap.m.StandardListItem",
                "title": filterOptionName
            }
        }
        await ui5.userInteraction.click(filterOptionSelector);
    }

    async selectItemByIndex (index) {
        await ui5.userInteraction.click(CatalogPage.PRODUCT_ITEM_SELECTOR, index);
    }

    async selectItemByIndexAndStatus (index, status) {
        const itemSelector = {
            "elementProperties": {
                "viewName": "sap.ui.demo.cart.view.Category",
                "metadata": "sap.m.ObjectListItem"
            },
            "descendantProperties": { 
                "viewName": "sap.ui.demo.cart.view.Category",
                "metadata": "sap.m.ObjectStatus",
                "text": status
            }
        }
        await ui5.userInteraction.click(itemSelector, index);
    }

    async selectItemByProduct (productName) {
        const productItemSelector = {
            "elementProperties": {
                "viewName": "sap.ui.demo.cart.view.Category",
                "metadata": "sap.m.ObjectListItem",
                "title": productName
            }
        }
        await ui5.userInteraction.click(productItemSelector);
    }
        
    async waitForCategoryDisplayed () {
        await ui5.element.getDisplayed(CatalogPage.CATEGORY_TITLE_SELECTOR);
    }

    async waitForPageLoaded () {
        await ui5.element.waitForAll(CatalogPage.CATEGORY_LIST_SELECTOR);        
    }
    
}
     
export default new CatalogPage();