import { test, expect } from '@playwright/test'

test('Verify the element in Web table', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    await page.pause();

    await page.locator("#employee-search").fill("Kabir");
    await page.locator('td:has-text("Kabir.Khan")').isVisible();
    await page.getByRole('checkbox', { name: "Select Kabir.Khan" }).click();
    await expect(page.locator("#selected-output")).toHaveText("Kabir.Khan");

})