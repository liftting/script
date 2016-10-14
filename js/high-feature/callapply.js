var suser = {
  name : 'aaa',
  display: function(words){
    console.log(this.name + " says " + words);
  }
};


var foo = {
  name : 'foo'
};


suser.display.call(foo,'hello'); // foo says hello
// 通过 call来修改上下文对象
// 它通过 call 将上下文改变为 foo 对象，因此在函数体内访问 this.name
// 时，实际上访问的是 foo.name，因而输出了foobar。
