
import { Locator, Page, expect } from "@playwright/test";

export class RegistrationPage {

    // Page Locators
    private readonly homePageLogo: Locator;
    private readonly signupLogin: Locator;
    private readonly newUserSignup: Locator;
    private readonly signupName: Locator;
    private readonly signupEmail: Locator;
    private readonly signupButton: Locator;

    private readonly accountInformation: Locator;
    private readonly gender: Locator;
    private readonly password: Locator;
    private readonly days: Locator;
    private readonly months: Locator;
    private readonly years: Locator;
    private readonly newsletter: Locator;
    private readonly optin: Locator;

    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly company: Locator;
    private readonly address: Locator;
    private readonly state: Locator;
    private readonly city: Locator;
    private readonly zipcode: Locator;
    private readonly mobileNumber: Locator;

    private readonly createAccount: Locator;
    private readonly accountCreated: Locator;
    private readonly continueButton: Locator;
    private readonly loggedInText: Locator;
    private readonly deleteAccount: Locator;
    private readonly accountDeleted: Locator;

    // Constructor
    constructor(page: Page) {

        // Home Page Locators
        this.homePageLogo = page.getByAltText('Website for automation practice');
        this.signupLogin = page.getByRole('link', { name: ' Signup / Login' });

        // Login / Signup Locators
        this.newUserSignup = page.getByText('New User Signup!');
        this.signupName = page.getByTestId('signup-name');
        this.signupEmail = page.getByTestId('signup-email');
        this.signupButton = page.getByTestId('signup-button');

        // Account Information Locators
        this.accountInformation = page.getByText('Enter Account Information');
        this.gender = page.locator('#id_gender1');
        this.password = page.getByTestId('password');
        this.days = page.getByTestId('days');
        this.months = page.getByTestId('months');
        this.years = page.getByTestId('years');
        this.newsletter = page.locator('#newsletter');
        this.optin = page.locator('#optin');

        // Personal Information Locators
        this.firstName = page.getByTestId('first_name');
        this.lastName = page.getByTestId('last_name');
        this.company = page.getByTestId('company');
        this.address = page.getByTestId('address');
        this.state = page.getByTestId('state');
        this.city = page.getByTestId('city');
        this.zipcode = page.getByTestId('zipcode');
        this.mobileNumber = page.getByTestId('mobile_number');

        // Account Creation Locators
        this.createAccount = page.getByTestId('create-account');
        this.accountCreated = page.getByText('Account Created!');
        this.continueButton = page.getByTestId('continue-button');
        this.loggedInText = page.getByText(' Logged in as ');
        this.deleteAccount = page.getByRole('link', { name: ' Delete Account' });
        this.accountDeleted = page.getByText('Account Deleted!');
    }

    // Actions

    async navigateToSignupLogin() {
        await this.signupLogin.click();
    }

    async enterSignupDetails(config: any) {
        await this.signupName.fill(config.username);
        await this.signupEmail.fill(config.email);
        await this.signupButton.click();
    }

    async fillAccountInformation(config: any) {
        await this.gender.check();
        await this.password.fill(config.password);

        await this.days.selectOption('21');
        await this.months.selectOption('November');
        await this.years.selectOption('1977');

        await this.newsletter.check();
        await this.optin.check();

        await this.firstName.fill(config.firstName);
        await this.lastName.fill(config.lastname);
        await this.company.fill(config.companyname);
        await this.address.fill('17,cross road blore');
        await this.state.fill('KA');
        await this.city.fill('BENGALURU');
        await this.zipcode.fill('560078');
        await this.mobileNumber.fill('7656573915');

        await this.createAccount.click();
    }

    async continueButtonClick() {
        await this.continueButton.click();
    }

    async deleteUserAccount() {
        await this.deleteAccount.click();
    }

    // Validations

    async verifyHomePage() {
        await expect(this.homePageLogo).toBeVisible();
    }

    async verifySignupPage() {
        await expect(this.newUserSignup).toBeVisible();
    }

    async verifyAccountInformation() {
        await expect(this.accountInformation).toBeVisible();
    }

    async verifyAccountCreated() {
        await expect(this.accountCreated).toBeVisible();
    }

    async verifyLoggedIn() {
        await expect(this.loggedInText).toBeVisible();
    }

    async verifyAccountDeleted() {
        await expect(this.accountDeleted).toBeVisible();
    }
}
