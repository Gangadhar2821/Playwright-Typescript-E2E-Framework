import { test } from "../fixtures/Basetest"
import { SignUpPage } from "../pages/SignUpPage"
import Testdata from "../testdata/Testdata.json"



test("To Test the User Registration", async ({ page }) => {
   
    const signupPage = new SignUpPage(page);

    await signupPage.registerUser(Testdata.userDetails);
    await signupPage.createAccount(Testdata.userDetails);
    await signupPage.verifyAccountCreation();
    await signupPage.deleteAccount();
})