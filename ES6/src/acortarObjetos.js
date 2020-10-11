const createObject = (name, age) => {
    return {
        //name = name,//asi se hacia en javascript antes
        name,//Con EM6 no se asigna la variable que viene por parametro.    
        age,
        showInfo(){
            return `${name}, ${age}`
        }
    }
}

console.log(createObject('Maria', '30').showInfo())