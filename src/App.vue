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
      :toggle-cell-state-callback="toggleCellState"
    >
    </grid>
    <div class="buttons-container">
      <button @click="randomizeMap()">Random</button>
      <button @click="updateALiveCellsMap()">Next</button>
    </div>
  </div>
</template>

<script>
import Grid from './components/Grid'
import { getRandomizedMap } from './services/grid-helper.js'
import { getNextMap } from './services/conway-rules.js'

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
    },
    updateALiveCellsMap: function () {
      this.aliveCellsMap = getNextMap(this.rowsCount, this.columnsCount, this.aliveCellsMap)
    },
    toggleCellState: function (cellId) {
      const newAliveCellsMap = { ...this.aliveCellsMap }
      if (newAliveCellsMap[cellId]) {
        delete newAliveCellsMap[cellId]
      } else {
        newAliveCellsMap[cellId] = true
      }

      this.aliveCellsMap = newAliveCellsMap
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
.buttons-container button + button {
  margin-left: 10px;
}
</style>
