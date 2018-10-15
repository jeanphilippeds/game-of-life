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
        :click-callback="doStuff"
      />
      <base-button
        name="Random"
        :click-callback="doStuff"
      />
      <base-button
        name="Clear"
        :click-callback="doStuff"
      />
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
        speed: 0
      }
    },
    methods: {
      playGame: function () {
        this.isPaused = !this.isPaused
      },
      changeSpeed: function (value) {
        this.speed = value
      }
    }
  }
</script>

<style>
</style>
