const { test, expect } = require('@playwright/test');
const path = require('path');

test('contact page loads and shows contact form', async ({ page }) => {
  await page.goto(`file://${path.resolve(__dirname, '..', 'contact', 'index.html')}`);
  await expect(page.locator('form')).toBeVisible();
});

test('contact page form submits to Formspree', async ({ page }) => {
  await page.goto(`file://${path.resolve(__dirname, '..', 'contact', 'index.html')}`);
  await expect(page.locator('form')).toHaveAttribute('action', 'https://formspree.io/f/xqerqyvo');
});

test('contact page shows LinkedIn link', async ({ page }) => {
  await page.goto(`file://${path.resolve(__dirname, '..', 'contact', 'index.html')}`);
  await expect(page.locator('a[href="https://www.linkedin.com/in/annajohnsonpilot/"]')).toBeVisible();
});
