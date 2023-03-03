const express = require("express");
const app = express();
const path = require("node:path");


app.get("/user/:name",(req,res)=>{

    res.status(200).render(path.join(__dirname,"index.ejs"),{"name":req.params.name,"fruits":["apple","oranges"]});
})


app.listen(3500,()=>{
    console.log(`server is up on http://localhost:3500`);
})