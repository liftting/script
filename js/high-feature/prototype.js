// 原型模式构造对象
function User() {
    var innerVar = 'hello'; 
    this.attr = 'attr1';
    this.func1 = function() {
        innerVar = ''; 
    };
}

User.prototype.attr2 = ' this is attr2 ';
User.prototype.func2 = function () {
  console.log(this.attr2);  
};

var us1 = new User();
us1.func2();

var us2 = new User();
us2.func2();

console.log(">>==compile");

console.log(us1.func1 == us2.func1); // 输出 false
//1,
//2, 

console.log(us1.func2 == us2.func2); // 输出 true 

console.log(">>>====");






