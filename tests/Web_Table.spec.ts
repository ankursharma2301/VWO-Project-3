import { test, expect } from '@playwright/test'

test('Verify the element in Web table', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    await page.locator("#employee-search").fill("Kabir");
    await expect(page.locator('td:has-text("Kabir.Khan")')).toBeVisible();
    await page.getByRole('checkbox', { name: "Select Kabir.Khan" }).check();
    await expect(page.locator("#selected-output")).toHaveText("Kabir.Khan");

})