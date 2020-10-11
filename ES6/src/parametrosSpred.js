//En vez de recibir los datos ... en el metodo como parametrosRest, le pasamos los datos ocn esa estructura

const showData = (... data ) => {
    console.log(data);
}

//Se crea un arreglo para pasar los parametros que quiero al arreglo.
const arrayData = ['Angie', 30,'Colombia', 'Developer', 'angie@gmail.com'];
showData(... arrayData)