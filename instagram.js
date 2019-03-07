const puppeteer = require("puppeteer");
const BASE_URL =
  "https://www.instagram.com/accounts/login/?source=auth_switcher";
const instagram = {
  browser: null,
  page: null,
  initialize: async () => {
    instagram.browser = await puppeteer.launch({ headless: true });
    instagram.page = await instagram.browser.newPage();
  },
  login: async (username, password) => {
    try {
      await instagram.page.goto(BASE_URL, { waitUntil: "networkidle2" });

      // let loginButton = await instagram.page.$x(
      //   '//div[contains(text(),"Log in")]'
      // );
      //console.log(loginButton[0]);
      await instagram.page.waitFor(2000);
      await instagram.page.type('input[name="username"', username, {
        delay: 50
      });
      await instagram.page.type('input[name="password"', password, {
        delay: 50
      });
      // let loginButton = await instagram.page.$x(
      //   '//button[contains(type(),"submit")]'
      // );
      // console.log(loginButton);
      let result = await instagram.page.click('button[type="submit"]');
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = instagram;
