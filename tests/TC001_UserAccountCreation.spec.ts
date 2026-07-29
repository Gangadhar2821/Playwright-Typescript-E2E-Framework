import { test } from "@playwright/test"
import { SignUpPage } from "../pages/SignupForRegistrationPage"
import Testdata from "../testdata/Testdata.json"
import { PlaywrightUtils } from "../utils/PlaywrightUtils";


test("User Account Creation", async ({ page }) => {
    const playwrightUtil = new PlaywrightUtils(page);
    const signupPage = new SignUpPage(page);
    await playwrightUtil.navigateToTestURL();
    await signupPage.registerUser(Testdata.userDetails);
    await signupPage.createAccount(Testdata.userDetails);
    await signupPage.verifyAccountCreation();
})