import { test as base, expect } from '@playwright/test';
import { ConfigReader } from '../utils/ConfigReader';

base.beforeEach(async ({ page }) => {
  //Navigating to Test URL
  await page.goto(ConfigReader.get("BASE_URL"));
  await page.waitForLoadState('load');
  //Verifying the landing page
  await expect(page).toHaveURL('https://automationexercise.com/');
  await page.getByRole('link', { name: /Signup \/ Login/i }).click();
  await expect(page.getByText('Login to your account')).toBeVisible({ timeout: 10000 });
});

export const test = base;
export { expect };
