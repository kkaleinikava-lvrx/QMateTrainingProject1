import { expect, browser, $ } from '@wdio/globals'

describe('Simple navigation app', () => {
    /*
    it('should login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)

        await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()

        await expect($('#flash')).toBeExisting()
        await expect($('#flash')).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    }) */
    it('Open URL in browser', async() =>{
        await common.navigation.navigateToUrl("https://sapui5.hana.ondemand.com/test-resources/sap/ui/core/demokit/tutorial/navigation/17/webapp/index.html?sap-ui-theme=sap_horizon");
        //await ui5.navigation.navigateToApplication("masterDetail-display");
        await util.browser.sleep(30000);
        const selector = {
            "elementProperties": {
            "metadata": "sap.m.Button",
            "text": "Go"
        }
        };
        
        await ui5.element.waitForAll(selector);
        await ui5.userInteraction.click(selector);
        await util.browser.sleep(30000);
        

        
    });
    /*it("Click on Go button", async function(){
        const selector = {
            "elementProperties": {
            "metadata": "sap.m.Button"//,
            //"text": "Go"
        }
        };
        const elem = await nonUi5.element.getByClass("sapMBtnBase sapMBtn sapMBtnInverted sapUiCompFilterBarPaddingRightBtn");
        await nonUi5.userInteraction.click(elem);
        await ui5.userInteraction.click(selector);
        await util.browser.sleep(30000);
    });*/

})

