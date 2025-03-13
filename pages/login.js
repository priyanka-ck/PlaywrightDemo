import { expect } from '@playwright/test';
exports.LoginPage  = class LoginPage{

    constructor(page){
        this.page = page
        this.usernameInput = page.locator('textbox', { name: 'Username' });
        this.passwordInput = page.locator('textbox', { name: 'Password' });
        this.loginButton = page.locator('button', { name: 'Log In' });
        this.homePageElement = page.locator('//button[@aria-label="Search"]');

    }
    async gotologinpage(){
        await this.page.goto('https://login.salesforce.com/');
    }

    async login(username, password){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await expect(this.homePageElement).toBeVisible({ timeout: 30 * 1000 });
        console.log('Login successful, homepage loaded.');
    }
}