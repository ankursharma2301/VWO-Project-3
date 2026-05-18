import { test, expect } from '@playwright/test';

test('Context Menu Practice', async ({ page }) => {

    await page.goto("http://app.thetestingacademy.com/playwright/widgets/context-menu");
    await page.getByTestId('ctx-target').click({ button: 'right' });
    const allOptions1: string[] = await page
        .locator('ul.context-menu-list span')
        .allInnerTexts();
    console.log(allOptions1);

    // Right click on Second target and log options
    await page.getByTestId('ctx-target-2').first().click({ button: 'right' });
    const allOptions2: string[] = await page.locator('ul.context-menu-list li span').allInnerTexts();
    console.log(allOptions2);

    // Right click on Third target and log options
    await page.getByTestId('ctx-target-3').first().click({ button: 'right' });
    const allOptions3: string[] = await page.locator('ul.context-menu-list li span').allInnerTexts();
    console.log(allOptions3);

    await page.waitForTimeout(2000);


})
