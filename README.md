# Zebra BI QA Task – Playwright Automation (POM)

This project contains automated UI tests for the Zebra BI website using Playwright with the Page Object Model (POM) approach to ensure better maintainability, readability, and scalability.

## Project Overview

The purpose of this test suite is to validate key UI elements and basic user flows on the Zebra BI website:

Test Scenario Includes:

1. Home Page Validations
- Verify the "Zebra BI logo" is displayed
- Verify the "Login" button is visible
- Verify the "Try Zebra BI for free" button appears twice

2. Optional flow (included)
- Click "Try Zebra BI for free"
- Verify three feature sections appear, each with a "Get started for FREE" button:
  - Zebra BI for Power BI
  - Zebra BI for Office
  - Zebra AI

3. Pricing Page
- Click "Pricing"
- Verify three product sections appear, each with a See the pricing plan button:
  - Zebra BI for Power BI
  - Zebra BI for Office
  - Zebra AI


# How to run tests:
1. Clone repo and install dependencies:
- npm install
2. And run tests with:
- npx playwright test
