"use strict";

function addUser(name, country) {
  var phone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'number not specific';
  return "name: ".concat(name, ", country: ").concat(country, ", phone: ").concat(phone);
} //No se pasa el parametro phone y se puede definir el valor por defecto al principio, asi no sacara undefined
//Si no se pasa el parametro en la funcion, carga elv alor por defecto.


console.log(addUser('Angie', 'Colombia'));