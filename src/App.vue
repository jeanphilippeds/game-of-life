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
      <button @click="togglePlayMode()" v-html="playModeButton"></button>
      <button @click="clearMap()">Clear</button>
    </div>
    <div>
      <span class="preset">
        <input type="radio" value="" v-model="presetSelected" id="default" selected />
        <label for="default">No preset</label>
      </span>
      <span
        v-for="(presetObject, presetKey) in presets"
        :key="presetKey"
        class="preset"
      >
        <input type="radio" :value="presetKey" v-model="presetSelected" :id="presetKey" selected />
        <label :for="presetKey">{{ presetObject.name }}</label>
      </span>
    </div>
  </div>
</template>

<script>
import Grid from './components/Grid'
import { getRandomizedMap, getCoordinatesFromCellId, getCellId } from './services/grid-helper.js'
import { getNextMap } from './services/conway-rules.js'
import Presets from './services/presets.js'

const rowsCount = 30

export default {
  name: 'GameOfLife',
  components: {
    Grid
  },
  data: function () {
    return {
      rowsCount: rowsCount,
      aliveCellsMap: {},
      iterationsTimer: null,
      presetSelected: ''
    }
  },
  computed: {
    columnsCount: function() {
      const ratio = 3
      return rowsCount * ratio
    },
    playModeButton: function () {
      return this.iterationsTimer?'&#10074&#10074':'&#x25b6'
    },
    presets: function () {
      return Presets
    }
  },
  methods: {
    randomizeMap: function () {
      this.aliveCellsMap = getRandomizedMap(this.rowsCount, this.columnsCount)
    },
    updateALiveCellsMap: function () {
      this.aliveCellsMap = getNextMap(this.rowsCount, this.columnsCount, this.aliveCellsMap)
    },
    togglePlayMode: function () {
      if (this.iterationsTimer) {
        clearInterval(this.iterationsTimer)
        return this.iterationsTimer = null
      }
      this.iterationsTimer = setInterval(this.updateALiveCellsMap, 300)
    },
    clearMap: function () {
      this.aliveCellsMap = {}
    },
    toggleCellState: function (cellId) {
      const newAliveCellsMap = { ...this.aliveCellsMap }
      if (newAliveCellsMap[cellId]) {
        delete newAliveCellsMap[cellId]
      } else {
        newAliveCellsMap[cellId] = true
      }

      if (this.presetSelected !== '') {
        this.drawPattern(cellId, newAliveCellsMap)
      }
      this.aliveCellsMap = newAliveCellsMap
    },
    drawPattern: function (cellId, newAliveCellsMap) {
      const [row, column] = getCoordinatesFromCellId(cellId)
      const presetPattern = this.presets[this.presetSelected].pattern
      const presetShape = this.presets[this.presetSelected].shape

      for (let patternRowIndex = 0; patternRowIndex < presetShape[0]; patternRowIndex++) {
        for (let patternColIndex = 0; patternColIndex < presetShape[1]; patternColIndex++) {
          if (presetPattern[patternRowIndex][patternColIndex] === 1) newAliveCellsMap[getCellId(row + patternRowIndex, column + patternColIndex)] = true
        }
      }
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
.preset {
  margin: 10px;
  font-family: sans-serif;
}
</style>
