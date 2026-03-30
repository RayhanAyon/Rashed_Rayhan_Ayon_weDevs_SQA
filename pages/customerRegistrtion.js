class registrationPage {

    constructor(page) {
        
        this.page = page;

        this.registrationLink = page.getByRole('link', { name: 'Signup' });
        this.firstName = page.getByRole('textbox', { name: 'First Name' });
        this.lastName = page.getByRole('textbox', { name: 'Last Name' });
        this.email = page.getByRole('textbox', { name: 'Email' });
        this.password = page.locator('#reg-password');
        this.confirmPassword = page.locator('#reg-password-confirmation');
        // this.termsCheckbox = page.locator('#marketingConsents');
        this.registerButton = page.getByRole('button', { name: 'Create Account' });
    }

     async registerUser (userModel) {
        await this.registrationLink.click();
        await this.firstName.fill(userModel.firstName);
        await this.lastName.fill(userModel.lastName);
        await this.email.fill(userModel.email);
        await this.password.fill(userModel.password);
        await this.confirmPassword.fill(userModel.confirmPassword);
        // await this.termsCheckbox.click();
        await this.registerButton.click();
       // await this.page.pause();
    }
}

export default registrationPage;