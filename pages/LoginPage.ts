import { Page, Locator, expect } from "@playwright/test"

export class LoginPage {

    readonly signUpLink: Locator;
    readonly emailTxt: Locator;
    readonly passwordTxt: Locator;
    readonly loginBtn: Locator;
    constructor(private page: Page) {
          this.signUpLink = this.page.getByRole('link', { name: ' Signup / Login' });
        this.emailTxt = this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.passwordTxt = this.page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = this.page.getByRole('button', { name: 'Login' });
    }

    async login(credentials:any) {
        await this.signUpLink.click();
        await this.emailTxt.fill(credentials.email);
        await this.passwordTxt.fill(credentials.password);
        await this.loginBtn.click();
    }

    async verifyLoginSuccess()
    {
       await expect(this.page.locator('#header')).toContainText('Logged in as Huli');
    }
}