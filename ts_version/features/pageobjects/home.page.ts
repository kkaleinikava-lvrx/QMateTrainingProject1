import { browser } from '@wdio/globals';
import { Page } from './page.ts';

class HomePage extends Page {

    static readonly PAGE_TITLE_SELECTOR = {
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
  
    async open(): Promise<void> {
        await browser.url('/test-resources/sap/m/demokit/cart/webapp/index.html');
    } 

    async waitForPageLoaded(): Promise<void> {
        await ui5.element.waitForAll(HomePage.PAGE_TITLE_SELECTOR);        
    }
    
}
     
export default new HomePage();