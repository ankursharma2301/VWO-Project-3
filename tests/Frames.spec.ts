import { test, expect, FrameLocator } from '@playwright/test'

test('Verify the element in Frames', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/frames/");
    const frameone: FrameLocator = page.frameLocator('#frame-one');
    await frameone.locator('#RESULT_TextField-1').fill("BMW");
    await frameone.locator('#RESULT_TextField-2').fill("Ankur Sharma");
    await frameone.locator('#RESULT_TextField-3').fill("HR-51-1234");
    await frameone.locator('#RESULT_RadioButton-1').selectOption('Sedan');
    await frameone.locator('#RESULT_TextField-4').fill('2025');
    await frameone.locator('#RESULT_TextArea-1').fill('This is a BMW car');
    await frameone.locator('#vehicle-submit').click();

    let output = await frameone.locator("#vehicle-output").innerText();
    console.log(output);

    await page.waitForTimeout(5000);




});