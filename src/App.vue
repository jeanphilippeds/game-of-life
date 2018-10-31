<template>
  <div id="game-of-life">
    <div class="logos-container">
      <img class="theodo-logo" alt="Theodo logo" src="./assets/theodo-logo.png">
      <img class="vue-logo" alt="Vue logo" src="./assets/vue-logo.png">
    </div>
    <grid
      :rows-count="rowsCount"
      :columns-count="columnsCount"
      :alive-cells-map="aliveCellsMap"
    >
    </grid>
    <div class="buttons-container">
      <button @click="randomizeMap()">Random</button>
    </div>
  </div>
</template>

<script>
import Grid from './components/Grid'
import { getRandomizedMap } from './services/grid-helper.js'

const rowsCount = 30

export default {
  name: 'GameOfLife',
  components: {
    Grid
  },
  data: function () {
    return {
      rowsCount: rowsCount,
      aliveCellsMap: {}
    }
  },
  computed: {
    columnsCount: function() {
      const ratio = 3
      return rowsCount * ratio
    }
  },
  methods: {
    randomizeMap: function () {
      this.aliveCellsMap = getRandomizedMap(this.rowsCount, this.columnsCount)
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
.buttons-container {
  margin: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: rgba(220, 220, 220, 0.5);
}
</style>
