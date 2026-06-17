const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));
io.on("connection", (socket) => {
  console.log("Usuario conectado:", socket.id);

    socket.on("mensaje", (texto) => {
        console.log("Mensaje recibido:", texto);
        io.emit("mensaje", texto);
    });
    socket.on("mensaje", (data) => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${data.usuario}:</strong> ${data.texto}`;
    mensajes.appendChild(p);
    });
        
    socket.on("disconnect", () => {
        console.log("Usuario desconectado:", socket.id);
    });

   
});




server.listen(3000, () => {
  console.log("Servidor activo en http://localhost:3000");
});