import { test } from "./baseTest.extend";

test.beforeAll(async () => {
  // Set timeout for this hook.
  test.setTimeout(3000);
  
});

test('Register a user', async ({
  homePage,
  registerPage
}) => {

  await test.step(`Create an account for a user `, async () => {
    await homePage.navigateTo(process.env.BASE_URL as string);
    await homePage.goToRegister();
    await registerPage.registerUser();
  });

  await test.step(`Verify the registration of a user.`, async () => {
    await registerPage.ValidateCreationOfRegisteredUsers();
  });
});