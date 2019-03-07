const ig = require("./instagram");
(async () => {
  await ig.initialize();
  await ig.login(process.env.username, process.env.password);
  //debugger;
})();
