const express = require("express");
const path = require("path");

const app = express();


function m1(req,res,next)
{
    req.middlewareName = "m1"
    console.log("i am the m1");
    next();

}
 
function m2(req,res,next)
{
    req.middlewareName = "m2"
    console.log("i am the m2");
    next();
}

app.use(m1);
app.use(m2);
app.use(express.static(path.join(__dirname,"views")));


app.get("/",(req,res)=>{
    // req.middlewareName = "app middle"
    // console.log("i am the main handling code");
    // console.log(req.middlewareName);
    // res.status(200).send("<h1>hello world</h1>");
    res.status(200).send(path.join(__dirname,"views","index.html"));

})
app.get("/index",(req,res)=>{
    // console.log("i am the main handling code");
    res.status(200).send("<h1>index</h1>");
})


app.listen(3500,()=>{
    console.log(`server is up on http://localhost:3500`);
})
