const { test, expect } = require('@playwright/test');
const path = require('path');

test('page loads and shows blog title', async ({ page }) => {
  await page.goto(`file://${path.resolve(__dirname, '..', 'index.html')}`);
  await expect(page.locator('.navbar-brand')).toContainText('Missionary Pilot Journal');
});

test('has 11 blog post cards', async ({ page }) => {
  await page.goto(`file://${path.resolve(__dirname, '..', 'index.html')}`);
  await expect(page.locator('.card')).toHaveCount(11);
});

test('hero section is visible', async ({ page }) => {
  await page.goto(`file://${path.resolve(__dirname, '..', 'index.html')}`);
  await expect(page.locator('h1')).toContainText('Soaring for Him');
});
