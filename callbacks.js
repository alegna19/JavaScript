//Callbacks

//la funcion saludar recibe como parametro otra funcion
//cuando llega la funcion como parametro se ejecuta solo encallback(name), es un parametro mas
function saludar(name,callback){
  callback(name);
}

//Declaramos una const y le asignamos la funcion saludo
const saludo = (function(name){
  console.log("Hola", name)
})

//Llamamos a la funcion pasandole el parametro nombre y el parrametro funcion
saludar("Angie",saludo);

//___________________________________________



























