<template>
  <div>
    <div>
      <span class="red-count">{{ redCount() }}</span>
      <span class="green-count">{{ greenCount() }}</span>
    </div>
    <grid
      :rows-count="rowsCount"
      :columns-count="columnsCount"
      :toggle-cell="toggleCell"
      :is-cell-alive="isCellAlive"
    >
    </grid>

    <div>
      <base-button
        :name="isPaused ? 'Play' : 'Pause'"
        :click-callback="playGame"
      />
      <base-button
        name="Next"
        :click-callback="setNextState"
      />
      <base-button
        name="Random"
        :click-callback="generateRandomAliveCellsIndex"
      />
      <base-button
        name="Clear"
        :click-callback="clearState"
      />
      <input
        class="rows-count"
        type="number"
        v-model.number="rowsCount"
        placeholder="Number of rows"
        min="30"
        max="100" />
    </div>
    <div>
      <range
        :change-callback="changeSpeed"
      />
    </div>
    <div>
      <span>
        <input type="radio" value="" v-model="presetSelected" id="default" selected />
        <label for="default">No preset</label>
      </span>
      <span
        v-for="(presetObject, presetKey) in presets"
        :key="presetKey"
      >
        <input type="radio" :value="presetKey" v-model="presetSelected" :id="presetKey" selected />
        <label :for="presetKey">{{ presetObject.name }}</label>
      </span>
    </div>
    <div>
      <span>
        <input type="radio" value="red" v-model="paintColour" id="red" selected />
        <label for="default" style="color:red;">Red</label>
      </span>
      <span>
        <input type="radio" value="green" v-model="paintColour" id="green" selected />
        <label for="default" style="color:green;">Green</label>
      </span>
    </div>
  </div>
</template>

<script>
  import Grid from './Grid.vue'
  import BaseButton from './BaseButton.vue'
  import Range from './Range.vue'
  import Presets from '../services/presets.js'
  import { getRandomIndex, getIndex } from '../services/grid-helper.js'
  import { tick } from '../services/physic-laws.js'

  const gridRatio = 3

  export default {
    name: 'GameOfLife',
    components: {
      Grid,
      BaseButton,
      Range
    },
    data: function() {
      return {
        isPaused: true,
        speed: 0,
        aliveCellsIndexed: {},
        rowsCount: 30,
        timer: null,
        presetSelected: '',
        paintColour: 'red'
      }
    },
    computed: {
      columnsCount: function() {
        return this.rowsCount * gridRatio
      },
      presets: function () {
        return Presets
      },
    },
    methods: {
      redCount: function() {
        return Object.values(this.aliveCellsIndexed).filter(element => element === 'red').length
      },
      greenCount: function() {
        return Object.values(this.aliveCellsIndexed).filter(element => element === 'green').length
      },
      playGame: function () {
        this.isPaused = !this.isPaused;
        if (!this.isPaused) {
          this.setTimer()
        }
        else {
          clearInterval(this.timer)
        }
      },
      changeSpeed: function (value) {
        this.speed = value;
        if (!this.isPaused) {
          clearInterval(this.timer)
          this.setTimer()
        }
      },
      clearState: function () {
        this.aliveCellsIndexed = {}
      },
      setNextState: function () {
        this.aliveCellsIndexed = tick(this.rowsCount, this.columnsCount, this.aliveCellsIndexed)
      },
      setTimer: function () {
        this.timer = setInterval(this.setNextState, (100 - this.speed) * 10)
      },
      generateRandomAliveCellsIndex: function () {
        this.aliveCellsIndexed = getRandomIndex(this.rowsCount, this.columnsCount)
      },
      toggleCell: function (row, column) {
        const aliveCellsIndexedUpdated = {
          ...this.aliveCellsIndexed,
        }

        const index = getIndex(row, column)
        if (aliveCellsIndexedUpdated[index]) {
          delete aliveCellsIndexedUpdated[index]
        } else {
          aliveCellsIndexedUpdated[index] = this.paintColour
        }

        this.drawPattern(row, column, aliveCellsIndexedUpdated)

        this.aliveCellsIndexed = aliveCellsIndexedUpdated
      },
      isCellAlive: function (row, column) {
        return this.aliveCellsIndexed[getIndex(row, column)]
      },
      drawPattern: function (row, column, aliveCellsIndexedUpdated) {
        if (this.presetSelected !== '') {
          const presetPattern = this.presets[this.presetSelected].pattern
          const presetShape = this.presets[this.presetSelected].shape

          for (let patternRowIndex = 0; patternRowIndex < presetShape[0]; patternRowIndex++) {
            for (let patternColIndex = 0; patternColIndex < presetShape[1]; patternColIndex++) {
              if (presetPattern[patternRowIndex][patternColIndex] === 1) aliveCellsIndexedUpdated[getIndex(row + patternRowIndex, column + patternColIndex)] = this.paintColour
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
.rows-count {
  width: 100px;
}
.red-count {
  font-size: 25px;
  color: red;
  padding: 5px;
}
.green-count {
  font-size: 25px;
  color: green;
  padding: 5px;
}
</style>
