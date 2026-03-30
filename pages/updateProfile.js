import { expect } from "@playwright/test";

class ProfileUpdatePage{

    constructor(page){
        this.page = page;

        //this.profileIconBtn = page.locator('div[role="button"].dropdown-trigger');
        //this.profileBtn = page.getByRole('link', {name : "My Account"});
        this.editBtn = page.getByRole('link', {name : "Edit"});
        this.phone = page.getByRole('textbox', {name : "Mobile"});
        // this.dob = page.getByRole('textbox', {name : "Select your birthday"});
        // this.dobYear = page.getByRole('spinbutton', {name : "Year"});
        this.gender = page.getByRole('button', {name : "MALE"}); 
        this.saveBtn = page.getByRole('button', {name : "Save Changes"});   
    }

  

      async updatePhone(newPhone) {
        //await this.profileIconBtn.click();
        //await this.profileBtn.click();
        await this.editBtn.click();
        await this.phone.fill(newPhone);
        await this.saveBtn.click();
    }


};

export default ProfileUpdatePage;