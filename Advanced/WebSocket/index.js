const http = require("node:http");
const server = http.createServer();
const  {WebSocketServer}  = require("ws");

const wss = new WebSocketServer({server});


wss.on("connection",(clientWs)=>{
    clientWs.on("message",(data)=>{
        wss.clients.forEach((client)=>{
            client.send(data.toString());
        })
    })
        
})


server.listen(3600,()=>{
    console.log("server is up");
})

// const btn =document.getElementById("#btn");
// btn.addEventListener("click",(e)=>{

// })
// wss.clients = [client1Ws,client2Ws,client3Ws]

// client1 = client1Ws
// client2 = client2Ws
// client3 = client3Ws