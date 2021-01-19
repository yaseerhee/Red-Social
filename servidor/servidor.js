const express = require("express");
const http = require("http"); //PARA LA CONEXION CON SOCKETS

const app = express(); // FUNCION PARA EL SERVIDOR
const servidor = http.createServer(app); // cREAMOS NUESTRO SERVIDOR

const socketio = require("socket.io"); // LLAMAMOS A SOCKET
const io = socketio(servidor); // Sirve para hacer a cualquier app con sockets

io.on("conexion", (socket) => {
  socket.on("conectado", () => {
    console.log("usuario conectado");
  });
}); //para establecer la conexion

servidor.listen(3000, () => console.log("Servidor inicializado")); // npm run dev : iniciar el servidor
