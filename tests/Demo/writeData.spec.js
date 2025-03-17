import { test } from '@playwright/test';
import fs from 'fs';

test('Write OrangeHRM login data to JSON file', async () => {
  // Define the login data
  const loginData = {
    username: "Admin",
    password: "admin123",
    url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  };

//   Converts the JavaScript object into a formatted JSON string.
  const jsonString = JSON.stringify(loginData, null, 2);

  // Write data to JSON file
  fs.writeFileSync('tests/orangehrm_data.json', jsonString, 'utf-8');

  console.log('✅ OrangeHRM login data successfully written to JSON file!');
});
