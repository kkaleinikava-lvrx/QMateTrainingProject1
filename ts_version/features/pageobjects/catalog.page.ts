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
            "metadata": "sap.m.ObjectListItem",
            "id": "*productList*"
        }
    }

    static PRODUCT_LIST_SELECTOR = {
        "elementProperties": {
            "metadata": "sap.m.List",
            "id": "*productList"
        }
    }

    static SEARCH_FIELD_SELECTOR = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Home",
            "metadata": "sap.m.SearchField",
            "id": "*searchField"
        }
    }

    async clickBackButton(): Promise<void> {
        await ui5.userInteraction.click(CatalogPage.BACK_BUTTON_SELECTOR);
    }

    async clickFilterButton(): Promise<void> {
        await ui5.userInteraction.click(CatalogPage.FILTER_BUTTON_SELECTOR);
    }

    async clickOkButton(): Promise<void> {
        await ui5.userInteraction.click(CatalogPage.OK_BUTTON_SELECTOR);
    }

    async getSelectedCategoryTitle(): Promise<string> {
        const categoryTitle = await ui5.element.getPropertyValue(CatalogPage.CATEGORY_TITLE_SELECTOR,"text");
        return categoryTitle;
    }
    
    async searchForProduct(searchText: string): Promise<void> {
        await ui5.userInteraction.searchFor(CatalogPage.SEARCH_FIELD_SELECTOR, searchText);
    }

    async selectCategory(categoryName: string): Promise<void> {
        const categorySelector = {
             "elementProperties": {
                "viewName": "sap.ui.demo.cart.view.Home",
                "metadata": "sap.m.StandardListItem",
                "title": categoryName
            }
        }
        await ui5.userInteraction.click(categorySelector);
    }

    async selectFilter(filterName: string): Promise<void> {
        const filterItemSelector = {
            "elementProperties": {
                "viewName": "sap.ui.demo.cart.view.Category",
                "metadata": "sap.m.StandardListItem",
                "title": filterName
            }
        }
        await ui5.userInteraction.click(filterItemSelector);
    }
    async selectFilterOption(filterOptionName: string): Promise<void> {
        const filterOptionSelector = {
            "elementProperties": {
                "viewName": "sap.ui.demo.cart.view.Category",
                "metadata": "sap.m.StandardListItem",
                "title": filterOptionName
            }
        }
        await ui5.userInteraction.click(filterOptionSelector);
    }

    async selectItemByIndex (index: number): Promise<void> {
        await ui5.userInteraction.click(CatalogPage.PRODUCT_ITEM_SELECTOR, index);
    }

    async selectItemByIndexAndStatus (index: number, status: string): Promise<void> {
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

    async selectItemByProduct (productName: string): Promise<void> {
        const productItemSelector = {
            "elementProperties": {
                "viewName": "sap.ui.demo.cart.view.Category",
                "metadata": "sap.m.ObjectListItem",
                "title": productName
            }
        }
        await ui5.userInteraction.click(productItemSelector);
    }
        
    async waitForCategoryDisplayed (): Promise<void> {
        await ui5.element.getDisplayed(CatalogPage.CATEGORY_TITLE_SELECTOR);
    }

    async waitForPageLoaded (): Promise<void> {
        await ui5.element.waitForAll(CatalogPage.CATEGORY_LIST_SELECTOR);        
    }

    async waitForProductListDisplayed (): Promise<void> {
        await ui5.element.getDisplayed(CatalogPage.PRODUCT_LIST_SELECTOR);
    }
    
}
     
export default new CatalogPage();