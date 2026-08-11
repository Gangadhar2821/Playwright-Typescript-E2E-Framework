import { Page, Locator, expect } from "@playwright/test";

export class ContactUsPage {
    readonly getinTouchTxt: Locator;
    constructor(private page: Page) {
        this.getinTouchTxt = this.page.getByText('Get In Touch');
    }

    async verifyGetInTouchText() {
        await expect(this.getinTouchTxt).toBeVisible();
    }
}