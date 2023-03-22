require("dotenv").config();
require("./database")();
const express = require("express");
const cors = require("cors");
const app = express();
const cookie_parser = require("cookie-parser");

// app.use(
//   cors({
//     origin: ["https:www.leetcode.com", "https://www.codeforces.com","https://www.samiul.com"],
//     credentials: true,
//   })
// );
app.use(cors());
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

// http://localhost:3500/api/signin
// http://localhost:3500/api/signup
// http://localhost:3500/api/delete
// http://localhost:3500/api/update
