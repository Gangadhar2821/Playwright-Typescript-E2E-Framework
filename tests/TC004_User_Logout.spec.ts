import { test } from "../fixtures/Basetest"
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

test("To Test The Logout Functionality", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homepage = new HomePage(page);

    await loginPage.login();
    await homepage.logout();


})