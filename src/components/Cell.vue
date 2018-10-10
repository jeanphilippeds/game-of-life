<template>
  <div class="cell" :is-alive="isAlive"></div>
</template>

<script>
  export default {
    name: 'cell',
    props: {
      isAlive: Boolean
    }
  }
</script>

<style>
  .cell {
    background-color: white;
  }

  .cell[is-alive] {
    background-color: black;
  }
</style>
