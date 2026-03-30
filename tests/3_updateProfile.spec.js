import {test , expect} from "@playwright/test";
import jsonData from "../Utils/userdata.json";
import loginPage from "../pages/loginPage";
import ProfileUpdatePage from "../pages/updateProfile";

let page;
test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    await page.goto("/");
    const login = new loginPage(page);
    const latestUser = jsonData[jsonData.length - 1];
    await login.doLogin(latestUser.email, latestUser.password);
    await expect(page).toHaveURL('https://ratul.staging.dokandev.com/');
});

test.afterAll(async () => {
  await page.close();
});


test.describe("User can update profile", () => {

    test ("User can update profile successfully", async () => {

        const profileUpdatePage = new ProfileUpdatePage(page);
        await profileUpdatePage.updatePhone("01400907895");
        

    });

    
});