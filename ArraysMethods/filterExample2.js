//FilterExample2

let productArray = [
  {
    id: 0,
    name: "Grape",
    price: "100"
  },
    {
    id: 1,
    name: "Watermelon",
    price: "200"
  },
    {
    id: 2,
    name: "Strawberry",
    price: "300"
  },
    {
    id: 3,
    name: "Banana",
    price: "400"
  },
      {
    id: 4,
    name: "Apple",
    price: "500"
  }
]

let newProduct = productArray.filter( product => {
  return product.price > 200 && product.name.includes("pp");
})

console.log("Products Array: ", productArray)
console.log("New Products Array: ", newProduct)


/*filter(item, index, array)
Imprime el producto y su respectivo indice 
let array = productArray.filter( (product,index, array) =>{
  //console.log(product.name, index)
  console.log(array[index] == product) //Se valida si lo que esta en el array es igual al productto que se itera 
})**/

/* using this, imprime 5 veces el arreglo por que es lo0 que se le pasa despues de }, productArray
productArray.filter(function(item){
  console.log(this)                    
},productArray)*/








