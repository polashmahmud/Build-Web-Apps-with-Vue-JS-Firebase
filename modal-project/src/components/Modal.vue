<template>
  <div class="backdrop">
    <div class="modal">
      <h1>This is modal heading</h1>
      <p>Modal content here!</p>
    </div>
  </div>
</template>

<script>
export default {};
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

h1 {
  background: red;
  border: none;
}

p {
  font-style: normal;
}
</style>