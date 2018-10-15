<template>
  <div class="cell" @click="clickCallback"></div>
</template>

<script>
  export default {
    name: 'Cell',
    props: {
      clickCallback: Function
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
