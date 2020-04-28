exports = module.exports = function (socket, io) {
  socket.on("hi", function (msg) { //envío de msj("evento hi",) 
    console.log("(chat.js) el cliente manda el mensaje", msg); //en consola de server.js
    //socket.emit("hi", "chat.js: respuesta del servidor a mensaje: "+ msg) //respuesta directa a user que mandó (mebsahe a mostrar)

    io.emit("hi", msg) //mandarlo a las demás ventanas en mismo chat
  });

  /* setInterval(() => {    
      io.emit("hi", "hola ya son las "+ (new Date()).toUTCString()) //mandarlo a todos
  }, 8000); */
}
