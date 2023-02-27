const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const server = http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method);
    if(req.url==='/' && req.method==='GET')
    {
        res.writeHead(200,{"content-type":"text/plain"});
        res.write("hello world");
        res.end();
        return;

    }
    else if(req.url==='/index.html' && req.method==='GET')
    {
        res.writeHead(200,{"content-type":"text/html"});
        // res.write("<h1>hello</h1>");
        const filePath = path.join(__dirname,"index.html");
        const data = fs.readFileSync(filePath);
        res.write(data);
        res.end();
        return;
    }
    else if(req.url==='/style.css' && req.method==='GET')
    {
        res.writeHead(200,{"content-type":"text/css"});
        // res.write("<h1>hello</h1>");
        const filePath = path.join(__dirname,"style.css");
        const data = fs.readFileSync(filePath);
        res.write(data);
        res.end();
        return;
    }
    else if(req.url==='/index.js' && req.method==='GET')
    {
        res.writeHead(200,{"content-type":"text/js"});
        // res.write("<h1>hello</h1>");
        const filePath = path.join(__dirname,"index.js");
        const data = fs.readFileSync(filePath);
        res.write(data);
        res.end();
        return;
    }
    else if(req.url==='/stream_buffer.png' && req.method==='GET')
    {
        res.writeHead(200,{"content-type":"image/jpg"});
        // res.write("<h1>hello</h1>");
        const filePath = path.join(__dirname,"stream_buffer.png");
        const data = fs.readFileSync(filePath);
        res.write(data);
        res.end();
        return;
    }
    else if(req.url==='/json' && req.method==='GET')
    {
        res.writeHead(200,{"content-type":"application/json"});
        const json = {
            "name":"samiul"
        }
        const arr  = [{
            "name":"samiul"
        },{
            "name":"sonu"
        },{
            "name":"harsh"
        }];
        res.write(JSON.stringify(arr));
        res.end();
        return;
    }
    else
    {
        console.log(req.url);
        res.writeHead(404,{"conetent-type":"text/plain"});
        res.write("well, wrong end point");
        res.end();
        return;
    }

});

server.listen(3500,()=>{
    console.log(`server is up on http://localhost:3500`);
})



// http://localhost:3500/
// http://localhost:3500/index.html