<template>
  <div>
    <grid />
    <base-button
      :name="isPaused ? 'Play' : 'Pause'"
      :click-callback="playGame"
    />
    <range
      :change-callback="changeSpeed"
    />
  </div>
</template>

<script>
  import Grid from './Grid.vue'
  import BaseButton from './BaseButton.vue'
  import Range from './Range.vue'

  export default {
    name: 'gameOfLife',
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
