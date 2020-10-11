//setTimeout, setInterval, clearTimeout, clearInterval

function log(msg){
  console.log("Message", msg);
  
}

//setTimeout corre una sola vez,recibe 2 parametros, la funcion, el tiempo los demas parametros son opcionales que es el valor que se le pasa a la funcion msg.  1000 is 1sec.
let timmy = setTimeout(log, 1000,'Hello');
clearTimeout(timmy);//Para detener el proceso

//setInterval corre una y otra y otra vez.
let tom = setInterval(log, 500, 'Hello')
clearTimeout(tom) //Para detener el proceso




























