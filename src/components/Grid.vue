<template>
  <div class="grid__container" :style="`--rows:${rowsCount}; --columns:${columnsCount};`">
    <cell
        v-for="index in cellsCount"
        :key="index"
        :is-alive="false"
    />
  </div>
</template>

<script>
  import Cell from './Cell.vue'

  const rowsCount = 30
  const gridRatio = 3

  export default {
    name: 'grid',
    components: {
        Cell
    },
    computed: {
        rowsCount: function() {
            return rowsCount;
        },
        columnsCount: function() {
            return this.rowsCount * gridRatio;
        },
        cellsCount: function() {
            return this.rowsCount * this.columnsCount;
        }
    },
    methods: {
        columnIndex: function(index) {
            return index % this.columnsCount;
        },
        rowIndex: function(index) {
            return Math.ceil(index/this.columnsCount);            
        },
    },
  }
</script>

<style>
    .grid__container {
        width: 90vw;
        height: 30vw;
        margin: auto;
        background-color: black;
        border: black solid 1px;
        display: grid;
        grid-gap: 1px;
        grid-template-columns: repeat(var(--columns), 1fr);
        grid-template-rows: repeat(var(--rows), 1fr);
    }
</style>
