import express from 'express';
import path from "path";

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname, "public")));

server.listen(3000, () => console.log('Listening on port 3000'));

io.on('connection', (socket: any) => {
    socket.on('draw', (data: any) => {
        console.log(data);
        socket.broadcast.emit('draw', data);
    });
});
