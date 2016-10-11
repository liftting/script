
var exec = require("child_process").exec; //非阻塞操作

function start(response,postData) {
 console.log("Request handler 'start' was called.");

 var content = "empty";
 // 这里模拟一个耗时的操作，
 // exec("ls -lah",function (error, stdout, stderr){
 //  //  content = stdout;//这是执行一个命令的操作， 将输出值在回调赋值给content
 //
 //   response.writeHead(200, {"Content-Type": "text/plain"});
 //   response.write(stdout);
 //   response.end();
 //
 // });


 // exec("find /",{timeout:1000,maxBuffer:20000 * 1024},
 // function (error, stdout, stderr){
 //   response.writeHead(200, {"Content-Type": "text/plain"});
 //   response.write(stdout);
 //   response.end();
 // });


 var body = '<html>'+
 '<head>'+
 '<meta http-equiv="Content-Type" content="text/html; '+
 'charset=UTF-8" />'+
 '</head>'+
 '<body>'+
 '<form action="/upload" method="post">'+
 '<textarea name="text" rows="20" cols="60"></textarea>'+
 '<input type="submit" value="Submit text" />'+
 '</form>'+
 '</body>'+
 '</html>';
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();


}
function upload(response,postData) {

  console.log("Request handler 'upload' was called.");
 response.writeHead(200, {"Content-Type": "text/plain"});
 response.write("You've sent: " + postData);
 response.end();
}
exports.start = start;
exports.upload = upload;
