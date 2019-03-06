const puppeteer = require("puppeteer");
const instagram = {
  browser: null,
  page: null,
  initialize: async () => {
    instagram.browser = await puppeteer.launch({ headless: false });
  }
};
