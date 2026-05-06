import { test, expect } from '@playwright/test';

test("Invalid Login Validation", async ({ page }) => {

    await page.goto("https://app.vwo.com/#/login");
    await page.getByRole("textbox", { name: 'username' }).fill("xyz@gmail.com");
    await page.getByRole("textbox", { name: 'password' }).fill("1234");
    await page.getByRole("checkbox", { name: 'Remember me' }).check();
    await page.getByRole("button", { name: 'Sign in' }).click();

});
