import { test } from "../fixtures/Basetest"
import { ContactUsPage } from "../pages/ContactUsPage"
import { SignUpPage } from "../pages/SignUpPage";

test("To test Contact Us functionality", async ({ page }) => {

    const signupPage = new SignUpPage(page);
    const contactusPage = new ContactUsPage(page);
   
    await signupPage.clickContactUsBtn();
    await contactusPage.verifyGetInTouchText();
})