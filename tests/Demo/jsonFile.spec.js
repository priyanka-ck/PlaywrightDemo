import { test, expect } from '@playwright/test';
import fs from 'fs';

// Read JSON data
const jsonData = JSON.parse(fs.readFileSync('tests/data.json', 'utf-8'));

test('Login to OrangeHRM using JSON data', async ({ page }) => {
  // Navigate to the login page
  await page.goto(jsonData.url);

  // Fill login form with data from JSON
  await page.fill('input[name="username"]', jsonData.username);
  await page.fill('input[name="password"]', jsonData.password);

  // Click login button
  await page.click('button[type="submit"]');

  // Verify login is successful by checking the URL
  await expect(page).toHaveURL(/dashboard/);
  console.log('✅ Login successful using JSON data!');
});
