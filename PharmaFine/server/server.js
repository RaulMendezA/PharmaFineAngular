const express = require('express')
const cors = require('cors')
const fs = require('fs')
const users = require('../users.json') //para validar luego

 const app = express();
 //socket
 const http = require("http").Server(app);
 const io = require("socket.io")(http);

 io.on("connection", function(socket){ //nueva conexión
    const chat = require("./routes/chat")(socket, io); //archivo con configs de con
 })

 app.use(cors());
 app.use(express.json());

  
 app.get("/", (req,res)=>{
     res.send("Server")
 })

app.get("/api/users", (req, res)=>{
    console.log("query params", req.query);
    res.json(users);
})
 

app.post("/api/users", (req,res)=>{
    console.log(req.body);

    let {nombre, pass, estado, hobbies} = req.body;

    if(nombre && pass && estado && hobbies!=undefined){
        if(users.some(u=> u.nombre==nombre)){
            res.send(401).send({error: "usuario ya existe"})
        }else{
            let newUser = {nombre, pass, estado, hobbies};
            users.push(newUser);
            fs.writeFileSync("users.json", JSON.stringify(users));
        }
    }else{
        res.status(400).send({error: "faltan datos"})
    }


})

 http.listen(3200, () => console.log("running"))