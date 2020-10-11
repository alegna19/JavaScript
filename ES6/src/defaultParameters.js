
function addUser(name, country, phone = 'number not specific'){
    return `name: ${name}, country: ${country}, phone: ${phone}`;
}

//No se pasa el parametro phone y se puede definir el valor por defecto al principio, asi no sacara undefined
//Si no se pasa el parametro en la funcion, carga elv alor por defecto.
console.log(addUser('Angie', 'Colombia'))
