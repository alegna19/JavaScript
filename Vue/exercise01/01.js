const app = new Vue({
    el: "#app",
    data: {
        titulo: 'Hola Mundo con Vue',
        nombres: 'Nombres de Clientes',
        nuevaFruta: '',
        fondo: 'bg-danger',
        frutas: [
            {nombre: 'Manzana', cantidad: 10},
            {nombre: 'Pera', cantidad: 0},
            {nombre: 'Banano', cantidad: 13}
        ],
        clientes: [
            {nombre: 'Angie', apellido: 'Marin'},
            {nombre: 'Dastan', apellido: 'Marin'},
            {nombre: 'Martina', apellido: 'Marin'}
        ],
        total: 0
    },
    methods: {
        agregarFruta(){
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad:this.nuevaCantidad
            });
            this.nuevaFruta = ''
        }
    },
    computed:{
        sumFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    }
})