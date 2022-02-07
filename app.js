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
                { id: 1, name: 'Bohubrihi', author: 'Humayun Ahmed', image: 'images/1.jpeg', isFav: true },
                { id: 2, name: 'Tomake', author: 'Humayun Ahmed', image: 'images/2.jpeg', isFav: false },
                { id: 3, name: 'Dorjar Opashe', author: 'Humayun Ahmed', image: 'images/3.jpeg', isFav: true },
            ]
        }
    },
    methods: {
        toggleFav(book) {
            book.isFav = !book.isFav;
        }
    },
    computed: {
        totalBooks() {
            return this.books.length;
        },
        favBooksCount() {
            let total = this.books.filter((book) => book.isFav);
            return total.length;
        },
        favBooks() {
            return this.books.filter((book) => book.isFav);
        },
    }
});

app.mount("#app");