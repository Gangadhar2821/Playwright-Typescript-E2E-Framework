import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({
  path: path.resolve(__dirname, '.env'),
});

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 2 : undefined,

  timeout: 60_000,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: process.env.BASE_URL || 'https://www.automationexercise.com/',

    // Browser settings
    headless: true,

    // Helps mimic a real user session
    viewport: {
      width: 1920,
      height: 1080,
    },

    // Debugging
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    // Ignore HTTPS warnings if any
    ignoreHTTPSErrors: true,

    // Extra timeout for slower environments
    navigationTimeout: 30_000,
    actionTimeout: 15_000,
    testIdAttribute:'data-qa'
  },

  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome', // Uses installed Google Chrome
      },
    },

    // Uncomment if needed

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },
  ],
});