//Arrays of Objects
//Find the names of all the people who have "gmail.com" in they email 

let people = [
  {id:123, name: "Atlas", email: "atlas@yahoo.com"},
  {id:123, name: "Angie", email: "angie@gmail.com"},
  {id:123, name: "Dastan", email: "dastan@hotmail.com"},
  {id:123, name: "Martina", email: "angiemartina@gmail.com"}
]

//other solution using indexOf
/*let replicants = people.filter(person => (person.email.indexOf("gmail.com") > -1)).map(person => person.name)*/

//map return a new array with the names that have gmail
let replicants = people.filter(person => person.email.includes("gmail.com")).map(person => person.name)

console.log(replicants);



