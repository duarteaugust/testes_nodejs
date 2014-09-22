var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello GAD\n<h1>ITS NICE!</h1>');
}).listen(1336, '127.0.0.1');

console.log('Server rodando at http://127.0.0.1:1336 bosta/');