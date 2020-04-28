
/**Map sirve para simplificar la estructura de un objeto
 * Se quiere que el customer este a la misma altura que los demas elementos del objeto orders, para esto usamos map, con el fin de simplificar
 * la estructura de las ordenes.
 * map genera un nuevo arreglo a partir de un arreglo existente y ademas lo podemos recorrer
 * 
 */

let orders = [
    {
        orderNumber: 1,
        total: 100,
        customer: {
            name: "Angie"
        }
    },
    {
        orderNumber: 2,
        total: 200,
        customer: {
            name: "Dastan"
        }
    },
    {
        orderNumber: 3,
        total: 300,
        customer: {
            name: "Martina"
        }
    },
    {
        orderNumber: 4,
        total: 400,
        customer: {
            name: "Atlas"
        }
    }
]

    /*map utiliza 3 argumentos, pero en este caso usaremos solo uno, 
    una funcion que se va a ejecutar para cada elemento de la lista.
    EMACScript 5, se una como parametro la funcion y dentro los argumentos.
    let newOrders = orders.map(function(){       
    })*/

    //EMACScript 6, cada elemento que iteramos va a pasar a ser la variable order, el arrow function se va a ejecutar 4 veces
    //uno por cada elemento del arreglo. y se genera una expresion mas sencilla del nuevo arreglo.

    let newOrders = orders.map(order => {
        return {
            orderNumber: order.orderNumber,
            total: order.total,
            customerName: order.customer.name //Es mucho mas facil de ver el resultado para obtener customer name
        }
    })

    let newOrders2 = orders.map(order => {
        return {
            orderNumber: order.orderNumber
        }
    })

    console.log("orders =>" , orders)
    console.log("newOrders =>" , newOrders)
    console.log("newOrders2 =>" , newOrders2)

    /**
     * El methodo map tambien recibe el parametro index, me dice la ubicacion que tiene order en el arreglo original
     * El tercer parametro que recibe map es el arreglo original*/
  

     orders.map((order,index,arr) =>{
        console.log("Index: ",index)
     })   







