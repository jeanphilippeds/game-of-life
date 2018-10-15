<template>
  <div class="cell"></div>
</template>

<script>
  export default {
    name: 'Cell',
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
