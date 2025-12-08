import { expect, Page, Locator } from "@playwright/test";


export class HomePage {
    readonly cookiesPopup: Locator;
    readonly cookiesAllowAllButton: Locator;
    readonly zebraBiForFreeBtn: Locator;
    readonly zebraBiNavigationForFreeBtn: Locator;

    constructor(private page: Page) {
        this.page = page;

        // cookies locators
        this.cookiesPopup = this.page.getByRole('heading', { name: 'We use cookies to give you a more personalized experience.' })
        this.cookiesAllowAllButton = this.page.getByRole('button', { name: 'Allow all' });
        
        // zebra bi for free button
        this.zebraBiForFreeBtn = this.page.getByRole('link', { name: 'Try Zebra BI for free' });
        // zebra bi for free navigation button
        this.zebraBiNavigationForFreeBtn = this.page.getByRole('link', { name: 'Try Zebra BI for free', exact: true })
        
    }

    async goto() {
        await this.page.goto('/');

        // allow all cookies if visible
        await this.allowAllCookiesIfVisible();
    }

    async allowAllCookiesIfVisible() {
        // check if this coockies exists, and dismiss them 
        try {
            // Wait up to 2 seconds for the cookies heading to become visible. If it does click "Allow all" to dismiss it.
            await this.cookiesPopup.waitFor({ state: 'visible', timeout: 2000 });

            // 
            await this.cookiesAllowAllButton.click();
            console.log('Cookie popup visible, clicked "Allow all".');
        } catch {
            // Timeout error:cookies popup did not appear in 2 seconds, continue...
            console.log('Cookie popup was not visible within 2 seconds, continuing test...');
            // just continue; do NOT rethrow
        }
    }

    async validateZebraBiFreeBtn() {
        // there are actually 3 buttons.
        await expect(this.zebraBiForFreeBtn, "There should be three buttons.").toHaveCount(3);

        // validate that first 2 buttons are visible in viewport, and third should not be in viewport
        await expect(this.zebraBiForFreeBtn.nth(0), 'First "Try Zebra BI for free" button should be visible.').toBeVisible();
        await expect(this.zebraBiForFreeBtn.nth(0), 'First "Try Zebra BI for free" button should be in viewport.').toBeInViewport();
        await expect(this.zebraBiForFreeBtn.nth(1), 'Second "Try Zebra BI for free" button should be visible.').toBeVisible();
        await expect(this.zebraBiForFreeBtn.nth(1), 'Second "Try Zebra BI for free" button should be in viewpoer.').toBeInViewport();
        // third button should not be in viewport (its on bottom of page)
        await expect(this.zebraBiForFreeBtn.nth(2), 'Third "Try Zebra BI for free" button should not be in viewport.').not.toBeInViewport();
    }

}