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

const getAliveNeighbours = (row, column, aliveCellsIndexed) => {
  return getNeighbours(row, column).filter(neighbourIndex => aliveCellsIndexed[neighbourIndex])
}

export const getAliveNeighboursCount = (row, column, aliveCellsIndexed) => {
  return getAliveNeighbours(row, column, aliveCellsIndexed).length
}

export const getMainNeighbourColour = (row, column, aliveCellsIndexed) => {
  const aliveNeighbours = getAliveNeighbours(row, column, aliveCellsIndexed)

  let redCount = 0
  aliveNeighbours.forEach(currentIndex => {
    if (aliveCellsIndexed[currentIndex] == 'red') redCount++
  })

  return redCount > 1 ? 'red' : 'green'
}

export const getRandomIndex = (rowsCount, columnsCount) => {
  const aliveCellsIndexed = {}

  for (let row = 0; row < rowsCount; row++) {
    for (let column = 0; column < columnsCount; column++) {
      const isAlive = Math.random() >= 0.7
      const isRed = Math.random() >= 0.5 ? 'red' : 'green'
      if (isAlive) {
        aliveCellsIndexed[getIndex(row, column)] = isRed
      }
    }
  }
  return aliveCellsIndexed
}
