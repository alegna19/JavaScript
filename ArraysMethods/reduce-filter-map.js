//Reduce, Filter and Map

let cervezas = [
  {nombre: "Erdinger", capacidad: "500"},
  {nombre: "Delirium", capacidad: "300"},
  {nombre: "Diosa Blanca", capacidad: "700"},
  {nombre: "Fuller", capacidad: "1500"},
  {nombre: "Guinnes", capacidad: "500"}  
]
//filter
//Me trae las cervezas con mayor capacidad
let mayorCapacidad = cervezas.filter(val => val.capacidad >= 500)
console.log(mayorCapacidad)

//map
//Se cambia la capacidad de cada cerveza
let cambioCapacidad = cervezas.map(val => {
  val.capacidad -= 100; //por cada elemento - reduce 100 y le asigna
  return val //retorno el objeto
})
console.log(cambioCapacidad)

//reduce, evalua el resultado del primer elemento y lo evalua con el segundo elemento del arreglo
//El primer parametro es el acumulado
//El segundo parametro es el nombre del elemento cuando hace el ciclo
//Cuantos mililitros tengo en mis cervezas
//acumulado comienza en 0 y en cada iteracion suma la capacidad

let mililitros = cervezas.reduce(
    ( acumulado,sig ) => acumulado + sig.capacidad, 0)
console.log(mililitros)












