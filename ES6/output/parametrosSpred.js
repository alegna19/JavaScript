"use strict";

//En vez de recibir los datos ... en el metodo como parametrosRest, le pasamos los datos ocn esa estructura
var showData = function showData() {
  for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
    data[_key] = arguments[_key];
  }

  console.log(data);
}; //Se crea un arreglo para pasar los parametros que quiero al arreglo.


var arrayData = ['Angie', 30, 'Colombia', 'Developer', 'angie@gmail.com'];
showData.apply(void 0, arrayData);