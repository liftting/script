function Foo() {

}

Object.prototype.name = 'Object poto';
Foo.prototype.name = 'Foo poto';

var obj = new Object();
var foo = new Foo();

console.log(obj.name); // 输出  Object
console.log(foo.name); // 输出  Foo

console.log(foo.__proto__.name); // Foo poto __proto__ 指向原型对象，
console.log(foo.__proto__.__proto__.name); // Object Poto

console.log(foo. __proto__.constructor.prototype.name); //  Foo poto
