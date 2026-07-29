import { Page, Locator, expect } from "@playwright/test"

export class SignUpPage {

    readonly signUpLink: Locator;
    readonly nameTxt: Locator;
    readonly emailAddressTxt: Locator;
    readonly signupBtn: Locator;
    readonly titleRadio: Locator;
    readonly passwordTxt: Locator;
    readonly dayDD: Locator;
    readonly monthDD: Locator;
    readonly yearDD: Locator;
    readonly firstNameTxt: Locator;
    readonly lastNameTxt: Locator;
    readonly addressTxt: Locator;
    readonly stateTxt: Locator;
    readonly cityTxt: Locator;
    readonly zipCodeTxt: Locator;
    readonly mobileNumTxt: Locator;
    readonly createAccountBtn: Locator;


    constructor(private page: Page) {
        this.signUpLink = this.page.getByRole('link', { name: ' Signup / Login' });
        this.nameTxt = this.page.getByRole('textbox', { name: 'Name' });
        this.emailAddressTxt = this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        this.signupBtn = this.page.getByRole('button', { name: 'Signup' });
        this.titleRadio = this.page.getByRole('radio', { name: 'Mr.' });
        this.passwordTxt = this.page.getByRole('textbox', { name: 'Password *' });
        this.yearDD = this.page.locator('#years');
        this.monthDD = this.page.locator('#months');
        this.dayDD = this.page.locator('#days');
        this.firstNameTxt = this.page.getByRole('textbox', { name: 'First name *' });
        this.lastNameTxt = this.page.getByRole('textbox', { name: 'Last name *' });
        this.addressTxt = this.page.getByRole('textbox', { name: 'Address * (Street address, P.' });
        this.stateTxt = this.page.getByRole('textbox', { name: 'State *' });
        this.zipCodeTxt = this.page.locator('#zipcode');
        this.cityTxt = this.page.getByRole('textbox', { name: 'City * Zipcode *' });
        this.mobileNumTxt = this.page.getByRole('textbox', { name: 'Mobile Number *' });
        this.createAccountBtn = this.page.getByRole('button', { name: 'Create Account' });
    }
    //(

    async registerUser(details: any) {
        await this.signUpLink.click();
        await this.nameTxt.fill(details.name);
        await this.emailAddressTxt.fill(details.email);
        await this.signupBtn.click();
    }
    async createAccount(details: any) {
        await this.titleRadio.check();
        await this.passwordTxt.fill(details.password);
        await this.dayDD.selectOption('21');
        await this.monthDD.selectOption('11');
        await this.yearDD.selectOption('1997');
        await this.firstNameTxt.fill(details.firstname);
        await this.lastNameTxt.fill(details.lastname);
        await this.addressTxt.fill(details.address);
        await this.stateTxt.fill(details.state);
        await this.cityTxt.fill(details.city);
        await this.zipCodeTxt.fill(details.zipCode);
        await this.mobileNumTxt.fill(details.mobileNumber)
        await this.createAccountBtn.click();

    }

    async verifyAccountCreation()
    {
       await expect(this.page.locator('b')).toContainText('Account Created!');
    }

}