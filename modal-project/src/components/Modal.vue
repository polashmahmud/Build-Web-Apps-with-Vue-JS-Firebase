<template>
  <div class="backdrop">
    <div class="modal" :class="{ dark: theme === 'dark' }">
      <h1>{{ heading }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: "Welcome Form",
    },
    text: {
      type: String,
    },
    theme: {
      type: String,
      default: "white",
    },
  },
};
</script>

<style scoped>
.backdrop {
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
}

.modal {
  width: 400px;
  margin: 100px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
}

.modal.dark {
  background: black;
  color: white;
}

h1 {
  border: none;
}

p {
  font-style: normal;
  text-align: center;
}
</style>