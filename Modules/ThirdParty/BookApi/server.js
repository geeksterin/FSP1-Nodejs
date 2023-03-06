const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3500;
const express = require("express");
const db = require("./database");
const Book = require("./Model/BookModel");
const GetRouter = require("./Routes/GetRoute");
db();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello World</h1>");
});
app.use("/get", GetRouter);
// app.use("/p", Prounte);

url / get
url/get/morethanonecount
app.listen(PORT, () => {
  console.log("server is up on http://localhost:3500");
});


url / get / jbfjewjew
req.url = /get    /jfbkw
