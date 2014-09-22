var http = require('http');
 
var server = http.createServer();
 
server.on('request', function(req,res) {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); 
  res.end('<h2> Olá node2! </h2>');
});
 
server.listen(3000);
 
console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar!');