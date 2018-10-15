<template>
  <input type="range" id="speed" v-model="value" @input="handleChange"
    min="0" max="100" step="2" />
</template>

<script>
export default {
  name: 'Range',
  props: {
    changeCallback: Function
  },
  methods: {
    handleChange: function () {
      this.changeCallback(parseInt(this.value))
    }
  },
  data: function () {
    return {
        value: 0
    }
  }
}
</script>

