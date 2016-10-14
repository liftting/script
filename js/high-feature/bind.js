var suser = {
  name : 'aaa',
  func: function(words){
    console.log(this.name + " says ");
  }
};

var foo = {
  name : 'foobar'
};

foo.func = suser.func;

foo.func();


foo.func1 = suser.func.bind(suser); // 强制绑定上了
foo.func1();

func2 = suser.func.bind(foo);
func2();

func3 = func2;
func3();
