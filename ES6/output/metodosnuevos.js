"use strict";

var text = 'Hello Angie';
console.log("".concat(text, " star with H"), text.toLocaleLowerCase().startsWith('h'));
console.log("".concat(text, " ends with o"), text.endsWith('e')); //Includes

var pets = ['Dastan', 'Martina', 'Atlas'];
console.log("My pet is exist: ", pets.includes('Martina')); //find(), permite encontrar un elemento que cumpla cierta condicion del arreglo.

console.log(pets.find(function (pet) {
  return pet.length > 6;
})); //findIndex, permite devolver el index de la posicion del elemento del arreglo.

console.log(pets.findIndex(function (pet) {
  return pet === 'Martina';
})); //devuelve 1 ya que Martina es 1 en la posicion del elemento en arreglo.