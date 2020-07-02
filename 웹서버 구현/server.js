
// import { createServer, Server } from 'net';
const net = require('net');
const fs = require('fs');
const {createServer} = net;
const port = 8080;

const server = createServer((socket) => {
  console.log(`[server] connected client: ${JSON.stringify(socket.address())}`);
  socket.on('data', data => {
    console.log(`[server] received data from client: ${socket.bytesRead}`);
    const raw = data.toString();
    console.log(raw);
    fs.readFile('./public/index.html', (err, data) => {
        const response = [
            'HTTP/1.1 200 OK',
            'Content-Type: text/html',
            'Status: 200',
            '',
            '',
            data,
            '',
            '',
          ].join('\r\n');
          socket.write(response);
          socket.destroy()
    });
  });
});

server.listen(port, () => {
  console.log(`[server] opened server: ${JSON.stringify(server.address())}`);
});