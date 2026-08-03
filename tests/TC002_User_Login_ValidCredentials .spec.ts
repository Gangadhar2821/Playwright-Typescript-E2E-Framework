import { test } from "../fixtures/Basetest"
import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/SignUpPage";
import Testdata from "../testdata/Testdata.json"


test("To Test the Login functionality with Valid Credentials", async ({ page }) => {

    const loginPage = new LoginPage(page);
    const registerPage = new SignUpPage(page);

    await loginPage.login(Testdata.userDetails);
    await loginPage.verifyLoginSuccess();
    await registerPage.deleteAccount();

})