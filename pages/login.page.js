exports.loginPage = class loginPage{
    constructor(page){
    this.page = page;
    this.username1 = page.getByRole('textbox',{name:'Username'})
    this.password1 = page.getByRole('textbox',{name:'Password'})  
    this.loginButton = page.getByRole('button',{name: "Login"})  
}

async gotologinPage(){
    await this.page.goto('/')
}

async Login(username,password){
    await this.username1.fill(username)
    await this.password1.fill(password)
    await this.loginButton.click()
}
}    



