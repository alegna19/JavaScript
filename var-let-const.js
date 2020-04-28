//Var, Let y Const

// La primera diferencia entre var y let es que solo se puede inicializar let una sola vez.

//Solo se puede reasignar el valor de la variable pero no se puede inicializar de nuevo.

let age = 30;
age = 15;
console.log(age);
//para el ciclo for es recomentable usar let, por que var despues de terminar el ciclo incrementa el valor

/*
for(var i=0; i<=5; i++){
  console.log(i);
}
 console.log(i);//imprime 6*/


for(let i=0; i<=5; i++){
  console.log(i);
}
// console.log(i);//imprime error por que se respeta el scope

//Las constantes siempren deben tener un valor asignado

const value = 10;
console.log(value);
//Si el valor no va a cambiar se debe usar const
const numbers = [10,13,15];
numbers.push(20);
console.log(numbers);




