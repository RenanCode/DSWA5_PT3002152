var http = require ('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Servidor criado pelo Node.js! (Renan Barbosa)\n');

}) .listen(3000, '127.0.0.1')