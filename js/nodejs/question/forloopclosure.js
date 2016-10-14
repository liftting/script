var fs = require('fs');
var files = ['a.txt', 'b.txt', 'c.txt'];

for(var i=0;i<files.length;i++) {
  (function(i) {

    fs.readFile(files[i],'utf-8',function(err,contents){
      console.log(files[i] + ":" + contents);
    });

  })(i);
} // 可读性太差，提供有遍历函数

console.log("begin to forEach");

files.forEach(function(name){
  fs.readFile(name,'utf-8',function(err,contents){
    console.log(name + ":" + contents);
  });
});


// localhost:question wm$ node forloopclosure.js
// begin to forEach
// a.txt:nihao
//
// b.txt:this is b
//
// a.txt:nihao
//
// c.txt:this is cccc
//
// c.txt:this is cccc
//
// b.txt:this is b


// 看输出结果，是 回调的 顺序是不确定的，
