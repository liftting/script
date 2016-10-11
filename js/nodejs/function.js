function say(word){
  console.log(word);
}

function exec(func,value){
  func(value);
}

exec(say,"hello"); //将一个函数本身传递过去
