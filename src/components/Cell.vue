<template>
  <div class="cell"></div>
</template>

<script>
  export default {
    name: 'cell',
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
