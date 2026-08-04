import { test as base, expect } from '@playwright/test';
import { ConfigReader } from '../utils/ConfigReader';

base.beforeEach(async ({ page }) => {
  //Navigating to Test URL
  await page.goto(ConfigReader.get("BASE_URL"));
  //Verifying the landing page
  await expect(page.getByAltText('Website for automation practice')).toBeVisible({ timeout: 10000 });
  await page.getByRole('link', { name: /Signup \/ Login/i }).click();
  await expect(page.getByText('Login to your account')).toBeVisible({ timeout: 10000 });
});

export const test = base;
export { expect };
