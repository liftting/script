var mod1 = require("./module");
mod1.setName("name1");

var mod2 = require("./module");
mod2.setName("name2");


mod1.showName(); // 这里显示的 是    name2

//原因是：因为require 不会重复加载模块，也就是说无论调用多少次 require，获得的模块都是同一个
