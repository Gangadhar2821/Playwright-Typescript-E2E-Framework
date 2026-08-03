import { test } from "../fixtures/Basetest"
import { LoginPage } from "../pages/LoginPage"
import Testdata from "../testdata/Testdata.json"


test("To Test Login functionality with invalid Credentails", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login_invalidCreds(Testdata.userDetails);
    await loginPage.verifyInvalidLogin();

})