import { Page } from '@playwright/test';

export class PlaywrightUtils {

    constructor(private readonly page: Page) {}

  static generateEmail(domain: string = "example.com"): string {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);

        return `user${timestamp}${random}@${domain}`;
    }
}