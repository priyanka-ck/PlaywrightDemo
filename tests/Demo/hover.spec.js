import { test , expect } from '@playwright/test';


// test('Hover over an element on Amazon', async ({ page }) => {
//     await page.goto('https://www.amazon.com/');
//     await page.locator('//span[text()="Account & Lists"]').hover();
//     const signinBtn = await page.locator('//div[text()="Your Account"]');
//     await expect(signinBtn).toBeVisible();
//     // console.log(isVisible ? 'Element is visible' : 'Element is NOT visible');
//     await page.screenshot({ path: 'screenshot1.png', fullPage: true });
//     console.log('Hover action performed successfully.');
// });

test('Hover and verify tooltip text', async ({ page }) => {
    await page.goto('https://jqueryui.com/tooltip/');
    const frame = page.frameLocator('.demo-frame');
    await frame.locator('#age').hover();
    await page.waitForTimeout(5000);
  
    // Wait for the tooltip to appear and get its text
    const tooltip = frame.locator('.ui-tooltip');
    await expect(tooltip).toBeVisible();
    const tooltipText = await tooltip.textContent();
  
    console.log(`Tooltip text: ${tooltipText}`);
  });
  