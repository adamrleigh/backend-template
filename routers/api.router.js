const apiRouter = require("express").Router();
const endpoints = require("../endpoints.json");

apiRouter.route("/").get((_, res) => {
  res.status(200).send(endpoints);
});

module.exports = apiRouter;
