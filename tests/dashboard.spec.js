import { test, expect } from '@playwright/test';

// Shared login
async function login(page) {
  await page.goto('http://localhost:5173/');
  await page.getByPlaceholder('Enter email or username').click();
  await page.getByPlaceholder('Enter email or username').fill('kathan_123');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('kathan@123');
  await page.getByRole('button', { name: 'Login' }).click();
}

// Test case 1: Deny Login with Incorrect ID/Password
test('Deny Login with Incorrect ID/Password', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByPlaceholder('Enter email or username').click();
  await page.getByPlaceholder('Enter email or username').fill('amer321123');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('no[assss');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Invalid credentials. Please').click();
});

// Test case 2: Successful Login with Valid Credentials
test('Successful Login with Valid Credentials', async ({ page }) => {
  // Perform login
  await login(page);

  // Verify login success (example)
  await page.locator('.fixed > div').first().click();
});

// Test case 3: Send a Message
test('Send a Message', async ({ page }) => {
  // Perform login
  await login(page);

  // After login, send a message
  await page.getByRole('button', { name: 'Messages' }).click();
  await page.locator('div').filter({ hasText: /^K$/ }).nth(4).click();
  await page.getByPlaceholder('Type a message...').click();
  await page.getByPlaceholder('Type a message...').fill('Hi');
  await page.locator('form').getByRole('button').click();

  // Verify the sent message
  await page.getByText('Hi').click();
});

// Test case: Zoom out and view product details
test('Zoom out and view product details', async ({ page }) => {
    // Perform login
    await login(page);
  
    // Click the zoom out button multiple times
    for (let i = 0; i < 14; i++) { // Adjust the number of times as needed
      await page.getByLabel('Zoom out').click();
    }
  
    // Click on the product or element after zooming out
    await page.locator('div').filter({ hasText: /^\+− Leaflet \| © OpenStreetMap contributors$/ }).first().click();
    
    // Finally, click on 'Owner:' or any other element you need
    await page.getByText('Owner:').click();
  });




test('View User Profile by Clicking Profile Button', async ({ page }) => {
  // Perform login
  await login(page);
  await page.locator('.ml-2').first().click();
  await page.getByText('Location:').click();

});


  test('Post a New Item', async ({ page }) => {
    // Perform login
    await login(page);
  
    // Navigate to the first product button and start filling the product details
    await page.locator('button').first().click();
    await page.getByPlaceholder('Product Name').fill('Sofa_2');
    await page.getByPlaceholder('Product Description').fill('Sofa 2');
    
    // Select category and continue to next steps
    await page.getByRole('combobox').click();
    await page.getByLabel('Furniture').click();
    await page.getByRole('button', { name: 'Next' }).click();
    
    // Select product details
    await page.getByText('Leather Sofa').click();
    await page.getByRole('button', { name: 'Next' }).click();
    
    // Select leather type
    await page.locator('div').filter({ hasText: /^What type of leather is used in the sofa\?Select an option$/ }).getByRole('combobox').click();
    await page.getByLabel('Leather from unsustainable').click();
    
    // Select manufacturing process
    await page.locator('div').filter({ hasText: /^What is the manufacturing process for the sofa\?Select an option$/ }).getByRole('combobox').click();
    await page.getByLabel('Locally handcrafted').click();
    
    // Select durability
    await page.locator('div').filter({ hasText: /^How long will the sofa likely last\?Select an option$/ }).getByRole('combobox').click();
    await page.getByText('5-10 years with good').click();
    
    // Select cushioning type
    await page.locator('div').filter({ hasText: /^What kind of cushioning is used in the sofa\?Select an option$/ }).getByRole('combobox').click();
    await page.getByText('Natural latex or eco-friendly').click();
    
    // Select repairability
    await page.locator('button').filter({ hasText: 'Select an option' }).click();
    await page.getByLabel('Moderately easy to repair').click();
    
    // Click 'Next' buttons and then 'Create Product'
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Create Product' }).click();
  });