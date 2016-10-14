console.log("闭包--机制");

var generateClouser = function(){

  var ct = 0;
  var get = function(){
    ct ++;
    return ct;
  }

  return get;// 返回的函数对象

};


var counter = generateClouser(); //

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// 正常函数内部变量，在函数执行到结尾后，会将变量所占用的内存空间释放掉， 但是这个执行
// 没有释放，而且还进行了递增操作，
// 这就是 js的 闭包特性
// 当一个函数返回它内部定义的一个函数时，就产生了一个闭包，
// 闭包不但包括被返回的函数，还包括这个函数的定义环境。上面例子中，当函数
// generateClosure() 的内部函数 get 被一个外部变量 counter 引用时，counter 和
// generateClosure() 的局部变量就是一个闭包

console.log(">>>===");


var counter1 = generateClouser();
var counter2 = generateClouser();
console.log(counter1()); // 输出 1
console.log(counter2()); // 输出 1
console.log(counter1()); // 输出 2
console.log(counter1()); // 输出 3
console.log(counter2()); // 输出 2

// 这里就产生了两个独立的闭包，
