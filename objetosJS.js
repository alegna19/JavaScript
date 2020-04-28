//Objetos en JavaScript
var objeto = [
  {
    name: "HTML",
    duracion: 15,
    estado: true,
    capitulos: {
      name: "Intro",
      videos: 20
    }
  }
];

//Using map method
let cap = objeto.map(obj => {
  return {
    name: obj.name,
    capContent: obj.capitulos.name
  };
});
console.log("Capitulos: ", cap);

//Arrray de objetos
var arrayObjetos = [
  {
    name: "HTML",
    status: true
  },
  {
    name: "CSS",
    status: true
  },
  {
    name: "JS",
    status: false
  }
];

//console.log(arrayObjetos[0].name);

//Para recorrer el array de objetos se usa for

for (let indice of arrayObjetos) {
  console.log(indice);
}

/*Ejemplo declarando una clase o plantilla, creamos un constructor para inicializar
los atributos de la clase e instanciamos dos objetos movieOne y movieTwo de la clase Movie, le pasamos los dos parametros que recibe el constructor. La palabra this, hace incapie a todo lo que esta dentro de la clase.
**/

class Movie {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  reproducir() {
    return `Reproduciendo pelicula ${this.name} ${this.id}`;
  }
}

//Heredando usando la palabra extends, agregamos un nuevo atributo a la serie, cap por esa razon se crea un nuevo constructor y se llama al super del padre para usar el nombre y el id del padre.

class Serie extends Movie {
  constructor(name, id, cap) {
    super(name, id);
    this.cap = cap;
  }

  reproducirCap() {
    return `Reproduciendo serie ${this.cap}... ${this.name}`;
  }
}

const movieOne = new Movie("Batman", 1);
const movieTwo = new Movie("Spiderman", 2);
const serieOne = new Serie("Dexter", 3, 55);

console.log(movieOne.reproducir());
console.log(movieTwo.reproducir());
console.log(serieOne.reproducirCap());
