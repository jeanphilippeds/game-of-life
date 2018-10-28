<template>
  <div>{{ welcomingMessage }}</div>
</template>

<script>
  export default {
    name: 'Cell',
    props: {
      welcomingMessage: {
        type: String
      }
    }
  }
</script>
