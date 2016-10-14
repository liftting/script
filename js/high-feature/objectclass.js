var foo = {};
foo.name = 'na';
foo.age = 12;
foo.show = function(){
  return this.name;
};

console.log(foo.show());


console.log(">>>===");

var foo2 = {};
foo2['prop1'] = 'bar';
foo2['prop2'] = false;
foo2['prop3'] = function() {
 return 'hello world foo2';
}

var skey = 'prop1';
console.log(foo2[skey]); //这种方式 便于 变量名称获取

console.log(">>>====");

var foo3 = {
 'prop1': 'bar',
 prop2: 'false',
 prop3: function (){
 return 'hello world';
 }
};

console.log(">>>====");

function User(name,url) {
  this.name = name;
  this.url = url;
  this.display = function() {
    console.log(this.name + "--" + this.url);
  }
}
// 构造函数的方式
var ss = new User('nnn',"www.bai.com");
ss.display();

console.log(">>>====");

var someuser = {
 name: 'byvoid',
 func: function() {
 console.log(this.name);
 }
};
var foo = {
 name: 'foobar'
};

someuser.func(); // 输出 byvoid


foo.func = someuser.func; // 函数赋值
foo.func(); // 输出 foobar


name = 'global';
func = someuser.func;
func(); // 输出 global
