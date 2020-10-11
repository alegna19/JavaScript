"use strict";

var name = "Angie";
var age = "30";
var country = "Colombia"; //Manera antigua de imprimir por console log

console.log('name' + name + 'age' + age); //Con ES6, se inyectan las variables dentro de la cadena de texto sin tener que concatenar con el +

console.log("The person is ".concat(name, ", she have ").concat(age, " years old and she is from ").concat(country));