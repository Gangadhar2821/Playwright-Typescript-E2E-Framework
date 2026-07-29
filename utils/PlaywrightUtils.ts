import { Page } from '@playwright/test';

export class PlaywrightUtils {

    constructor(private readonly page: Page) {}

    async navigateToTestURL() {
        await this.page.goto("https://automationexercise.com/login");
    }
}