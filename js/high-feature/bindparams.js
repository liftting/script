var person = {
 name: 'byvoid',
 says: function(act, obj) {
 console.log(this.name + ' ' + act + ' ' + obj);
 }
};


person.says('loves', 'diovyb'); // 输出 byvoid loves diovyb

byvoidLoves = person.says.bind(person, 'loves');

byvoidLoves('you'); // 输出 byvoid loves you  第一个参数已经绑定上了

// byvoidLoves 将 this 指针绑定到了 person，并将第一个参数绑定到
// loves，之后在调用 byvoidLoves 的时候，只需传入第三个参数。这个特性可以用于创建
// 一个函数的“捷径”，之后我们可以通过这个“捷径”调用，以便在代码多处调用时省略重
// 复输入相同的参数
