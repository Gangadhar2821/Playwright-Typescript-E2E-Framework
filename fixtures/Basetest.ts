import { test as base, expect } from '@playwright/test';
import { ConfigReader } from '../utils/ConfigReader';

base.beforeEach(async ({ page }) => {
    //page fixture launches the browser
    //Navigate to test URL
    await page.goto(ConfigReader.get("BASE_URL"));
    await page.waitForLoadState('networkidle');
    await expect(
        page.getByAltText('Website for automation practice')
    ).toBeVisible();
    // Click on 'Signup / Login' button
    await page.getByRole('link', { name: ' Signup / Login' }).click();


});


export const test = base;
export { expect };