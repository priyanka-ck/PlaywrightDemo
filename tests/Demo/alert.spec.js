import { test } from '@playwright/test';

test('Handle alert and accept', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async (dialog) => {
    console.log(`Alert message: ${dialog.message()}`);
    await dialog.accept();
  });
  await page.locator('text="Click for JS Alert"').click();

  console.log('Alert accepted.');
});

test('Handle confirmation alert and dismiss', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  
    page.on('dialog', async (dialog) => {
      console.log(`Alert message: ${dialog.message()}`);
      await dialog.dismiss(); 
    });
    await page.locator('text="Click for JS Confirm"').click();
  
    console.log('Alert dismissed.');
  });
  
  test('Handle prompt and enter text', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  
    page.on('dialog', async (dialog) => {
      console.log(`Prompt message: ${dialog.message()}`);
      await dialog.accept('Playwright Test'); // Enter text and accept
    });
  
    await page.locator('text="Click for JS Prompt"').click();
  
    console.log('Prompt handled.');
  });
    