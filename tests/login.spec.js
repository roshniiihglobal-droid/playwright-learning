import { test, expect } from '@playwright/test';

test('CourierBidz Login', async ({ page }) => {

    const emailTextbox = page.getByRole('textbox', { name: 'Email' });
    const passwordTextbox = page.getByRole('textbox', { name: 'Password' });
    const signInButton = page.getByRole('button', { name: 'Sign in' });

    await page.goto('https://cbd-courierbidz.iihdev.com/login');

    await emailTextbox.fill('ringer2@yopmail.com');
    await passwordTextbox.fill('12345678');
    await signInButton.click();

    await expect(page).toHaveURL(/dashboard/);

    await page
    .getByRole('navigation')
    .getByRole('button', { name: 'Create Job' })
    .click();

    // Select Manual Mode
    await page.getByRole('button', { name: 'Manual mode' }).click();
    // Verify page
    await expect(page.getByText('Manual Job Creation')).toBeVisible();
    await page.waitForTimeout(5000);

});