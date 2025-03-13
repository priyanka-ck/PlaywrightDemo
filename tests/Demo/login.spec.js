import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { LeadCreationPage } from '../../pages/leadcreation';

test('test', async ({ page }) => {
  //Login
  const login = new LoginPage(page);
  login.gotologinpage();
  await login.login('saikat@cloudkaptan.com.dev', 'SD1234567');

  //LeadCreation
  const leadcreation = new LeadCreationPage(page);
  await leadcreation.clickLeadBtn(); 
  await leadcreation.clickNewBtn();
  await leadcreation.fillNewLeadForm();
  await page.close();


});