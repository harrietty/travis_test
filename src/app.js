require("dotenv").config();
const express = require("express");
const app = express();
const TEST_SECRET = process.env.TEST_SECRET;

app.get("/", function(req, res) {
  res.send(
    `Hello world! Word is ${TEST_SECRET} & the base URL is ${
      process.env.FRONTEND_BASE_URL
    }`
  );
});

app.get("/foo", async (req, res) => {
  await Promise.resolve();
  res.status(200).send("On the Foo route! Foo");
});

if (process.env.NODE_ENV === "development") {
  app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
  });
}

module.exports = app;
