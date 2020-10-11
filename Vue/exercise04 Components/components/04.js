
Vue.component('saludo', {
    template: 
    `
    <div>
        <h1>{{saludo}}</h1>
        <h3>Text From the Component!!!</h3>
    </div>
    `,
    data() {
        return {
            saludo: 'Hi from Vue using template'
        }
    }
})


