<template>
  <div class="cell" :class="{ alive: isAlive }"></div>
</template>

<script>
  export default {
    name: 'Cell',
    props: {
      isAlive: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style>
.cell {
  height: 10px;
  width: 10px;
  border: 1px solid black;
}
.alive {
  background-color: black;
}
</style>
