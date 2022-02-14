<template>
  <h1>{{ title }}</h1>
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
};
</script>

<style>
h1 {
  text-align: center;
  border-bottom: 1px solid;
}
</style>
