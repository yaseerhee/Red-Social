const express = require("express");
const http = require("http"); //PARA LA CONEXION CON SOCKETS

const app = express(); // FUNCION PARA EL SERVIDOR
const servidor = http.createServer(app); // cREAMOS NUESTRO SERVIDOR

const socketio = require("socket.io"); // LLAMAMOS A SOCKET
const io = socketio(servidor); // Sirve para hacer a cualquier app con sockets

io.on("connection", (socket) => {
  let nombre;

  socket.on("conectado", (nomb) => {
    nombre = nomb;
    //socket.broadcast.emit manda el mensaje a todos los clientes excepto al que ha enviado el mensaje
    socket.broadcast.emit("mensajes", {
      nombre: nombre,
      mensaje: `${nombre} ha entrado en la sala de chat`,
    });
  });

  socket.on("mensaje", (nombre, mensaje) => {
    io.emit("mensajes", { nombre, mensaje });
  });

  socket.on("desconectar", () => {
    io.emit("mensajes", {
      servidor: "Servidor",
      mensaje: `${nombre} ha abandonada la sala`,
    });
  });
}); //para establecer la conexion

servidor.listen(3000, () => console.log("Servidor inicializado")); // npm run dev : iniciar el servidor
