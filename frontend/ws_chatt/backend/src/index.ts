
import { WebSocketServer,WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User{
    socket:WebSocket
    room:string
    }


let allSockets :User[]=[]

wss.on("connection",(socket)=>{
    //@ts-ignore
    socket.on("message", (message)=>{
        const parsedMessage = JSON.parse(message.toString());
        if (parsedMessage.type === "join") {
            allSockets.push({ socket, room: parsedMessage.payload.roomID });
            
        }
        if(parsedMessage.type==="chat"){
            let currentRoom=null
            for(let i=0;i<allSockets.length;i++){
                if(allSockets[i].socket===socket){
                    currentRoom=allSockets[i].room
                }
            }
            for(let i=0;i<allSockets.length;i++){
                if(allSockets[i].room===currentRoom){
                    allSockets[i].socket.send(parsedMessage.payload.message)
                }
            }
        }
    }
    )})
