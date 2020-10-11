"use strict";

var names = ['Angie', 'Dastan', 'Martina']; //Forma de recorrer con la manera clasica
// const name_caracter = names.map(function(name){
//     console.log(`${name} has ${name.length}`)
// });
// Con ES6

var name_caracter = names.map(function (name) {
  return "".concat(name, " has ").concat(name.length);
});
console.log(name_caracter);