import{test,expect} from '@playwright/test';

test('Shadow DOM Practice',async({page})=>{

    await page.goto("https://selectorshub.com/xpath-practice-page/");
    await page.locator('#kils').fill("Ankur");
    await page.locator('#pizza').fill('Margherita');
    await page.locator('#training').fill('Playwright');
    await page.locator('#pwd').fill('123456');
     await page.waitForTimeout(5000);


})