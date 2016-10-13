function Hello() {

  var name;

  this.setName = function(na) {
    name = na;
  };

  this.showName = function() {
    console.log(name);
  };


}


exports.MyHello = Hello;
