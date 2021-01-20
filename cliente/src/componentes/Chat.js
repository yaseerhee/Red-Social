import React, {useState, useEffect, useRef } from "react";
import Socket from "./Socket";

const Chat = (nombre) => {
    const [mensaje, setMensaje] = useState("");
    const [mensajes, setMensajes] = useState("");

    useEffect(() => {
        socket.emit("conectado", nombre);
    }, [nombre]);

    const submit = (e) => { //Enviar el mensaje y quien lo envia
        e.preventDefault();
        socket.emit("mensaje", nombre, mensaje);
    }

    return (
        <form onSubmit={submit}>
            <label>Escriba su mensaje</label>
            <textarea name="" id="" cols="30" rows="10" value={mensaje} onChange={e => setMensaje(e.target.value)}> {/*controlar el mensaje que se escribe */}
            
            </textarea>
            <button>Enviar</button>
        </form>
    )
}

export default Chat;