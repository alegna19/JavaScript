//Array Filter()
//Retorna el resultado en un nuevo arreglo
//Rretorna un booleano True o false

let numbers = [23,45,14,66,94,33,4,9];
let breakPoint = 30;


/*let smallNumbers = numbers.filter(function(num){
  return num < breakPoint;
});*/
//EMAC6 

//smallNumbers es un nuevo arreglo que tendra el resultado 
//de lo que se filtro
let smallNumbers = numbers.filter(num => num < breakPoint )
console.log("\nSmaller that 30:",smallNumbers);

let bigNumbers = numbers.filter(num => num > breakPoint)
console.log("\nBigger that 30:",bigNumbers)

//let oddNumbers = numbers.filter(num => num % 2)
//0, 10,11,100,101,110,111,1000 Es un patron donde terminan los impares en uno en binario
//0, 1, 2, 3,  4,  5,  6,   7 
let oddNumbers = numbers.filter(num => num & 1)
console.log("\nOdd Numbers:",oddNumbers)





