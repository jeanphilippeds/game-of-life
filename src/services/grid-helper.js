export const getIndex = (row, column) => {
  return `R${row}C${column}`
}

const getNeighbours = (row, column) => {
  return [
    getIndex(row - 1, column - 1),
    getIndex(row - 1, column),
    getIndex(row - 1, column + 1),
    getIndex(row, column - 1),
    getIndex(row, column + 1),
    getIndex(row + 1, column - 1),
    getIndex(row + 1, column),
    getIndex(row + 1, column + 1)
  ]
}

export const getAliveNeighboursCount = (row, column, aliveCellsIndexed) => {
  const neighbours = getNeighbours(row, column)

  return neighbours.filter(neighbourIndex => aliveCellsIndexed[neighbourIndex])
    .length
}

export const getRandomIndex = (rowsCount, columnsCount) => {
  const aliveCellsIndexed = {}

  for (let row = 0; row < rowsCount; row++) {
    for (let column = 0; column < columnsCount; column++) {
      const isAlive = Math.random() >= 0.5
      if (isAlive) {
        aliveCellsIndexed[getIndex(row, column)] = true
      }
    }
  }
  return aliveCellsIndexed
}
