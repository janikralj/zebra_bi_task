import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { NavigationBarPage } from '../pages/NavigationBarPage';
import { ProTrialPage } from '../pages/ProTrialPage';
import { PricingPage } from '../pages/PricingPage';

type MyFixtures = {
  homePage: HomePage;
  navigationBarPage: NavigationBarPage;
  proTrialPage: ProTrialPage;
  pricingPage: PricingPage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    // optional: setup logic here
    await use(new HomePage(page));
    // optional: teardown logic here
  },
  navigationBarPage: async ({ page }, use) => {
    await use(new NavigationBarPage(page));
  },
  proTrialPage: async ({ page }, use) => {
    await use(new ProTrialPage(page));
  },
  pricingPage: async ({ page }, use) => {
    await use(new PricingPage(page));
  }
});

export { expect, Locator } from '@playwright/test';