//Method includes()

let dwarves = ['Grumpy', 'Happy', 'Sneezy', 'Sleepy', 'Doc']
let name1 = 'Happy'
let name2 = 'Ugly'

//includes() method return true/false
let hasHappy = dwarves.includes(name1)
console.log("Contains Happy: ", hasHappy)

//Star looking happy since position 2 into the array.
let hasHappy2 = dwarves.includes(name1, 2)
console.log("Contains Happy2: ", hasHappy2)

let hasUgly = dwarves.includes(name2)
console.log("Contains Ugly: ", hasUgly)


