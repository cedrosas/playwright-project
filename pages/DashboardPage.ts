import { Page } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async getTitle() {
    return this.page.locator('.title').textContent();
  }
}