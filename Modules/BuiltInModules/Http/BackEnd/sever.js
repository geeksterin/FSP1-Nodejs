const http = require("node:http");


const server = http.createServer((req,res)=>{

    res.setHeader("Access-Control-Allow-Origin","*")
    console.log(req.url);
    console.log(req.method);

    if(req.url==='/json' && req.method==='GET')
    {
        const URL = "https://api.github.com/users";
        fetch(URL)
        .then((res)=>res.json())
        .then((data)=>{
            res.writeHead(200,{"content-type":"application/json"});
            res.write(JSON.stringify(data));
            res.end();
            return;
        })
        .catch(err=>{
            res.writeHead(404,{"content-type":"text/plain"});
            res.write("error");
            res.end();
            return;
        })
    }
    else if(req.url==='/json' && req.method==='POST')
    {
        console.log(req);
        res.writeHead(200,{"content-type":"application/json"});
        res.write(JSON.stringify({"message":"we got your data"}));
        res.end();
        return;
    }
    else
    {
        res.writeHead(404,{"content-type":"text/plain"});
            res.write("error");
            res.end();
            return;
    }
})

server.listen(3500,()=>{
    console.log(`server is up on http://localhost:3500`);
})

// http://localhost:3500
//https://samiul.com/json

// http://localhost:3500/json;

// https://myserver.com/json;