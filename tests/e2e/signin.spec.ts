import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(
    page.getByRole('heading', { name: 'Landing Page' })
  ).toBeVisible();

  await page.getByRole('link').filter({ hasText: 'Login' }).click();

  // await page.getByTestId('email-field');
  // .fill('test@example.com');

  // await expect(page).toHaveTitle(/Landing Page/);
});
