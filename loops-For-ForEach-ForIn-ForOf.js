//Loops for, forEach, for in y for of

var monsters = [{
  canada: 'Sasquach',
  nepal: 'Yeti',
  scotland: 'Loch Ness Monster'
}]

//Typical for, it's possible to use break and continue
for(let i = 0; i< monsters.length; i++){
  console.log("For Common:", monsters[i]);
}

//forEach, we need to put an array or list before forEach
//We cannot use continue and break to finish the loop

monsters.forEach(monster => console.log("ForEach: ",monster))

/**for in to iterate the array we use prop as an element to iterate all the loop, when the Object doesn't have [] this
iterate for all the elements of the array is like
var in object
Itera dentro de las propiedades del objeto Monsters
El bucle for in es el encargado de recorrer la colección de propiedades de un objeto. La ventaja que tiene este anidamiento de bucles es que nos permite sacar por pantalla las propiedades de cualquier lista de objetos que pasemos
https://www.arquitecturajava.com/javascript-for-in-vs-for-of/*/

for(let prop in monsters){
  console.log("In", prop, "We have",monsters[prop])
}

/*for of De esta forma lo estaremos recorriendo como si fuera una estructura forEach 
*/

for(let monster of monsters){
  console.log(monster)
}











