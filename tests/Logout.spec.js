import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://cbd-courierbidz.iihdev.com/login');

  await page.getByRole('textbox', { name: 'Email' })
  .fill('ringer2@yopmail.com');

  await page.getByRole('textbox', { name: 'Password' })
  .fill('12345678');

  await page.getByRole('button', { name: 'Sign In' })
  .click();

  await page.locator('.w-10').first()
  .click();

  await page.getByRole('button', { name: 'Sign Out' })
  .click();
});