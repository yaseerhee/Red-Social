import React, { useState, useEffect, useRef } from "react";
import socket from "./Socket";
import "../App.css";

const Chat = ({ nombre }) => {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    socket.emit("conectado", nombre);
  }, [nombre]);

  useEffect(() => {
    socket.on("mensajes", (mensaje) => {
      setMensajes([...mensajes, mensaje]);
    });
    return () => {
      socket.off();
    };
  }, [mensajes]);

  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const submit = (e) => {
    //Enviar el mensaje y quien lo envia
    e.preventDefault();
    socket.emit("mensaje", nombre, mensaje);
    setMensaje("");
  };

  return (
    <div>
      <div className="chat">
        {mensajes.map((e, i) => (
          <div className="Conversacion" key={i}>
            <div className="Nombre">{e.nombre}</div>
            <div className="Mensaje">{e.mensaje}</div>
          </div>
        ))}
        <div ref={divRef}></div>
      </div>
      <form className="row justify-content-md-center" onSubmit={submit}>
        <textarea
          className="col-3"
          cols="50"
          placeholder="Escriba su mensaje..."
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        ></textarea>
        <button className="btn btn-outline-primary col-2">Enviar</button>
      </form>
    </div>
  );
};

export default Chat;
