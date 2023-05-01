import app from "./app";
import http from 'http';
import { Server } from 'socket.io';
import AppDataSource from "./data-source";

const server = http.createServer(app);
//const io = new Server(server);
const cors = require('cors');
const io = new Server(server, { cors: { origin: '*' } });

(async () => {

    await AppDataSource.initialize()
    .catch((err) => {
        console.error("Error to load API Data Source", err)
    })


    io.on('connection', (socket) => {
        console.log('User connected:', socket.id);

        socket.on('message', (message) => {
        console.log('Received message:', message);
        io.emit('message', message);
        });

        socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        });
    });

  server.listen(3030, () => {
    console.log('Chatinip API Running on Port: 3030');
  });

})();