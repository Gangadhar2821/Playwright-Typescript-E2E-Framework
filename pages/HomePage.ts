import { Page, Locator, expect } from "@playwright/test"

export class HomePage {
   
    readonly  catagoryListlink: Locator;
    constructor(private page: Page) {
      
        this.catagoryListlink =this. page.locator('');
    }

    async navaigateToCategoryList() {
        await this.catagoryListlink.click();
    }
}