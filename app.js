// imports
const { handleErrors } = require("./errors/error");
const express = require("express");

// routers
const apiRouter = require("./routers/api.router");
const homeRouter = require("./routers/home.router");

const app = express();

const cors = require("cors");

app.use(express.json()).use(cors());

app.use("/", homeRouter);
app.use("/api", apiRouter);

app.all("/*", (_, res) => {
  res.status(404).send({ message: "Route not found" });
});

app.use(handleErrors);

module.exports = app;
