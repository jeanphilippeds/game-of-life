<template>
  <div>
    <grid
      :rows-count="rowsCount"
      :columns-count="columnsCount"
      :toggle-cell="toggleCell">
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
        rowsCount: 30
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
      },
      changeSpeed: function (value) {
        this.speed = value;
      },
      clearState: function () {
        this.aliveCellsIndexed = {}
      },
      setNextState: function () {
        this.aliveCellsIndexed = tick(this.rowsCount, this.columnsCount, this.aliveCellsIndexed)
      },
      generateRandomAliveCellsIndex: function () {
        this.aliveCellsIndexed = getRandomIndex(this.rowsCount, this.columnsCount);
      },
      toggleCell: function (row, column) {
        const index = getIndex(row, column)
        if (this.aliveCellsIndexed.hasOwnProperty(index)) {
          delete this.aliveCellsIndexed[index]
        } else {
          this.aliveCellsIndexed[index] = true
        }
      }
    }
  }
</script>

<style>
  .rows-count {
    width: 100px;
  }
</style>
