<template>
  <div>
    <grid />
    <base-button
      :name="isPaused ? 'Play' : 'Pause'"
      :click-callback="playGame"
    />
  </div>
</template>

<script>
  import Grid from './Grid.vue'
  import BaseButton from './buttons/BaseButton.vue'

  export default {
    name: 'gameOfLife',
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
