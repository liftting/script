var suser = {
  name : 'aaa',
  func: function(){
    console.log(this.name + " says ");
  }
};

var foo = {
  name : 'foobar'
};

func2 = suser.func.bind(foo);
func2(); // foobar says

func3 = func2.bind(suser);
func3(); // foobar says 

// 分析，见 binder.txt

