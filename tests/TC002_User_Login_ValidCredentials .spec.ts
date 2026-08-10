import { test } from "../fixtures/Basetest"
import { LoginPage } from "../pages/LoginPage";


test("To Test the Login functionality with Valid Credentials", async ({ page }) => {

    const loginPage = new LoginPage(page);
    
    await loginPage.login();
    await loginPage.verifyLoginSuccess();
  
})