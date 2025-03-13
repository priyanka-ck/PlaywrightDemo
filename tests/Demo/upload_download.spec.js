import { test } from '@playwright/test';
import path from 'path';

//Testcase no 1
test('Upload a file', async ({ page }) => {
    // await page.goto('https://www.file.io/');
    // const filePath = path.resolve('/Users/priyankagorai/Documents/dummy.pdf');
    // await page.getByLabel('Upload Files').setInputFiles(filePath);
    // console.log('File uploaded successfully.');
    await page.goto('https://www.file.io/');
    const filePath = path.resolve('tests/files/dummy.pdf');
    await page.getByLabel('Upload Files').setInputFiles(filePath);
    console.log('File uploaded successfully.');
});

//Testcase no 2
test('Download a file', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/FileDownload.html');
    const downloadBtn = page.locator('(//a[text()="Download"])[1]');
    const text = await page.locator('(//a[text()="Download"])[1]').textContent();
    const text1 = await page.locator('(//a[text()="Download"])[1]').innerText();
    // await downloadBtn.screenshot({ path: 'downloadbtnss.png' });
    await downloadBtn.screenshot({ path: 'screenshots/downloadbtnss.png' });
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    console.log(text);
    console.log(text1);
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('(//a[text()="Download"])[1]').click()
    ]);
    // const filePath = await download.path();
    await download.saveAs('downloads/myfile.pdf');
    console.log('File saved at downloads/myfile.pdf');
});


