const person = ['Angie', '30', 'Colombia', 'Developer'];
//Darle nombres a los items
//destructurar arreglos es asignar una variable para cada elemento del arreglo, para luego recorrerlo e imprimirlo
//si no se asigna el parametro por ejemplo edad, se separa con comas para que al imprimir el arreglo no se corra la posicion de este
const [name, , country, rol] = person;

const showInf = ([name, , country, rol] = person) => console.log(name, country)
showInf(person)