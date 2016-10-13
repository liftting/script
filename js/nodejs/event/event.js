var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();

event.on('my_event',function(){
  console.log('my event find');
});

setTimeout(function(){
  event.emit('my_event');
},1000);


/**
*Node.js 在什么时候会进入事件循环呢？答案是 Node.js 程序由事件循环开始，到事件循
*环结束，所有的逻辑都是事件的回调函数，所以 Node.js 始终在事件循环中，程序入口就是
*事件循环第一个事件的回调函数。事件的回调函数在执行的过程中，可能会发出 I/O 请求或
*直接发射（emit）事件，执行完毕后再返回事件循环，事件循环会检查事件队列中有没有未
*处理的事件，直到程序结束。图3-5说明了事件循环的原理。
*与其他语言不同的是，Node.js 没有显式的事件循环，类似 Ruby 的 EventMachine::run()
*的函数在 Node.js 中是不存在的。Node.js 的事件循环对开发者不可见，由 libev 库实现。libev
*支持多种类型的事件，如 ev_io、ev_timer、ev_signal、ev_idle 等，在 Node.js 中均被
*EventEmitter 封装。libev 事件循环的每一次迭代，在 Node.js 中就是一次 Tick，libev 不
*断检查是否有活动的、可供检测的事件监听器，直到检测不到时才退出事件循环，进程结束
*
*/
