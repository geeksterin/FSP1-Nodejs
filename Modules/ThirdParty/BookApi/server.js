const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3500;
const express = require("express");
const db = require("./database");
const cookie_parser = require("cookie-parser");


db();
const app = express();
app.use(express.json());
app.use(cookie_parser());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello World</h1>");
});


app.use("/auth",require("./Routes/AuthRoute"));
app.use("/get",require("./Routes/GetRoute"));
app.use("/post",require("./Routes/PostRoute"));



app.listen(PORT, () => {
  console.log("server is up on http://localhost:3500");
});


