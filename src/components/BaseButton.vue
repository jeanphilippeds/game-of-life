<template>
  <button @click="clickCallback">
      <span>{{ name }}</span>
  </button>
</template>

<script>
  export default {
    name: 'BaseButton',
    props: {
      name: {
        type: String,
        default: 'Click',
      },
      clickCallback: Function
    },
  }
</script>