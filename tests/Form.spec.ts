import { test, expect } from '@playwright/test'

test('Verify the elements of QA Form', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice");

    await page.getByRole('textbox', { name: "first name" }).fill("Ankur");
    await page.getByTestId('last-name').fill("Sharma");

    await page.getByTestId('gender-male').check();
    await page.getByLabel("Years of experience").selectOption('5');
    await page.getByLabel("Date").fill('2022-05-23');
    await page.getByRole('radio', { name: "Manual Tester" }).check();
    await page.getByRole('checkbox', { name: "UFT" }).click();
    await page.getByRole('tab', { name: "Switch Commands" }).click();
    await expect(page.locator('#selenium-tab-panel')).toContainText('Switch commands');
    await page.pause();
    await page.getByRole('button', { name: "Save profile" }).click();

})
