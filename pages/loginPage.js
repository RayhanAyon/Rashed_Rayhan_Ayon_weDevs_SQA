class loginPage {

    constructor(page) {
        this.page = page;

        this.logInBtn = page.getByRole('link', { name: 'Login' });  
        this.emailTxt = page.locator("#reg-email");
        this.passwordTxt = page.locator("#login-password");
        this.signInBtn = page.locator(':text-is("Sign in")');

    }

    async doLogin (email, password) {
        await this.logInBtn.click();
        await this.emailTxt.fill(email);
        await this.passwordTxt.fill(password);
        await this.signInBtn.click();
    }   

}

export default loginPage;