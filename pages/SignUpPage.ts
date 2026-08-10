import { Page, Locator, expect } from "@playwright/test"
import { PlaywrightUtils } from "../utils/PlaywrightUtils";
import { ConfigReader } from "../utils/ConfigReader";

export class SignUpPage {

    readonly nameTxt: Locator;
    readonly emailAddressTxt: Locator;
    readonly signupBtn: Locator;
    readonly titleRadio: Locator;
    readonly passwordTxt: Locator;
    readonly dayDD: Locator;
    readonly monthDD: Locator;
    readonly yearDD: Locator;
    readonly newsLetterchk: Locator;
    readonly specialOfferChk: Locator;
    readonly firstNameTxt: Locator;
    readonly lastNameTxt: Locator;
    readonly addressTxt: Locator;
    readonly stateTxt: Locator;
    readonly cityTxt: Locator;
    readonly zipCodeTxt: Locator;
    readonly mobileNumTxt: Locator;
    readonly createAccountBtn: Locator;
    readonly continueBtn: Locator;
    readonly deleteBtn: Locator;



    constructor(private page: Page) {
        this.nameTxt = this.page.getByRole('textbox', { name: 'Name' });
        this.emailAddressTxt = this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        this.signupBtn = this.page.getByRole('button', { name: 'Signup' });
        this.titleRadio = this.page.getByRole('radio', { name: 'Mr.' });
        this.passwordTxt = this.page.getByRole('textbox', { name: 'Password *' });
        this.yearDD = this.page.locator('#years');
        this.monthDD = this.page.locator('#months');
        this.dayDD = this.page.locator('#days');
        this.newsLetterchk = this.page.getByRole('checkbox', { name: "newsletter" });
        this.specialOfferChk = this.page.getByLabel('Receive special offers from our partners!');
        this.firstNameTxt = this.page.getByRole('textbox', { name: 'First name *' });
        this.lastNameTxt = this.page.getByRole('textbox', { name: 'Last name *' });
        this.addressTxt = this.page.getByRole('textbox', { name: 'Address * (Street address, P.' });
        this.stateTxt = this.page.getByRole('textbox', { name: 'State *' });
        this.zipCodeTxt = this.page.locator('#zipcode');
        this.cityTxt = this.page.getByRole('textbox', { name: 'City * Zipcode *' });
        this.mobileNumTxt = this.page.getByRole('textbox', { name: 'Mobile Number *' });
        this.createAccountBtn = this.page.getByRole('button', { name: 'Create Account' });
        this.continueBtn = this.page.getByRole('link', { name: "Continue" });
        this.deleteBtn = this.page.getByRole('link', { name: " Delete Account" });
    }
    //Verify 'New User Signup!' is visible
    //Enter name and email address
    //Click 'Signup' button
    //Verify that 'ENTER ACCOUNT INFORMATION' is visible
    async registerUser(details: any) {
      
        await expect(this.page.getByText('New User Signup!')).toBeVisible();
        await this.nameTxt.fill(details.name);
        await this.emailAddressTxt.fill(PlaywrightUtils.generateEmail());
        await this.signupBtn.click();
        await expect(this.page.getByText('Enter Account Information')).toBeVisible();
    }


    async createAccount(details: any) {
        // Fill all details like: Title, Name, Email, Password, Date of birth
        await this.titleRadio.check();
        await this.passwordTxt.fill(ConfigReader.get("PASSWORD"));
        await this.dayDD.selectOption('21');
        await this.monthDD.selectOption('11');
        await this.yearDD.selectOption('1997');
        await this.newsLetterchk.check();
        await this.specialOfferChk.click();
        await this.firstNameTxt.fill(details.firstname);
        await this.lastNameTxt.fill(details.lastname);
        await this.addressTxt.fill(details.address);
        await this.stateTxt.fill(details.state);
        await this.cityTxt.fill(details.city);
        await this.zipCodeTxt.fill(details.zipCode);
        await this.mobileNumTxt.fill(details.mobileNumber)
        // click on create Account button
        await this.createAccountBtn.click();

    }


    async verifyAccountCreation() {
        //Verify that 'ACCOUNT CREATED!' is visible
        await expect(this.page.getByText('Account Created!')).toBeVisible();
    }




    async deleteAccount() {
        //Click 'Continue' button
        await this.continueBtn.click();
        //Verify that 'Logged in as username' is visible
        await expect(this.page.getByText('Logged in as')).toBeVisible();
        //Click 'Delete Account' button
        await this.deleteBtn.click();
        //Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        await expect(this.page.getByText('Account Deleted!')).toBeVisible();
        //Click continue button
        await this.continueBtn.click();
    }
}