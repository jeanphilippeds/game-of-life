const PhysicLaws = {}

PhysicLaws.tick = function(previousGridState) {
  const rowsCount = previousGridState.length
  const columnsCount = previousGridState[0].length

  return previousGridState
}

PhysicLaws.getIndex = (row, column) => {
  return `R${row}C${column}`
}

PhysicLaws.getNeighbours = (row, column) => {
  return [
    PhysicLaws.getIndex(row - 1, column - 1),
    PhysicLaws.getIndex(row - 1, column),
    PhysicLaws.getIndex(row - 1, column + 1),
    PhysicLaws.getIndex(row, column - 1),
    PhysicLaws.getIndex(row, column + 1),
    PhysicLaws.getIndex(row + 1, column - 1),
    PhysicLaws.getIndex(row + 1, column),
    PhysicLaws.getIndex(row + 1, column + 1)
  ]
}

PhysicLaws.getAliveNeighboursCount = (row, column, aliveCellsIndex) => {
  const neighbours = PhysicLaws.getNeighbours(row, column)

  return neighbours.filter(neighbourIndex => aliveCellsIndex[neighbourIndex])
    .length
}

export default PhysicLaws
