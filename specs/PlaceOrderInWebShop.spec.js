
describe("Shopping Cart App", function(){

    it("Check if the app opened", async function(){

        const homePageTitleSelector = {
            "elementProperties": {
                "viewName": "sap.ui.demo.cart.view.Welcome",
                "metadata": "sap.m.Title",
                "text": [
                    {
                        "path": "i18n>welcomeHeadline"
                    }
                ]
            }
        }

        await ui5.assertion.expectTextToBe(homePageTitleSelector, "Welcome to the Shopping Cart");
        
    });
});