if(true) {
  var avar = 'aaa';
}
console.log(avar);

console.log(">>>===");


var v1 = 'v1';
var f1 = function(){
  console.log(v1);
};

f1();

var f2 = function(){
  var v1 = 'local';
  console.log(v1); //读本地的，
};

f2();

console.log(">>>===");

var gvar = 'global var';

var f3 = function(){
  console.log(gvar);  // undefined
  var gvar = 'local var';
};

f3();


console.log(">>>===");

var f = function(){
  var sc = "f0";
  (function(){
    var sc = "f1";
    (function(){
      console.log(sc); // f1 ,
    })();
  })();
};
f();

// 函数作用域的嵌套关系是定义时决定的，而不是调用时决定的，也就
// 是说，JavaScript 的作用域是静态作用域，又叫词法作用域，这是因为作用域的嵌套关系可
// 以在语法分析时确定，而不必等到运行时确定


console.log(">>>===");
var sc2 = 'top';
var sf1 = function(){
  console.log(sc2); // top
};

sf1();

var sf2 = function() {
  var sc2 = 'func local';
  sf1(); // top
}

sf2();

// 这个就是上面结论中的，  作用域是静态的，
// 这说明了作用域的嵌套关系不是在调用时确定的，而是在定义时确定的
