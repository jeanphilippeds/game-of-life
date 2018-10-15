const GridHelper = {}

GridHelper.getIndex = (row, column) => {
    return `R${row}C${column}`
  }
  
  GridHelper.getNeighbours = (row, column) => {
    return [
      GridHelper.getIndex(row - 1, column - 1),
      GridHelper.getIndex(row - 1, column),
      GridHelper.getIndex(row - 1, column + 1),
      GridHelper.getIndex(row, column - 1),
      GridHelper.getIndex(row, column + 1),
      GridHelper.getIndex(row + 1, column - 1),
      GridHelper.getIndex(row + 1, column),
      GridHelper.getIndex(row + 1, column + 1)
    ]
  }
  
  GridHelper.getAliveNeighboursCount = (row, column, aliveCellsIndex) => {
    const neighbours = GridHelper.getNeighbours(row, column)
  
    return neighbours.filter(neighbourIndex => aliveCellsIndex[neighbourIndex])
      .length
  }
  
  export default GridHelper
  