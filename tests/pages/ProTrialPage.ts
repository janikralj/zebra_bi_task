import { expect, Page, Locator } from "@playwright/test";


export class ProTrialPage {
    readonly forPowerBiGroup: Locator;
    readonly forOfficeGroup: Locator;
    readonly aiGroup: Locator;

    constructor(private page: Page) {
        this.page = page;

        // Zebra Bi for Power Bi group selector
        this.forPowerBiGroup = this.page.locator('#div_block-35-145414');

        // Zebra Bi for office group selector
        this.forOfficeGroup = this.page.locator('#div_block-40-145414');

        // Zebra Ai group selector
        this.aiGroup = this.page.locator('#div_block-45-145414');
    }

    async goto() {
        await this.page.goto('/pro-trial/');
    }

    async validateStartingGroup(groupLocator: Locator, headingText: string) {
        // Validate group is visible
        await expect(groupLocator, `${headingText} group should be visible.`).toBeVisible();

        // Validate heading inside group
        await expect(groupLocator.getByRole('heading', { name: headingText, exact: true }), `${headingText} group should have heading.`).toBeVisible();

        // Validate "Get Started for FREE" button inside group
        await expect(groupLocator.getByRole('link', { name: 'Get Started for FREE', exact: true }), `${headingText} group should have a "Get Started for FREE" button.`).toBeVisible();
    }

    async validateForPowerBiGroup() {
        await this.validateStartingGroup(this.forPowerBiGroup, 'Zebra BI for Power BI');
    }

    async validateForOfficeGroup() {
        await this.validateStartingGroup(this.forOfficeGroup, 'Zebra BI for Office');
    }

    async validateAiGroup() {
        await this.validateStartingGroup(this.aiGroup, 'Zebra AI');
    }
}