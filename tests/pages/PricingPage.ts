import { expect, Page, Locator } from "@playwright/test";


export class PricingPage {
    readonly forPowerBiGroup: Locator;
    readonly forOfficeGroup: Locator;
    readonly aiGroup: Locator;

    constructor(private page: Page) {
        this.page = page;

        // Zebra Bi for Power Bi group selector
        this.forPowerBiGroup = this.page.locator('#div_block-36-146325');

        // Zebra Bi for office group selector
        this.forOfficeGroup = this.page.locator('#div_block-41-146325');

        // Zebra Ai group selector
        this.aiGroup = this.page.locator('#div_block-46-146325');
    }

    async goto() {
        await this.page.goto('/pricing/');
    }

    async validateForPowerBiGroup() {
        // validate "Zebra Bi for Power Bi" group
        await expect(this.forPowerBiGroup, 'Zebra Bi for Power Bi group should be visible.').toBeVisible();
        // validate "Zebra Bi for Power Bi" have heading in section
        await expect(this.forPowerBiGroup.getByRole('heading', { name: 'Zebra BI for Power BI', exact: true }), 'For Power Bi group, should have heading').toBeVisible();
        // validate "Zebra Bi for Power Bi", have see the pricing plans in section
        await expect(this.forPowerBiGroup.getByRole('link', { name: 'See the Pricing Plans', exact: true }), 'For Power Bi group, should have a "See the Pricing Plans" button').toBeVisible();
    }

    async validateForOfficeGroup() {
        // validate "Zebra Bi for Office" group
        await expect(this.forOfficeGroup, 'Zebra Bi for Office group should be visible.').toBeVisible();
        // validate "Zebra Bi for Office" have heading in section
        await expect(this.forOfficeGroup.getByRole('heading', { name: 'Zebra BI for Office', exact: true }), 'For Office group, should have heading').toBeVisible();
        // validate "Zebra Bi for Power Bi", have get started for free button in section
        await expect(this.forOfficeGroup.getByRole('link', { name: 'See the Pricing Plans', exact: true }), 'For Office group, should have a "See the Pricing Plans" button').toBeVisible();
    }

    async validateAiGroup() {
        // validate "Zebra Ai group
        await expect(this.aiGroup, 'Zebra Ai group should be visible.').toBeVisible();
        // validate "Zebra Ai" have heading in section
        await expect(this.aiGroup.getByRole('heading', { name: 'Zebra AI', exact: true }), 'Ai group, should have heading').toBeVisible();
        // validate "Zebra Ai", have get started for free button in section
        await expect(this.aiGroup.getByRole('link', { name: 'See the Pricing Plans', exact: true }), 'Ai group, should have a "See the Pricing Plans" button').toBeVisible();
    }
}