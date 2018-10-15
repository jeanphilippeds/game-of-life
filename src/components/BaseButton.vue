<template>
  <button @click="clickCallback">
      <span>{{ name }}</span>
  </button>
</template>

<script>
  export default {
    name: 'app',
    props: {
      name: {
        type: String,
        default: 'Click',
      },
      clickCallback: Function
    },
  }
</script>