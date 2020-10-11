const name = "Angie";
const age = "30";
const country = "Colombia"

//Manera antigua de imprimir por console log
console.log('name' + name + 'age' + age)

//Con ES6, se inyectan las variables dentro de la cadena de texto sin tener que concatenar con el +
console.log(`The person is ${name}, she have ${age} years old and she is from ${country}`);