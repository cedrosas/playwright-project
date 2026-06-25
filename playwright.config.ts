// playwright.config.ts
import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: 'steps/*.ts',
  importTestFrom: 'fixtures.ts', // ← path relative to config file
});

export default defineConfig({
  testDir,
});