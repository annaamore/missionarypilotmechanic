const { test, expect } = require('@playwright/test');
const path = require('path');

test('page loads and shows blog title', async ({ page }) => {
  await page.goto(`file://${path.resolve(__dirname, '..', 'index.html')}`);
  await expect(page.locator('.navbar-brand')).toContainText('Missionary Pilot Journal');
});

test('has 3 blog post cards on homepage', async ({ page }) => {
  await page.goto(`file://${path.resolve(__dirname, '..', 'index.html')}`);
  await expect(page.locator('.card')).toHaveCount(3);
});

test('hero section is visible', async ({ page }) => {
  await page.goto(`file://${path.resolve(__dirname, '..', 'index.html')}`);
  await expect(page.locator('h1')).toContainText('Faith in Flight');
});

test('blog page shows all 6 posts', async ({ page }) => {
  await page.goto(`file://${path.resolve(__dirname, '..', 'blog', 'index.html')}`);
  await expect(page.locator('.card')).toHaveCount(6);
});
