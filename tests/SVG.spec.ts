import{test,expect, Locator} from '@playwright/test';

const url = 'https://www.flipkart.com/';

test.describe('SVG test',() =>{
    test.beforeEach(async({page})=>{
        await page.goto(url);
    })

    test('locate SVG root and assert visible',async({page})=>{
        await page.getByPlaceholder('Search for Products, Brands and More').fill('macmini');
        const svgElement: Locator = page.locator('svg');
        await svgElement.first().click();
        await page.waitForTimeout(2000);
    // Sort the results by clickin on "Price -- Low to High" 
    await page.getByText('Price -- Low to High').click();
    await page.waitForLoadState('networkidle'); // Wait for the sorted results to load

    // Validate that the first product in the sorted results is visible and print its title
    const firstResult: Locator = page.locator('//div[contains(@data-id,"CPU")]/div/a[2]');
    await expect(firstResult.first()).toBeVisible({ timeout: 15000 });
    console.log(`Cheapest product title: ${await firstResult.first().textContent()}`);

    // Validate that the price of the first product is visible and print it
    const firstResultPrice: Locator = page.locator('(//div[contains(@data-id,"CPU")]/div/a/div/div)[3]');
    await expect(firstResultPrice.first()).toBeVisible({ timeout: 15000 });
    const cheapestProductTitle: string | null = await firstResultPrice.first().textContent();
    console.log(`Cheapest Macmini: ${cheapestProductTitle}`);

    await page.waitForTimeout(2000);

    })
})
