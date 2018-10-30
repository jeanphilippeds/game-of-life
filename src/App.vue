<template>
  <div id="game-of-life">
    <div class="logos-container">
      <img class="theodo-logo" alt="Theodo logo" src="./assets/theodo-logo.png">
      <img class="vue-logo" alt="Vue logo" src="./assets/vue-logo.png">
    </div>
    <grid :rows-count="rowsCount" :columns-count="columnsCount"></grid>
  </div>
</template>

<script>
import Grid from './components/Grid'

const rowsCount = 30

export default {
  name: 'GameOfLife',
  components: {
    Grid
  },
  data: function () {
    return {
      rowsCount: rowsCount
    }
  },
  computed: {
    columnsCount: function() {
      const ratio = 3
      return rowsCount * ratio
    }
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
