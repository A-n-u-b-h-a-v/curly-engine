const express=require("express")
const socket=require("socket.io")
const http=require("http")
const path=require("path")
const {Chess}=require("chess.js")
const { title } = require("process")


const app=express()
const server =http.createServer(app)

const io=socket(server)

const chess=new Chess()

let player={}
let currentPlayer="w"

app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    res.render("index",{title:"Chess"})
})
io.on("connection",(socket)=>{
    if(!player.white){
        player.white=socket.id
        socket.emit("playerRole","w")
    }
    else if(!player.black){
        player.black=socket.id
        socket.emit("playerRole","b")
    }
    else{
        socket.emit("specatatorRole")
    }
    socket.on("disconnect",()=>{
        if(socket.id===player.white){
            delete player.white
        }
        else if(socket.id===player.black){
            delete player.black
        }
    })
    socket.on("move",(move)=>{
        try{
            if(chess.turn()==="w"&& socket.id!==player.white)return          
            else if(chess.turn()==="b"&& socket.id!==player.black)return
            const result=chess.move(move)
            if(result){
                currentPlayer=chess.turn()
                io.emit("move",move)
                io.emit("boardState",chess.fen())
            }
            else{
                console.log("invalid move:",move);
                socket.emit("invalidMove",move)
            }
        }
        catch(err){
                console.log(err);
                socket.emit("Invalid Move:",move)
                
        }
    })
    
})
server.listen(3000)
