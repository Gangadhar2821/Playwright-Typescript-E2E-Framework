import { test } from "../fixtures/Basetest"
import Testdata from "../testdata/Testdata.json"
import { SignUpPage } from "../pages/SignUpPage";


test("To Register user with existing email", async ({ page }) => {
    const signupPage = new SignUpPage(page);

    await signupPage.registerwithExistingEmail(Testdata.userDetails);

})