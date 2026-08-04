import { test as base, expect } from '@playwright/test';
import { ConfigReader } from '../utils/ConfigReader';

base.beforeEach(async ({ page }) => {
  await page.goto(ConfigReader.get("BASE_URL"));
  await page.waitForLoadState('load'); // more reliable than domcontentloaded

  // Wait for the main image to appear
  await page.waitForSelector('img[alt="Website for automation practice"]', { timeout: 10000 });
  await expect(page.getByAltText('Website for automation practice')).toBeVisible({ timeout: 10000 });

  // Click on 'Signup / Login' button
  await page.getByRole('link', { name: /Signup \/ Login/i }).click();
  await page.waitForURL('**/login', { timeout: 10000 });

});

export const test = base;
export { expect };
