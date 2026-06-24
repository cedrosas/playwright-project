// steps/login.steps.ts
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures';

const { Given, When, Then } = createBdd(test);

Given('I am on the login page', async ({ loginPage }) => {
  await loginPage.goto();
});

When('I log in with valid credentials', async ({ loginPage }) => {
  await loginPage.login('standard_user', 'secret_sauce');
});

Then('I should see the dashboard', async ({ dashboardPage }) => {
  const title = await dashboardPage.getTitle();
  if (title !== 'Products') throw new Error(`Unexpected title: ${title}`);
});