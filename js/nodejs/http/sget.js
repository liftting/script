var http = require("http");

http.get({host:'172.16.14.200:8080/ctwebser/learn/test.php'},function(res){

  res.setEncoding('utf8');
 res.on('data',function(data){
   console.log(data);
 })

});

console.log("begin get");
