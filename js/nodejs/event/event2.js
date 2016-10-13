
var events = require('events');

var emitter = new events.EventEmitter();

//两个监听
emitter.on("myevent",function(name,age){
  console.log("this is one",name,age);
});

emitter.on("myevent",function(name,age){
  console.log("this is two",name,age);
});

emitter.emit("myevent","nihao",123);

emitter.removeAllListeners("myevent");

emitter.emit("myevent","nihao",456);
