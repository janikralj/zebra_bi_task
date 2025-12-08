import { expect, Page, Locator } from "@playwright/test";


export class NavigationBarPage {
    readonly logoImg: Locator;
    readonly pricingBtn: Locator;
    readonly loginBtn: Locator;
    readonly tryForFreeBtn: Locator;

    constructor(private page: Page) {
        this.page = page;

        // logo img
        // this.logoImg = this.page.getByTestId('link-2558-33809').locator('//[@id="image-2559-33zeb809"]');
        this.logoImg = this.page.locator('img.zebra-bi-logo');
        // pricing button
        this.pricingBtn = this.page.locator('#-mega-dropdown-2999-148497', { hasText: 'Pricing'});
        // login button
        this.loginBtn = this.page.getByRole('link', { name: 'Login' });
        // zebra bi for free navigation button
        this.tryForFreeBtn = this.page.getByRole('link', { name: 'Try Zebra BI for free', exact: true });
    }

    async validateLogoIsVisible() {
        // validate "Login" button is visible
        await expect(this.logoImg, 'Logo image should be visible.').toBeVisible();
    }

    async validateLoginButtonIsVisible() {
        // validate "Login" button is visible
        await expect(this.loginBtn, 'Login button should be visible.').toBeVisible();
    }

    async clickTryForFreeButton() {
        // click on first available button
        await this.tryForFreeBtn.click();
    }

    async clickPricingButton() {
        // click on first available button
        await this.pricingBtn.click();
    }
}