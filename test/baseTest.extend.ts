import { test as base } from "@playwright/test";
import { HomePage }  from "@pages/home.page";
import { RegisterPage }  from "@pages/register.page";

type Pages = {
  homePage: HomePage;
  registerPage: RegisterPage;
};

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  }
});
