const app = Vue.createApp({
    data() {
        return {
            title: "This is title",
            age: 47,
            show: false,
            x: 0,
            y: 0,
            books: [
                { id: 1, name: 'book one', author: 'some one' },
                { id: 2, name: 'book two', author: 'some two' },
                { id: 3, name: 'book three', author: 'some three' },
            ]
        }
    },
    methods: {
        handleMouse(e, number) {
            console.log(e, e.type);
            if (number) {
                console.log(number)
            }
        },

        handleMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
});

app.mount("#app");