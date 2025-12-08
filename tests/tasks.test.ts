import { test, expect } from './fixture/fixture';

test.describe('Zebra Bi main task', () => {
    test('Validate Zebra Bi main page', async ({ navigationBarPage, homePage }) => {
        // go to base url "https://zebrabi.com/"
        await homePage.goto();

        // validate "Zebra BI logo" is displayed.
        await navigationBarPage.validateLogoIsVisible();

        // validate "Login" button is displayed.
        await navigationBarPage.validateLoginButtonIsVisible();

        // validate "Try Zebra BI for free" button is displayed twice (first two buttons are in viewport)
        await homePage.validateZebraBiFreeBtn()

    });
});

test.describe('Zebra Bi optional tasks', () => {
    test('Optional: Validate Zebra Bi for free pro trial products', async ({ homePage, navigationBarPage, proTrialPage }) => {
       // go to base url "https://zebrabi.com/"
        await homePage.goto();

        // click on free button
        await navigationBarPage.clickTryForFreeButton();

        // validate for Power Bi group.
        await proTrialPage.validateForPowerBiGroup();

        // validate for Office group.
        await proTrialPage.validateForOfficeGroup();

        // validate Ai group.
        await proTrialPage.validateAiGroup();

    });

    test('Optional: Validate pricing of products', async ({ homePage, navigationBarPage, pricingPage }) => {
       // go to base url "https://zebrabi.com/"
        await homePage.goto();

        // click on pricing button
        await navigationBarPage.clickPricingButton();
        
        // validate for Power Bi group.
        await pricingPage.validateForPowerBiGroup();

        // validate for Office group.
        await pricingPage.validateForOfficeGroup();

        // validate ai group.
        await pricingPage.validateAiGroup();

    });
});