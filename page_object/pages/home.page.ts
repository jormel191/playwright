import { expect, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async goToRegister() {
    await  this.page.click('//a[text()="REGISTER"]');
  }
}
