<template>
  <div>
    <grid />
    <play-button
      :click-callback="playGame"
    />
  </div>
</template>

<script>
  import Grid from './Grid.vue'
  import PlayButton from './PlayButton.vue'
  export default {
    name: 'gameOfLife',
    components: {
      Grid,
      PlayButton
    },
    methods: {
      playGame: function () {
        window.console.log('Hello')
      }
    }
  }
</script>

<style>
</style>
