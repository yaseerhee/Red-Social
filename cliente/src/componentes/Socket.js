import io from "socket.io-client";

let socket = io("//localhost:3000", {
  transports: ["websocket", "polling", "flashsocket"],
}); //Para conectarnos a nuestro servidor

// Solucion del error
// Access to XMLHttpRequest at 'http://localhost:3002/socket.io/?EIO=4&transport=polling&t=NSXRI_Q' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
// He añadido la siguiente línea de código =>
// {transports: ['websocket', 'polling', 'flashsocket']}

export default socket;
