const app = new Vue(
    {
        el : '#root',
        data: {
            todos: [
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Bere acqua',
                    done: false
                },
                {
                    text: 'Fare palestra',
                    done: false
                },
                {
                    text: 'Mangiare gli spaghetti',
                    done: true
                },
            ]
            
        },
        methods: {
            removeItem: function (index) {
                this.todos.splice(index,1);
            }
        }
    }
)