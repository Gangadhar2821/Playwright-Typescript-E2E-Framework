import { test } from "../fixtures/Basetest"
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import Testdata from "../testdata/Testdata.json"

test("To Test The Logout Functionality", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homepage = new HomePage(page);

    await loginPage.login(Testdata.userDetails);
    await homepage.logout();


})