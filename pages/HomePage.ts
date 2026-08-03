import { Page, Locator, expect } from "@playwright/test"

export class HomePage {

    readonly catagoryListlink: Locator;
    constructor(private page: Page) {

        this.catagoryListlink = this.page.locator('');
    }

    async navaigateToCategoryList() {
        await this.catagoryListlink.click();
    }

    async logout() {
        //Click 'Logout' button
        await this.page.getByRole('link', { name: "Logout" }).click();
        //Verify that user is navigated to login page
        await this.page.waitForURL('**/login');
    }
}