var fs = require('fs');

var files = ['a.txt', 'b.txt', 'c.txt'];


for (var i = 0; i < files.length; i++) {
   fs.readFile(files[i], 'utf-8', function(err, contents) {
   console.log(files);
   console.log(i);
   console.log(files[i]);
   });
}
//这段代码有问题， 就是 node js的异步回调导致的，
// 看输出：

/**
*localhost:question wm$ node forloopi.js
// [ 'a.txt', 'b.txt', 'c.txt' ]
// 3
// undefined
// [ 'a.txt', 'b.txt', 'c.txt' ]
// 3
// undefined
// [ 'a.txt', 'b.txt', 'c.txt' ]
// 3
// undefined
* i 在 3次的回调中，都是 最后的3，导致其越界了，出现错误，
* 三次的回调函数 都是引用一个 实例，
*/
