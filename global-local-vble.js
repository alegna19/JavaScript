//Variable Global and Local= las variables globales pueden ser accedidas desde cualquier parte del codigo.
//Variables Locales= Solo pueden ser accedidas desde su funcion o una funcion anidada.

//Funcion autoinvocada,

/**todo lo que quiera acceder desde afuera no puede, pero lo que este dentro de esa funcion si puede acceder lo que esta afuera.
Se recomienda encerrar las funciones dentro de otra funcion para proteger el codigo**/
(function() {
  var globalVariable = "Im Global variable";

  var myFunction = function() {
    var localVariable = "Im local variable";
    console.log(localVariable);

    var functionLocal = function() {
      //var localVariable = "This is a local variable into local function";
      console.log(localVariable);
    };
    functionLocal();
  };

  myFunction();
  console.log(globalVariable);
})();
