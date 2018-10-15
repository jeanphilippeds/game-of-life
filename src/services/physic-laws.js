const PhysicLaws = {}

PhysicLaws.tick = (iMax, jMax, aliveCellsIndexed) => {
  const newAliveCellsIndexed = {}

  for (var i=0; i < iMax; i++) {
    for (var j=0; j < jMax; j++) {
      const key = PhysicLaws.getIndex(i, j)
      const isAliveCell = aliveCellsIndexed[key]
      const aliveNeighboursCount = PhysicLaws.getAliveNeighboursCount(i, j)

      newAliveCellsIndexed[key] = PhysicLaws.getState(isAliveCell, aliveNeighboursCount)
    }
  }

  return newAliveCellsIndexed
}

PhysicLaws.getState = (isAliveCell, aliveNeighboursCount) => {
  if (isAliveCell && aliveNeighboursCount < 2) return false
  if (isAliveCell && aliveNeighboursCount > 3) return false
  if (!isAliveCell && aliveNeighboursCount == 3) return true

  return isAliveCell
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
