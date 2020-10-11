//Las promesas es un codigo que nos permite esperar a que suceda algo
//Las promesas necesitan de dos parametros resolve and reject
//resolve le dira a mi codiigo que todo fue correcto

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = true;
        if(exito){
            resolve('La operacion tuvo exito');
        }else {
            reject('La operacion NO tuvo exito');
        }
    }, 3000); //Para ejecutar despues de un tiempo resolve o reject
})

//resolve va a ejecutar la promesa si todo esta bien.
promesa.then((mensaje) => {
    alert(mensaje);
});

promesa.catch((mensaje) => {
    alert(mensaje);
});
