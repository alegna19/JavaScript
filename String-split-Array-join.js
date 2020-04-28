//String split and Array join methods
//Converting String to Array and Array to String
//String to Array  str.split()
//Array to String rrr.join()

let sentence = "Hello my name is Angela";

//now is an array I can used arrays methods like sort
let words = sentence.split(" ");
console.log(words)

//now I remove the word name from the array sentence
let chars = sentence.split("name")
console.log(chars)

//Convert Arrray to String with join()
let hyphenated = words.join("-")
console.log(hyphenated)

//Convert String to arrray, order with .sort() and convert
//again to String
let x = sentence.split(" ").sort().join(" ");
console.log(x)
