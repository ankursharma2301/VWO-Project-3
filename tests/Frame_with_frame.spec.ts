import { test, expect, FrameLocator, Locator } from '@playwright/test'

test('Iframe within iframe test', async ({ page }) => {

    await page.goto('https://selectorshub.com/iframe-scenario/', { waitUntil: 'networkidle' });

    let frame1: FrameLocator = page.frameLocator('iframe#pact1').first();
    let frame2: FrameLocator = frame1.frameLocator('iframe#pact2');
    let frame3: FrameLocator = frame2.frameLocator('iframe#pact3');

    // To enter the value in the First Crush, we use frame1
    await frame1.locator('#inp_val').fill('Boomika Chawla');

    // To enter the value in the Current Crush Name, we use frame2
    await frame2.locator('#jex').fill('Wife');

    // To enter the value in the Destiny, we use frame3
    await frame3.locator('#glaf').fill('Playwright');

    // Suppose we need to fetch a value from h4, we directly use page and no need of iframes
    const text = await page.locator('//h4[normalize-space()=\'Free Tools\']').innerText();
    console.log(text);

    await page.waitForTimeout(2000);

});