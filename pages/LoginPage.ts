import { Page, Locator, expect } from "@playwright/test"
import Testdata from "../testdata/Testdata.json"
import { ConfigReader } from "../utils/ConfigReader";
type userdetails = typeof Testdata.userDetails;

export class LoginPage {

    readonly emailTxt: Locator;
    readonly passwordTxt: Locator;
    readonly loginBtn: Locator;
    constructor(private page: Page) {
        this.emailTxt = this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.passwordTxt = this.page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = this.page.getByRole('button', { name: 'Login' });
    }


    async login() {
        // Verify 'Login to your account' is visible
        await expect(this.page.getByText('Login to your account')).toBeVisible();
        //Enter correct email address and password
        await this.emailTxt.fill(ConfigReader.get('EMAIL'));
        await this.passwordTxt.fill(ConfigReader.get('PASSWORD'));
        //Click 'login' button
        await this.loginBtn.click();
    }

    async login_invalidCreds(credentials: userdetails) {
        // Verify 'Login to your account' is visible
        await expect(this.page.getByText('Login to your account')).toBeVisible();
        //Enter correct email address and password
        await this.emailTxt.fill(credentials.email_invalid);
        await this.passwordTxt.fill(credentials.password_invalid);
        //Click 'login' button
        await this.loginBtn.click();
    }
    async verifyLoginSuccess() {
        const loginTxt = this.page.getByText(/Logged in as/i);
        await expect(loginTxt).toBeVisible();
    }
    async verifyInvalidLogin() {
        //Verify error message
        const errorTxt: Locator = this.page.getByText('Your email or password is incorrect!');
        await expect(errorTxt).toBeVisible();
    }
}