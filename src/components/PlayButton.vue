<template>
  <button @click="handleClick">
      <span v-if="isPaused">Play</span>
      <span v-else>Pause</span>
  </button>
</template>

<script>
  export default {
    name: 'app',
    props: {
      clickCallback: Function
    },
    data: function() {
      return {
        isPaused: false
      }
    },
    methods: {
      handleClick: function () {
        this.isPaused = !this.isPaused
        this.clickCallback()
      }
    }
  }
</script>