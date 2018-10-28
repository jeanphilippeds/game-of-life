<template>
  <div id="game-of-life">
    <div class="logos-container">
      <img class="theodo-logo" alt="Theodo logo" src="./assets/theodo-logo.png">
      <img class="vue-logo" alt="Vue logo" src="./assets/vue-logo.png">
    </div>
    <cell :is-alive="true"></cell>
    <cell :is-alive="false"></cell>
  </div>
</template>

<script>
import Cell from './components/Cell'

export default {
  name: 'GameOfLife',
  components: {
    Cell
  }
}
</script>

<style>
#game-of-life {
  padding: 60px 40px;
  position: relative;
}
.logos-container {
  position: absolute;
  top: 0;
  left: 0;
}
.logos-container img {
  height: 40px;
}
.logos-container img + img {
  margin-left: 5px;
}
</style>
