import { test, expect, FrameLocator, Locator } from '@playwright/test'

test('Multiple iframe test', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

    //let mainFrame: FrameLocator = page.frameLocator('//frame[@name="main"]'); // Xpath Locator
    //let mainFrame: FrameLocator = page.frameLocator('frame[name="main"]'); // CSS Locator
    let mainFrame: FrameLocator = page.frameLocator('[name="main"]'); // Playwright Locator
    const text = await mainFrame.locator('h2').innerText();
    console.log(text);

    // To find all the Frames in the page
    const allFrames: Locator[] = await page.locator('//frame').all();
    console.log('Total Frames in the page: ' + allFrames.length);

    // To Iterate within the frames, we use for loop
    for (const frame of allFrames) {
        console.log(await frame.getAttribute('name'), ': ', await frame.getAttribute('src'));
    }

    // Now if we want to use the side frame and click on "Vehicle Registration" link
    const sideFrame: FrameLocator = page.frameLocator('[name="side"]');
    await sideFrame.getByTestId('side-link-registration').click();

    await page.waitForTimeout(2000);
});