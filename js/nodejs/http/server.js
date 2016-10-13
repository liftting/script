var http = require('http');
var server = new http.Server();
// 另外一种创建 server写法
server.on('request', function(req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write('<h1>Node.js</h1>');
 res.end('<p>Hello World</p>');
});

server.listen(3000);

console.log("HTTP server is listening at port 3000.");
