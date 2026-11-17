import { test } from "@playwright/test"
import { config } from "../utils/HelperUtils";
import { RegistrationPage } from "../pages/RegistrationPage"

test.beforeEach('Navigating to Test URL', async ({ page }) => {
    await page.goto(config.baseURL);
})
test('To verify new User Registrtion is successful', async ({ page }) => {
    //Page object reference
    const registrationPage = new RegistrationPage(page);

    await registrationPage.verifyHomePage();
    await registrationPage.navigateToSignupLogin();
    await registrationPage.verifySignupPage();
    await registrationPage.enterSignupDetails(config);
    await registrationPage.verifyAccountInformation();
    await registrationPage.fillAccountInformation(config);
    await registrationPage.verifyAccountCreated();
    await registrationPage.continueButtonClick();
    await registrationPage.verifyLoggedIn();
    await registrationPage.deleteUserAccount();
    await registrationPage.verifyAccountDeleted();
    await registrationPage.continueButtonClick();
})
