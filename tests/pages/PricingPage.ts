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

    async validatePricingGroup(groupLocator: Locator, headingText: string) {
        // Validate group is visible
        await expect(groupLocator, `${headingText} group should be visible.`).toBeVisible();

        // Validate heading inside group
        await expect(groupLocator.getByRole('heading', { name: headingText, exact: true }), `${headingText} group should have heading.`).toBeVisible();

        // Validate "See the Pricing Plans" button inside group
        await expect(groupLocator.getByRole('link', { name: 'See the Pricing Plans', exact: true }), `${headingText} group should have a "See the Pricing Plans" button.`).toBeVisible();
    }

    async validateForPowerBiGroup() {
        await this.validatePricingGroup(this.forPowerBiGroup, 'Zebra BI for Power BI');
    }

    async validateForOfficeGroup() {
        await this.validatePricingGroup(this.forOfficeGroup, 'Zebra BI for Office');
    }

    async validateAiGroup() {
        await this.validatePricingGroup(this.aiGroup, 'Zebra AI');
    }
}