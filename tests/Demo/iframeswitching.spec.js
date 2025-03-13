import { test, expect } from '@playwright/test';

// test('Switch to iframe and interact', async ({ page }) => {
//   await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe');
//   const frame = page.frameLocator('iframe[src="https://www.w3schools.com"]');
//   const text = await frame.locator('h1').textContent();
//   console.log(`Text inside iframe: ${text}`);
//   await expect(frame.locator('h1')).toHaveText('HTML Tutorial');
// });

test('Switch between multiple iframes', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/nested_frames');
    const topFrame = await page.frame('frame-top');
    const leftFrame = await topFrame.frame('frame-left');
    const leftText = await leftFrame.locator('body').textContent();
    console.log(`Text inside left frame: ${leftText}`);
    const middleFrame = await topFrame.frame('frame-middle');
    const middleText = await middleFrame.locator('#content').textContent();
    console.log(`Text inside middle frame: ${middleText}`);
  });
  