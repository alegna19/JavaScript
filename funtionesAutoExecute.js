
//IIFE(Immediately Invoked Function Expression)

/*function addInfo(){
  console.log("Add your personal Info: ")
}
addInfo();*/

//Una funsion IEFE es una funcion autoejecutable. con los () al final.
(function addInfo(){
  console.log("Add your personal Info: ");
})();

//funciones autoejecutables con arrow flecha
(() =>{
    console.log("Add your personal Info: ");
})();

//funciones autoejecutables con arrow flecha y parametro
((name) =>{
    console.log(`Add your personal Info: ${name}`);
})("Angie");