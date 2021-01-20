import React, { useState } from "react";
import Socket from "./componentes/Socket";
import socket from "./componentes/Socket";


import './App.css';

function App() {
  // socket.emit("conectado", "hola desde cliente"); //Enviamos estos datos a nuestro servidor, llamar con el mismo nombre que el dels servidor

  const [nombre, setNombre] = useState("");
  const [registrado, setRegistrado] = useState(false);

  const Registrar = (e) => {
    e.preventDefault();
    if(nombre !== ""){
      setRegistrado(true);
    }
  }



  return (
    <div className="App">
      <label>Introduzca su nombre</label>
      <input value={nombre} onChange={e => setNombre(e.target.value)}/>
    </div>
  );
}

export default App;
