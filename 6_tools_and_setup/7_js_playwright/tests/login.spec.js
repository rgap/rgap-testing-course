import { expect, test } from "@playwright/test";

test.describe("Login Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("file://" + __dirname + "/../index.html");
  });

  test("TC1: should log in successfully with valid credentials", async ({ page }) => {
    // BR1: Valid credentials
    await page.fill("#username", "admin");
    await page.fill("#password", "admin123");
    await page.click("button[type='submit']");
    await expect(page.locator("#message")).toHaveText("Login successful");
  });

  test("TC2: should show error when username is missing", async ({ page }) => {
    // BR2: Username is required
    await page.fill("#password", "admin123");
    await page.click("button[type='submit']");
    await expect(page.locator("#message")).toHaveText("Username is required");
  });

  test("TC3: should show error for invalid username format", async ({ page }) => {
    // BR3: Username must be alphanumeric
    await page.fill("#username", "hacker!");
    await page.fill("#password", "admin123");
    await page.click("button[type='submit']");
    await expect(page.locator("#message")).toHaveText("Invalid username format");
  });

  test("TC4: should show error when password is incorrect", async ({ page }) => {
    // BR4: Password must match
    await page.fill("#username", "admin");
    await page.fill("#password", "wrongpass");
    await page.click("button[type='submit']");
    await expect(page.locator("#message")).toHaveText("Incorrect password");
  });
});
