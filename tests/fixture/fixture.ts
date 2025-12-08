// fixtures.ts
import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { NavigationBarPage } from '../pages/NavigationBarPage';
import { ProTrialPage } from '../pages/ProTrialPage';
import { PricingPage } from '../pages/PricingPage';

// Define the type for the shared object
type MyFixtures = {
  homePage: HomePage;
  navigationBarPage: NavigationBarPage;
  proTrialPage: ProTrialPage;
  pricingPage: PricingPage;
};

// Extend the base test with your new fixture
export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  navigationBarPage: async ({ page }, use) => {
    await use(new NavigationBarPage(page));
  },
  proTrialPage: async ({ page }, use) => {
    await use(new ProTrialPage(page));
    // Optional: Add any teardown logic here
  },
  pricingPage: async ({ page }, use) => {
    await use(new PricingPage(page));
  }
});

export { expect, Locator } from '@playwright/test';