"use strict";

var createObject = function createObject(name, age) {
  return {
    //name = name,//asi se hacia en javascript antes
    name: name,
    //Con EM6 no se asigna la variable que viene por parametro.    
    age: age,
    showInfo: function showInfo() {
      return "".concat(name, ", ").concat(age);
    }
  };
};

console.log(createObject('Maria', '30').showInfo());