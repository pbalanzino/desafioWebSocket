import express, { json } from 'express';
import __dirname from './utils.js';
import { Server } from 'socket.io';
import Archivo from '../tools/archivo.js'

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname+'/public'));

const server = app.listen(PORT, (req,res) =>{
   console.log(`Listening on port ${PORT}`)
})
const io  = new Server(server);
const messageLog = [];

app.get('/', (req,res) => {
    res.sendFile(__dirname+'/index.html');
   });

app.get('/api/productos/lista', (req,res) => {
   res.send(``)
})

app.get('/api/productos/lista/:id', (req,res) => {
   const id = req.params
   res.send(``)
})

app.post('/', (req,res) => {
   res.send(``)
})

io.on('connection', (socket) => {
   console.log('Nueva conexion');
   socket.broadcast.emit('log', messageLog);
   socket.on('log', (data) => {
      messageLog.push({client: socket.id, message: data});
      io.sockets.emit('log', messageLog);
   })
});