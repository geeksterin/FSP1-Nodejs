
const express = require("express");
const app = express();
// {http.createServer():http.server}

app.use(express.json()); //= server is getting json data = only parsing.
app.use(express.urlencoded({extended:true})); //= server is getting urlencoded = converting them to json and than parsing




app.get("/",(req,res)=>{
    res.status(200).send("<h1>hello world</h1>")
})

app.post("/post/json",(req,res)=>{
    
    console.log(req.body);
    res.status(200).send({"message":"we have got your data"});
})
app.post("/post/form",(req,res)=>{
    console.log(req.body);
    res.status(200).send({"message":"we have got your form data"})

})

app.get("/get/:id",(req,res)=>{
    console.log(req.params.id);
    res.status(200).send({"message":"yooo"});
})
// http://localhost:port/get/jdgfwegfuwfuw
// req.params = {
//     id:jdgfwegfuwfuw;
// }


app.listen(3500,()=>{
    console.log(`server is up on http://localhost:3500`);
})

