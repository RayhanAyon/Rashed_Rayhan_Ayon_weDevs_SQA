import {test, expect} from '@playwright/test';
import jsonData from "../Utils/userdata.json"
import loginPage from '../pages/loginPage';


test.describe("User can Login Successfully", () => {

    const latestUser = jsonData[jsonData.length - 1];

    test ("User Login Successful", async ({page}) => {
        await page.goto("/");
        const login = new loginPage(page);
        await login.doLogin(latestUser.email, latestUser.password);
        await expect(page).toHaveURL('https://ratul.staging.dokandev.com/');
    });



});