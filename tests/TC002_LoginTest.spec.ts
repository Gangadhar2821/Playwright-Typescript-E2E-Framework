import { test } from "@playwright/test"
import { PlaywrightUtils } from "../utils/PlaywrightUtils"
import { LoginPage } from "../pages/LoginPage";
import Testdata from "../testdata/Testdata.json"


test("Login", async ({ page }) => {
    const playwrightUtil = new PlaywrightUtils(page);
    const loginPage = new LoginPage(page);
    await playwrightUtil.navigateToTestURL();
    await loginPage.login(Testdata.userDetails);
    await loginPage.verifyLoginSuccess();

})