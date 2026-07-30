import { test as base, expect } from '@playwright/test';

base.beforeEach(async ({ page }) => {
    //page fixture launches the browser
    //Navigate to test URL
    await page.goto('https://automationexercise.com');

    // Verify that home page is visible successfully
     await expect (page.getByAltText('Website for automation practice')).toBeVisible();
    // Click on 'Signup / Login' button
    await page.getByRole('link', { name: ' Signup / Login' }).click();

    
});


export const test = base;
export { expect };