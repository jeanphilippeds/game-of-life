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
  background-color: white;
}
.alive {
  background-color: black;
}
</style>
