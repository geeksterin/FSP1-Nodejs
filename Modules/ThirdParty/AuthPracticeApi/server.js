require("dotenv").config();
require("./database")();
const express = require("express");
const app = express();
const cookie_parser = require("cookie-parser");

app.use(express.json());
app.use(cookie_parser());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello world</h1>");
});

app.use("/api", require("./Routes/router"));

app.listen(process.env.PORT || 3500, () => {
  console.log(`server is up on http://localhost:${process.env.PORT || 3500}`);
});

// url/api/signup
