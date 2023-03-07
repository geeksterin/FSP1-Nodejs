const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3500;
const express = require("express");
const db = require("./database");

db();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello World</h1>");
});


app.use("/get",require("./Routes/GetRoute"));
app.use("/post",require("./Routes/PostRoute"));


app.listen(PORT, () => {
  console.log("server is up on http://localhost:3500");
});


