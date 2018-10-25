<template>
  <div class="grid__container" :style="`width: ${width}vw;height: ${height}vw;--rows: ${rowsCount};--columns: ${columnsCount};`">
    <div
        v-for="index in cellsCount"
        :key="index"
        class="cell"
        :is-alive="isCellAliveFromIndex(index)"
        @click="handleCellClick(index)"
    >
    </div>
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
        gridRatio: Number,
        toggleCell: Function,
        rowsCount: {
            type: Number,
            required: true
        },
        columnsCount: {
            type: Number,
            required: true
        },
        isCellAlive: {
            type: Function,
            required: true
        }
    },
    computed: {
        cellsCount: function() {
            return this.rowsCount * this.columnsCount;
        },
        height: function () {
            return Math.floor(90/this.gridRatio)
        },
        width: function () {
            return Math.min(100, this.height*this.gridRatio)
        }
    },
    methods: {
        columnIndex: function(index) {
            return (index - 1) % this.columnsCount;
        },
        rowIndex: function(index) {
            return Math.floor((index - 1)/this.columnsCount);            
        },
        handleCellClick: function(index) {
            this.toggleCell(this.rowIndex(index), this.columnIndex(index))
        },
        isCellAliveFromIndex: function(index) {
            return this.isCellAlive(this.rowIndex(index), this.columnIndex(index))
        }
    },
  }
</script>

<style>
.grid__container {
  margin: auto;
  background-color: black;
  border: black solid 1px;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);
}
.cell {
  background-color: white;
}

.cell[is-alive] {
  background-color: black;
}
</style>
