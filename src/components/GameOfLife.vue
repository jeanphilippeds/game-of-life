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
  </div>
</template>

<script>
  import Grid from './Grid.vue'
  import BaseButton from './BaseButton.vue'

  export default {
    name: 'GameOfLife',
    components: {
      Grid,
      BaseButton
    },
    data: function() {
      return {
        isPaused: true
      }
    },
    methods: {
      playGame: function () {
        this.isPaused = !this.isPaused
        window.console.log('Hello')
      }
    }
  }
</script>

<style>
</style>
