var http = require("http");//请求 Node js自带的http模块

http.createServer(function(request,response){
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("Hello World");
  response.end();//完成响应
}).listen(8888);

//http服务器构建，
