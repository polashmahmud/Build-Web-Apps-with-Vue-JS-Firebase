const app = Vue.createApp({
    data() {
        return {
            title: "This is title",
            age: 47,
            show: false
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title;
        },

        toggleShow() {
            this.show = !this.show;
        }
    }
});

app.mount("#app");