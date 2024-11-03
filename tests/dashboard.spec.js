const {test, expect} = require('@playwright/test')
const { loginPage } = require('../pages/login.page')
const { dashboardPage } = require('../pages/dashboard.page')
const {staticData} = require('../data/staticData')

test("Dashboard Validation", async({page}) =>{
    
const login = new loginPage(page)
const dashboard = new dashboardPage(page)
await login.gotologinPage()
await login.Login('Admin','admin123')


    const elementsToBeVisible = [
        dashboard.timeAtWorkCard,
        dashboard.timeActionCard,
        dashboard.quickLaunchCard,
        dashboard.buzzLatestPost,
        dashboard.employeesOnLeaveToday,
        dashboard.employeesDistributionBySubUnit,
        dashboard.employeesDistributionByLocation]

        for(let element of elementsToBeVisible){
            await expect(element).toBeVisible()
        }


//     // await expect(dashboard.timeAtWorkCard).toBeVisible()
//     // await expect(dashboard.timeActionCard).toBeVisible()
//     // await expect(dashboard.quickLaunchCard).toBeVisible()
//     // await expect(dashboard.buzzLatestPost).toBeVisible()
//     // await expect(dashboard.employeesOnLeaveToday).toBeVisible()
//     // await expect(dashboard.employeesDistributionBySubUnit).toBeVisible()
//     // await expect(dashboard.employeesDistributionByLocation).toBeVisible()
})