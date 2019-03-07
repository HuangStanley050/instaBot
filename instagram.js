const puppeteer = require("puppeteer");
const BASE_URL = "https://www.instagram.com/";
const instagram = {
  browser: null,
  page: null,
  initialize: async () => {
    instagram.browser = await puppeteer.launch({ headless: true });
    instagram.page = await instagram.browser.newPage();
  },
  login: async (username, password) => {
    await instagram.page.goto(BASE_URL, { waitUntil: "networkidle2" });
  }
};

module.exports = instagram;
