export const getIndex = (row, column) => {
  return `R${row}C${column}`
}

export const getNeighbours = (row, column) => {
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

export const getNeighboursFromIndex = index => {
  const matches = index.match(/R([-0-9]+)C([-0-9]+)/i)
  const i = parseInt(matches[1])
  const j = parseInt(matches[2])
  return getNeighbours(i, j)
}

export const getAliveNeighboursCount = (row, column, aliveCellsIndexed) => {
  const neighbours = getNeighbours(row, column)

  return neighbours.filter(neighbourIndex => aliveCellsIndexed[neighbourIndex])
    .length
}

export const getAliveNeighboursCountFromIndex = (index, aliveCellsIndexed) => {
  const matches = index.match(/R([-0-9]+)C([-0-9]+)/i)

  const i = parseInt(matches[1])
  const j = parseInt(matches[2])
  return getAliveNeighboursCount(i, j, aliveCellsIndexed)
}

export const getRandomIndex = (rowsCount, columnsCount) => {
  const aliveCellsIndexed = {}

  for (let row = 0; row < rowsCount; row++) {
    for (let column = 0; column < columnsCount; column++) {
      const isAlive = Math.random() >= 0.7
      if (isAlive) {
        aliveCellsIndexed[getIndex(row, column)] = true
      }
    }
  }
  return aliveCellsIndexed
}

export const getUniqueValuesFromArray = array =>
  array.filter((value, index, self) => self.indexOf(value) === index)
