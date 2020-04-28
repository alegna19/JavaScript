/* Object keys, values and entries methods
This 3 methods create an array for the Object Westeros and
then we can use //foreach() filter() map() reduce()
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
Create an iterable object from the Object

I cannot ask a Westeros what is the length of this object.
*/

let westeros = {
  cersie : 'Lannister',
  arya : 'Stark',
  jon : 'Snow',
  brienne : 'Tarth',
  daenaryes : 'Targarian',
  theon : 'Greyjoy',
  jorag : 'Mormont',
  margaery : 'Tyrell',
  sanwell : 'Tarly',
  ramsay : 'Bolton'
}

//I can use for in loop to iterate
//for(let prop of arr)

//foreach method for arrays
//very common methods
//foreach() filter() map() reduce()

//What Object.keys will do is give me an array, so an iterable Object all the keys (cersie,Arya, jon etc..)
let keys = Object.keys(westeros)
console.log('Keys: ', keys)

//Object.values will give me the values
let vals = Object.values(westeros)
console.log('Values: ',vals)

//Object.entries(obj) it's gonna give me both the keys and the values back

let entries = Object.entries(westeros)
console.log('Entries', entries)

//Sacamos el valor de la posicion 2
console.log(entries[2][1]);





