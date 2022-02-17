const homeRouter = require("express").Router();
const path = require("path");

homeRouter.route("/").get((_, res) => {
  res.sendFile(path.join(__dirname, "../home.html"));
});

module.exports = homeRouter;
