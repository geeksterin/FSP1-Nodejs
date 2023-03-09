const express = require("express");
const app = express();
const cookie_parser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const ACCESS_SECRET = "WOHFGIWEGHI2141jsgiuwt^%%jbr";
const REFRESH_SECRET = "WOHFGIWEGHIEWHKWHWK2141jsgiuwt^%%jbr";

app.use(cookie_parser);
app.use(express.json());

app.post("/login",(req,res)=>{
  const accessToken = jwt.sign()
})



app.listen(3500, () => {
  console.log("server is up on http://localhost:3500");
});
