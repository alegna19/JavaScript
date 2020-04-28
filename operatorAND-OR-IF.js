//Operator && and || with sentence IF

let ingredients = ["lettuce", "cheddar", "tomato"];

//ingredient es el parametro que recibo para validar si esta en mi arreglo
let sandwichesHas = function(ingredient){
  for(let i of ingredients){
    if(i == ingredient){
      return true;
    }
  }
  return false;
}

if(sandwichesHas('ham') || sandwichesHas('chicken') || sandwichesHas('beef')){
  console.log('Sandwiches has meet')
}else{
  console.log('Mo meat')
}

if(sandwichesHas('lettuce') && sandwichesHas('tomato')){
  console.log('It had both')
}else{
  console.log('It had not both but maybe one of them')
}





