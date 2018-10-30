<template>
  <div class="grid__container" :style="`--rows:${rowsCount}; --columns:${columnsCount};`">
    <cell
        v-for="index in cellsCount"
        :key="index"
        :is-alive="false"
    >
    </cell>
  </div>
</template>

<script>
  import Cell from './Cell.vue'

  export default {
    name: 'Grid',
    components: {
        Cell
    },
    props: {
        rowsCount: {
            type: Number,
            required: true
        },
        columnsCount: {
            type: Number,
            required: true
        }
    },
    computed: {
        cellsCount: function() {
            return this.rowsCount * this.columnsCount;
        }
    },
  }
</script>

<style>
.grid__container {
  width: 90vw;
  height: 30vw;
  margin: auto;
  display: grid;
  border: solid 1px black;
  background-color: black;
  grid-gap: 1px;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);
}
</style>
