const WebSocket = require("ws");

const wss = new WebSocket.Server({ port:8080 });

let clients=[];

wss.on("connection",(ws)=>{

console.log("Client Connected");

clients.push(ws);

ws.on("message",(msg)=>{

clients.forEach(c=>{
if(c.readyState===WebSocket.OPEN){
c.send(msg.toString());
}
});

});

ws.on("close",()=>{
console.log("Client disconnected");
});

});
