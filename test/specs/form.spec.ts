import FormPage from "../pageobjects/form.page.js";

const screenshots = `./screenshots`;

describe("auth form", () => {
  it("should deny access with wrong creds", async () => {
    await FormPage.open();
    await FormPage.username.setValue("foo");
    await FormPage.password.setValue("bar");
    await FormPage.submit();

    await FormPage.flash.waitForDisplayed();
    await FormPage.flash.saveScreenshot(`${screenshots}/invalidUsername.png`);
    await expect(FormPage.flash).toHaveTextContaining(
      "Your username is invalid!"
    );
  });

  it("should allow access with correct creds", async () => {
    await FormPage.open();
    await FormPage.username.setValue("tomsmith");
    await FormPage.password.setValue("SuperSecretPassword!");
    await FormPage.password.saveScreenshot(`${screenshots}/password.png`);
    await FormPage.submit();

    await FormPage.flash.waitForDisplayed();
    await FormPage.flash.saveScreenshot(`${screenshots}/loggedIn.png`);
    await expect(FormPage.flash).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });
});
