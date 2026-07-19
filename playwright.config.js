const { defineConfig } = require('@playwright/test');
const path = require('path');

module.exports = defineConfig({
  testDir: 'tests',
  use: {
    headless: true,
  },
});
