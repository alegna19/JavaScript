"use strict";

//Con los ... puntos le puedo pasar cualquier cantidad de datos que reciba por parametro, en vez de declarar cada variable
var showData = function showData() {
  for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
    data[_key] = arguments[_key];
  }

  console.log(data);
};

showData('Angie', 30, 'Colombia', 'Developer');