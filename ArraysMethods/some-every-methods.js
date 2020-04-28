//**Some methods
//if there are at least one element in the array return Boolean

let array = [1,2,3,4,5];

//checks whether an element is even
let even = (element) => element % 2 === 0;
console.log(array.some(even)) // expected output: true


//**Every method() whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

let numbers = [40, 16, 67, 59, 45, 142, 165, 123];
//Not every number is grather than 20
let gratherThan20 = numbers.every(num => num > 20)
console.log(gratherThan20)

// every number is grather than 10
let gratherThan10 = numbers.every(num => num > 10)
console.log(gratherThan10)