<template>
  <h1>{{ title }}</h1>

  <div @click="handleClick" ref="box" class="box"></div>
  <input type="text" ref="name" placeholder="name" style="margin-top: 20px" />

  <simple-modal />
</template>

<script>
import SimpleModal from "./components/Modal.vue";

export default {
  name: "App",
  components: { SimpleModal },
  data() {
    return {
      title: "This is my first title",
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.box);
      this.$refs.box.classList.add("active");
      this.$refs.name.focus();
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

.box {
  width: 200px;
  height: 200px;
  cursor: pointer;
  background: red;
}

.box.active {
  background: blue;
}
</style>
