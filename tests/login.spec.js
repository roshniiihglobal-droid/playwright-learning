import { test, expect } from '@playwright/test';

test('CourierBidz Login', async ({ page }) => {

  await page.goto('https://cbd-courierbidz.iihdev.com/login');

  await page.locator('input[type="email"]')
    .fill('ringer2@yopmail.com');

  await page.locator('input[type="password"]')
    .fill('12345678');

  await page.locator('button[type="submit"]')
    .click();

  await page.waitForLoadState('networkidle');

  await expect(page).toHaveURL(/dashboard/);

});