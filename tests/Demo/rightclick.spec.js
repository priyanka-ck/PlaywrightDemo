import { test } from '@playwright/test';

test('Right-click on an element', async ({ page }) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    const button = page.locator('.context-menu-one');
    await button.click({ button: 'right' });
    await page.waitForSelector('.context-menu-list', { state: 'visible' });
    console.log('Right-click menu opened successfully.');
    await page.waitForTimeout(3000);
});
