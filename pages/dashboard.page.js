 exports.dashboardPage = class dashboardPage{


    constructor(page){
                this.page = page;
                this.timeAtWorkCard = page.locator('//html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]')
                this.timeActionCard = page.locator('//html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]')
                this.quickLaunchCard = page.locator('//html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[3]')
                this.buzzLatestPost = page.locator('//html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[4]')
                this.employeesOnLeaveToday = page.locator('//html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[5]')
                this.employeesDistributionBySubUnit = page.locator('//html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[6]/div[1]')
                this.employeesDistributionByLocation = page.locator('//html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[7]')
                
            }
        }

 






