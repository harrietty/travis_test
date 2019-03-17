require("dotenv").config();
const serverless = require("serverless-http");
const express = require("express");
const app = express();
const TEST_SECRET = process.env.TEST_SECRET;

app.get("/", function(req, res) {
  res.send(
    `Hello world! Secret word is ${TEST_SECRET} & the base URL is ${
      process.env.FRONTEND_BASE_URL
    }`
  );
});

app.get("/foo", async (req, res) => {
  await Promise.resolve();
  res.status(200).send("On the Foo route!");
});

module.exports.handler = serverless(app);
