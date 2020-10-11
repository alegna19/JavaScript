Vue.component('hijo', {
    template:
     `
        <div py-5 bg-warning>
            <h4>Componente Hijo: {{numero}}</h4>
        </div>
    `,
    //Con props se recibe la informacion que se envia desde el Padre.
    props: ['numero']
})