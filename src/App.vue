<template>
  <div id="app">
    <img class="vue-logo" alt="Vue logo" src="./assets/logo.png">
    <game-of-life />
  </div>
</template>

<script>
  import GameOfLife from './components/GameOfLife'
  export default {
    name: 'app',
    components: {
      GameOfLife
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
