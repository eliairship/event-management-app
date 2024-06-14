import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: 'Landing Page' })
  ).toBeVisible();

  await page.getByRole('link').filter({ hasText: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await page.locator('id=email').fill('eli@test.com');
  await page.locator('id=password').fill('Password12345');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page.getByRole('heading', { name: 'Events' })).toBeVisible();
});
