import { Page, Locator, expect } from "@playwright/test"

export class LoginPage {

    readonly emailTxt: Locator;
    readonly passwordTxt: Locator;
    readonly loginBtn: Locator;
    constructor(private page: Page) {
        this.emailTxt = this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.passwordTxt = this.page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = this.page.getByRole('button', { name: 'Login' });
    }


    async login(credentials: any) {
        // Verify 'Login to your account' is visible
        await expect(this.page.getByText('Login to your account')).toBeVisible();
        //Enter correct email address and password
        await this.emailTxt.fill(credentials.email);
        await this.passwordTxt.fill(credentials.password);
        //Click 'login' button
        await this.loginBtn.click();
    }

    async verifyLoginSuccess() {
        //Verify that 'Logged in as username' is visible
        const loginTxt: Locator = this.page.getByText('Logged in as King');
        expect(loginTxt).toBeVisible;
    }
}