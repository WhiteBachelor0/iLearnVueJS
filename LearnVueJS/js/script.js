var someData = 'Hello everybody!'

new Vue ({
    el: '#app',
    data: {
        show: true,
        message: '',
        cars: [
            {model: 'BMV ex4', speed: 80},
            {model: 'BMV ex5', speed: 90},
            {model: 'Volkswagen Passat', speed: 80},
            {model: 'Toyota Corolla', speed: 85}
        ]
    },

    methods: {
        
    },

    computed: {

    },

    filters: {
        uppercase (mess) {
            return mess.toUpperCase();
        }
    }

});