var fs = require("fs");
// 异步方式来进行IO 读操作

//fs.readFile 接收了三个参数，
// 第一个是文件名，第二个是编码方式，第三个是一个函数

fs.readFile('file.txt','utf-8',function(err,data){
  if(err) {
    console.error(err);
  } else {
    console.log(data);
  }
})

console.log('read end');
