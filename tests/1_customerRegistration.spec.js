import {test, expect} from '@playwright/test';
import { faker } from '@faker-js/faker';
import jsonData from "../Utils/userdata.json"
import fs from  "fs"
import registrationPage from "../pages/customerRegistrtion";

test.describe("User can Registration Successfully", () => {

test ("User Registration Successful", async ({page}) => {
    await page.goto("/");
    
    const registration = new registrationPage(page);

    const userModel = {
        firstName : faker.person.firstName(),
        lastName : faker.person.lastName(),
        email : `${faker.person.firstName().toLowerCase()}.${faker.person.lastName().toLowerCase()}@test.com`,
        password : "123abc",
        confirmPassword : "123abc"

    }

    await registration.registerUser(userModel);

    const heading = page.locator('h2.reset.text-2xl');
    await expect(heading).toHaveText("Welcome to Ratul's DenPlease Login");

    jsonData.push(userModel);
     fs.writeFileSync('./Utils/userdata.json', JSON.stringify(jsonData, null, 2)); 
});
});