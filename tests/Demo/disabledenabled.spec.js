import { test, expect } from '@playwright/test';

test('Check if button is enabled or disabled', async ({ page }) => {
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_button_disabled');

    // Switch to iframe (W3Schools example page is inside an iframe)
    const frame = page.frameLocator('#iframeResult');
    const button = frame.locator('button');

    const isDisabled = await button.isDisabled();
    console.log(`Is button disabled? ${isDisabled}`);

    const isEnabled = await button.isEnabled();
    console.log(`Is button enabled? ${isEnabled}`);

    expect(isDisabled).toBe(true);
    expect(isEnabled).toBe(false);

    await page.keyboard.press('End');  // Scroll to bottom
    await page.keyboard.press('Home');

});
