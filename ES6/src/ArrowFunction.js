const names = ['Angie', 'Dastan', 'Martina'];

//Forma de recorrer con la manera clasica
// const name_caracter = names.map(function(name){
//     console.log(`${name} has ${name.length}`)
// });

// Con ES6
const name_caracter = names.map(name => `${name} has ${name.length}`); 
console.log(name_caracter)