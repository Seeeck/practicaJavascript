

const app = Vue.createApp({
    data() {
        return {
            titulo: 'Banco con vuejs',
            cantidad: 1000,
            enlace: 'http://youtube.com/bluuweb',
            estado: true,
            servicios: ['transferencia', 'pagos', 'giros'],
            desactivar: false
        }
    },
    methods: {
        agregarSaldo() {
            this.cantidad = this.cantidad + 100
            if (this.cantidad >= 100) {
                this.desactivar = false
            }
        },
        disminuirSaldo(valor) {
            if (this.cantidad === 0) {
                this.desactivar = true
                alert('No hay saldo')
                return
            }
            this.cantidad -= valor
        }

    },
    /* Se almacenan los valores en cache y no se vuelven a ejecutar
    si tienen el mismo valor */
    computed: {
        colorCantidad() {
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        mayusculasTexto() {
            return this.titulo.toUpperCase()
        },
        now() {
            return Date.now()
        }


    }
})