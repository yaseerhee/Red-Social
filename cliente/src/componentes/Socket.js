import io from "socket.io-client";

let socket = io("//localhost:3000"); //Para conectarnos a nuestro servidor 

export default socket;