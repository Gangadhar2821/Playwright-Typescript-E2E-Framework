import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load local .env file (ignored in Git, safe for dev)
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Helper to safely map env → BrowserName
function getBrowserName(): 'chromium' | 'firefox' | 'webkit' {
  const browser = process.env.BROWSER;
  if (browser === 'firefox' || browser === 'webkit') return browser;
  return 'chromium'; // default fallback
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [['html'], ['list']],

  // ✅ Global timeout (applies to each test)
  timeout: Number(process.env.TIMEOUT) || 60000,

  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    browserName: getBrowserName(),
    headless: process.env.HEADLESS === 'true', // CI must be headless
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    extraHTTPHeaders: {
      // Example: basic auth header from EMAIL + PASSWORD
      Authorization: `Basic ${Buffer.from(
        `${process.env.EMAIL}:${process.env.PASSWORD}`
      ).toString('base64')}`,
    },
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
   // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
   // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
