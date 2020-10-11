//Con los ... puntos le puedo pasar cualquier cantidad de datos que reciba por parametro, en vez de declarar cada variable
const showData = (...data)=>  {
    console.log(data);
}

showData('Angie', 30,'Colombia', 'Developer');