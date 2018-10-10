<template>
  <div id="app">
    <img class="vue-logo" alt="Vue logo" src="./assets/logo.png">
    <grid/>
  </div>
</template>

<script>
  import Grid from './components/Grid.vue'
  export default {
    name: 'app',
    components: {
      Grid
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 10px;
  }

  .vue-logo {
    height: 40px;
  }
</style>
