//Manipulating and Sorting Arrays with splice()method, sort, reverse, indexOf and lastIndexOf

var characters = ['Luke', 'Leia', 'Han', ' Chewie']
console.log(characters);

//With splice() reaplacing the elements of the array
//splice(positionElementToRemove, howManyElementsIwantRemove, newNameOfElment)
characters.splice(0,1,'Rey')
console.log(characters);

//change Leia and Han for Kylo
characters.splice(1, 2, 'Kilo')
console.log(characters);

//Change Kilo for C3PO and R2D2
characters.splice(1, 1,'C3PO','R2D2')
console.log(characters);

//Using Reverse
characters.reverse();
console.log(characters);

//Using sort to order the elements of the array
characters.sort();
console.log(characters);

//Using indexOf to get inside the index of the array

var position = characters.indexOf('C3PO');
console.log(position);

//Using lastIndexOf to give me the last position of the array
var position2 = characters.lastIndexOf('Rey');
console.log(position2);








