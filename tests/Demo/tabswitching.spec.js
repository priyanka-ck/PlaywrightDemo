import { test, expect } from '@playwright/test';

test('Tab Switching Example', async ({ browser }) => {
  // Create a new browser context
  const context = await browser.newContext();

  // Open first tab
  const page1 = await context.newPage();
  await page1.goto('https://example.com');
  await page1.waitForTimeout(3000);
  console.log('Opened first tab');

  // Open second tab
  const page2 = await context.newPage();
  await page2.goto('https://playwright.dev');
  await page1.waitForTimeout(3000);
  console.log('Opened second tab');

  // Switch back to first tab
  await page1.bringToFront();
  await page1.waitForTimeout(3000);
  console.log('Switched to first tab');
  await expect(page1).toHaveTitle(/Example Domain/);

  // Switch to second tab
  await page2.bringToFront();
  await page1.waitForTimeout(3000);
  console.log('Switched to second tab');
  await expect(page2).toHaveTitle(/Playwright/);
});
