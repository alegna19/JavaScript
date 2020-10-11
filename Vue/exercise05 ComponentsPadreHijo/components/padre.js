Vue.component('padre',{
    template: 
    `
    <div class="p-5 bg-primary text-white">
        <h2>Componente Padre: {{numeroPadre}}</h2>
        <hr>
        <button class="btn btn-danger" @click="numeroPadre++">+</button>
        <hijo :numero ="numeroPadre"></hijo>
    </div>
    `,
    data(){
        return{
            numeroPadre: 0
        }
    }
})