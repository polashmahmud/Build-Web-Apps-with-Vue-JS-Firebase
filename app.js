const app = Vue.createApp({
    data() {
        return {
            title: "This is title",
            age: 47
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title;
        }
    }
});

app.mount("#app");