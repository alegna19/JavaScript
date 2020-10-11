//El constructor es una funcion que se va a ejecutar una vez que se haga una instancia de usuario
//En el constructor se definen las propiedades de la clase usuario.
class User{
    constructor(name, lastName, age){
        this.name = name;
        this.lastName = lastName;
        this.age = age
    }

    sayHi(value){
        return value;
    }

    showInfo(){
       return `
            name: ${this.name} <br>
            lastName: ${this.lastName} <br>
            age: ${this.age} <br>
            <hr>
        `;
    }
}

// user va a hacer un nuevo usuario, al ser instanciado tiene acceso a las propiedades de la clase
const user = new User('Angie', 'Gomez', 30);

//document.write(`${user.name} ${user.lastName} she has ${user.age}` )
//document.write(user.sayHi('Hi Angie'))
document.write(user.showInfo())


class Student extends User{
    constructor(name, lastName, age, profession){
        super(name, lastName, age); //super llama al constructor del padre.
        this.profession = profession;
    }

    showInfo(){
        return `
             name: ${this.name} <br>
             lastName: ${this.lastName} <br>
             age: ${this.age} <br>
             profession: ${this.profession} <br>
             <hr>
         `;
     }

}

const user2 = new Student('Dastan', 'Marin', 12, 'Developer')
document.write(user2.showInfo())
