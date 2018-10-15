<template>
  <div>
    <grid />
    <div>
      <base-button
        :name="isPaused ? 'Play' : 'Pause'"
        :click-callback="playGame"
      />
      <base-button
        name="Next"
        :click-callback="() => {}"
      />
      <base-button
        name="Random"
        :click-callback="generateRandomAliveCellsIndex"
      />
      <base-button
        name="Clear"
        :click-callback="() => {}"
      />
      <input
        class="rows-count"
        type="number"
        id="rows"
        name="rows"
        placeholder="Number of rows"
        min="30"
        max="1000" />
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
  import { getRandomIndex } from '../services/grid-helper.js'

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
        columnsCount: 90
      }
    },
    methods: {
      playGame: function () {
        this.isPaused = !this.isPaused;
      },
      changeSpeed: function (value) {
        this.speed = value;
      },
      generateRandomAliveCellsIndex: function () {
        this.aliveCellsIndexed = getRandomIndex(this.rowsCount, this.columnsCount);
      }
    }
  }
</script>

<style>
.rows-count {
  width: 100px;
}
</style>
