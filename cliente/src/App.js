import React, { useState } from "react";
import Chat from "./componentes/Chat";
import "./App.css";

function App() {
  // socket.emit("conectado", "hola desde cliente"); //Enviamos estos datos a nuestro servidor, llamar con el mismo nombre que el dels servidor
  const [nombre, setNombre] = useState("");
  const [registrado, setRegistrado] = useState(false);

  const registrar = (e) => {
    e.preventDefault();
    if (nombre !== "") {
      setRegistrado(true);
    }
  };

  return (
    <div className="App">
      {!registrado && (
        <form onSubmit={registrar}>
          <label>Introduzca su nombre</label>
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <button>Ir al Chat</button>
        </form>
      )}
      {registrado && <Chat nombre={nombre} />}
    </div>
  );
}

export default App;
