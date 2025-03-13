import { test } from '@playwright/test';


test('Drag and Drop Example on CrossBrowserTesting', async ({ page }) => {
    await page.goto('https://crossbrowsertesting.github.io/drag-and-drop.html');
    const source = page.locator('#draggable');
    const target = page.locator('#droppable');
    await source.dragTo(target);
    console.log('Drag and drop action performed successfully.');
    await page.waitForTimeout(4000);

});
