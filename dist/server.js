"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var server = require("http").Server(app);
var io = require("socket.io")(server);
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
server.listen(3000, function () { return console.log('Listening on port 3000'); });
io.on('connection', function (socket) {
    socket.on('draw', function (data) {
        console.log(data);
        socket.broadcast.emit('draw', data);
    });
});
