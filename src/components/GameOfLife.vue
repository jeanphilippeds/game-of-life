<template>
  <div>
    <grid
      :rows-count="rowsCount"
      :columns-count="columnsCount"
      :toggle-cell="toggleCell"
      :grid-ratio="gridRatio"
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
  </div>
</template>

<script>
  import Grid from './Grid.vue'
  import BaseButton from './BaseButton.vue'
  import Range from './Range.vue'
  import { getRandomIndex, getIndex, getUniqueValuesFromArray } from '../services/grid-helper.js'
  import { tick } from '../services/physic-laws.js'

  const gridRatio = 2

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
        modifiedCells: [],
        rowsCount: 30,
        timer: null,
        gridRatio: gridRatio
      }
    },
    computed: {
      columnsCount: function() {
        return this.rowsCount * gridRatio
      }
    },
    methods: {
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
        this.aliveCellsIndexed = {},
        this.modifiedCells = []
      },
      setNextState: function () {
        const { aliveCellsIndexed, modifiedCells  } = tick(this.rowsCount, this.columnsCount, this.aliveCellsIndexed, this.modifiedCells)
        this.aliveCellsIndexed = aliveCellsIndexed
        this.modifiedCells = modifiedCells
      },
      setTimer: function () {
        this.timer = setInterval(this.setNextState, (100 - this.speed) * 10)
      },
      generateRandomAliveCellsIndex: function () {
        this.aliveCellsIndexed = getRandomIndex(this.rowsCount, this.columnsCount)
        this.modifiedCells = Object.keys(this.aliveCellsIndexed)
      },
      toggleCell: function (row, column) {
        const aliveCellsIndexedUpdated = {
          ...this.aliveCellsIndexed,
        }

        const index = getIndex(row, column)
        if (aliveCellsIndexedUpdated[index]) {
          delete aliveCellsIndexedUpdated[index]
        } else {
          aliveCellsIndexedUpdated[index] = true
        }

        this.aliveCellsIndexed = aliveCellsIndexedUpdated
        this.modifiedCells = getUniqueValuesFromArray([...this.modifiedCells, index])
      },
      isCellAlive: function (row, column) {
        return this.aliveCellsIndexed[getIndex(row, column)]
      }
    }
  }
</script>

<style>
.rows-count {
  width: 100px;
}
</style>
