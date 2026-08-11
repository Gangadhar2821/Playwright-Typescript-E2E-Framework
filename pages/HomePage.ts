import { Page, Locator, expect } from "@playwright/test"

export class HomePage {

    readonly catagoryListlink: Locator;
    readonly logoutBtn:Locator;
    constructor(private page: Page) {

        this.catagoryListlink = this.page.locator('');
        this.logoutBtn=this.page.getByRole('link', { name: "Logout" });
    }

    async navaigateToCategoryList() {
        await this.catagoryListlink.click();
    }

    async logout() {
        //Click 'Logout' button
        await this.logoutBtn.click();
        //Verify that user is navigated to login page
        await this.page.waitForURL('**/login');
    }
}