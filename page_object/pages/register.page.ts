import { expect, type Page } from "@playwright/test";
import data from "@fixtures/form.json";

export class RegisterPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get inputFirstName() {
    return this.page.locator('input[name="firstName"]');
  }

  get inputLastName() {
    return this.page.locator('input[name="lastName"]');
  }

  get inputPhone() {
    return this.page.locator('input[name="phone"]');
  }

  get inputEmail() {
    return this.page.locator("#userName");
  }

  get inputAddress() {
    return this.page.locator('input[name="address1"]');
  }

  get inputCity() {
    return this.page.locator('input[name="city"]');
  }

  get inputState() {
    return this.page.locator('input[name="state"]');
  }

  get inputPostalCode() {
    return this.page.locator('input[name="postalCode"]');
  }

  get inputSelectCountry() {
    return this.page.locator('select[name="country"]');
  }

  get inputUserName() {
    return this.page.locator("#email");
  }

  get inputPassword() {
    return this.page.locator('input[name="password"]');
  }

  get inputConfirmPassword() {
    return this.page.locator('input[name="confirmPassword"]');
  }

  get btnSubmit() {
    return this.page.locator('input[name="submit"]');
  }

  get txtSuccessfull() {
    return this.page.locator(
     '//font[contains(text(), "Thank you for registering.")]'
    );
  }

  async registerUser() {
    await this.inputFirstName.fill(data.firstName);
    await this.inputLastName.fill(data.lastName);
    await this.inputPhone.fill(data.phone);
    await this.inputEmail.fill(data.email);
    await this.inputAddress.fill(data.address);
    await this.inputCity.fill(data.city);
    await this.inputState.fill(data.city);
    await this.inputPostalCode.fill(data.postalCode);
    await this.inputSelectCountry.selectOption({ value: data.country });
    await this.inputUserName.fill(data.userName);
    await this.inputPassword.fill(data.password);
    await this.inputConfirmPassword.fill(data.confirmPassword);
    await this.btnSubmit.click();
  }

  async ValidateCreationOfRegisteredUsers() {
    await expect(this.txtSuccessfull).toBeVisible();
  }
}
