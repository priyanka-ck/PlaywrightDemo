import { expect } from '@playwright/test';
exports.LeadCreationPage = class LeadCreationPage {

    constructor(page) {
        this.page = page
        this.leadsTab = page.locator('//a[@title="Leads"]');
        this.newBtn = page.locator('//button[@name="New"]');
        this.newLeadForm = page.locator('//h2[text()="New Lead"]');
        this.salutation = page.locator('//button[@aria-label="Salutation"]');
        this.salutationDropdown = page.locator('//span[text()="Ms."]');
        this.firstName = page.locator('//input[@name="firstName"]');
        this.lastName = page.locator('//input[@name="lastName"]');
        this.phone = page.locator('//input[@name="Phone"]');
        this.company = page.locator('//input[@name="Company"]');
        this.leadStatus = page.locator('//label[text()="Lead Status"]/following-sibling::div//button/span');
        this.workingContactedStatus = page.locator('//span[text()="Working - Contacted"]');
        this.saveBtn = page.locator('//button[@name="SaveEdit"]');

    }
    async clickLeadBtn() {
        await this.leadsTab.click();
    }
    async clickNewBtn() {
        await this.newBtn.click();
    }
    async fillNewLeadForm() {
        await expect(this.newLeadForm).toBeVisible();
        await this.salutation.click();
        await this.salutationDropdown.click();
        await this.firstName.fill('Pratyphah');
        await this.lastName.fill('Sran');
        await this.phone.fill('9807087458');
        await this.company.fill('CK');
        await this.leadStatus.click();
        await this.workingContactedStatus.click();
        await this.saveBtn.click();
        console.log('New lead created successfully.');
    }
}
