const app = Vue.createApp({
    data() {
        return {
            title: "This is title",
            age: 47,
            show: false,
            x: 0,
            y: 0,
            url: "https://www.google.com/",
            books: [
                { id: 1, name: 'Bohubrihi', author: 'Humayun Ahmed', image: 'images/1.jpeg' },
                { id: 2, name: 'Tomake', author: 'Humayun Ahmed', image: 'images/2.jpeg' },
                { id: 3, name: 'Dorjar Opashe', author: 'Humayun Ahmed', image: 'images/3.jpeg' },
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