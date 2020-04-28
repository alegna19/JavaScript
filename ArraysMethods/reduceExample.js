//Reduce method
//Reduce all the values in an array into a single result
//Uses a callback function just like map, foreach, filter etc
//array.reduce (callback,initialvalue) callback se ejecuta por cada elemento del array.
//Also has a second parameter call initialValue

//find the sum of all numbers
let numbers = [12,34,56,78,91];

//passeIn toma como primer valor 0 que es el que ponemos al final del corchete },0 
let sum = numbers.reduce(function(passeIn, item){
  console.log(passeIn, item);
  return passeIn + item;
},0)
console.log('Total is: ', sum)

//Using arrow operator, is not necesary to pass the number 0
let sum1 = numbers.reduce((passeIn,item) => {
  console.log(passeIn, item) 
  return (passeIn + item);
})
console.log('Total is: ', sum1)

//_____________Example2__________________________


//Trae la primera pelicula Alfabeticamente.
let movies = ['Layer cake', 'Star Wars', 'Jurassic Park', 'Eternal Sunshine', 'Casino Royale', 'Almost Famous', 'The host', 'Dog Soldiers'];

let first = movies.reduce(function(current, item ){
  console.log('Comparing: ', current, 'TO', item)
  return (current < item ) ? current : item; 
},"\u0434");

console.log('First movie is: ', first)







