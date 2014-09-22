var net = require('net');

var server = net.createServer(function (socket) {
  socket.write('Echo server\r\n');
  socket.pipe(socket);
    res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('alguma coisa pode ter acontecido...');
});

server.listen(1337, '127.0.0.1');

console.log('fala comigo!');