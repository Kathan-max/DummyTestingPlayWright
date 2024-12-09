const {test,expect} = require('@playwright/test')
const { loginPage } = require('../pages/login.page')
const staticData = require('../data/staticData')

test('Login Validation', async({page}) =>{

    
    //login page
const login = new loginPage(page)
await login.gotologinPage()
await login.Login('Admin','admin123')
await expect (login.page).toHaveURL(staticData.dashboardUrl)


    // await page.goto('/web/index.php/auth/login')
    // const logo = page.getByAltText('company-branding');
    // await expect(logo).toBeVisible()

    // const heading = page.getByRole('heading',{name: 'Login'})
    // await expect(heading).toBeVisible()

    // const username = page.getByRole('textbox',{name: 'Username'})
    // await username.fill('Admin')
    // const password = page.getByRole('textbox',{name:'Password'})
    // await password.fill('admin123')
    // const button = page.getByRole('button',{name: 'Login' })
    // await button.click()
    // await expect(page).toHaveURL('/web/index.php/dashboard/index');
    // const heading1 = page.getByRole('heading',{name:'Dashboard'})
    // await expect(heading1).toBeVisible()
    

})
