const PhysicLaws = {}

PhysicLaws.tick = function(previousGridState) {
  const rowsCount = previousGridState.length
  const columnsCount = previousGridState[0].length

  return previousGridState
}

PhysicLaws.getNeighbours = (row, column) => {
  return [
    `R${row - 1}C${column - 1}`,
    `R${row - 1}C${column}`,
    `R${row - 1}C${column + 1}`,
    `R${row}C${column - 1}`,
    `R${row}C${column + 1}`,
    `R${row + 1}C${column - 1}`,
    `R${row + 1}C${column}`,
    `R${row + 1}C${column + 1}`
  ]
}

PhysicLaws.getAliveNeighboursCount = (row, column, aliveCellsIndex) => {
  const neighbours = PhysicLaws.getNeighbours(row, column)

  return neighbours.filter(neighbourIndex => aliveCellsIndex[neighbourIndex])
    .length
}

export default PhysicLaws
