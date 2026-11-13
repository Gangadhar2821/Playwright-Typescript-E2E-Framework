import { test, expect } from "@playwright/test"

test('User Registration', async ({ page }) => {
    //Navigate to test url
    await page.goto('https://www.automationexercise.com/login');

    //Verify Login page
    await expect(page).toHaveURL(/login/);

})