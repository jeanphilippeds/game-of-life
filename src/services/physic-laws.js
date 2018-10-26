import { getIndex, getAliveNeighboursCount, getMainNeighbourColour } from './grid-helper'

const getNextState = (key, i, j, aliveCellsIndexed) => {
  const isAliveCell = aliveCellsIndexed[key]
  const aliveNeighboursCount = getAliveNeighboursCount(i, j, aliveCellsIndexed)

  if (isAliveCell && aliveNeighboursCount < 2) return false
  if (isAliveCell && aliveNeighboursCount > 3) return false
  if (!isAliveCell && aliveNeighboursCount == 3) {
    return getMainNeighbourColour(i,j,aliveCellsIndexed)
  }

  return isAliveCell
}

export const tick = (rowsCount, columnsCount, aliveCellsIndexed) => {
  const newAliveCellsIndexed = {}

  for (var i = 0; i < rowsCount; i++) {
    for (var j = 0; j < columnsCount; j++) {
      const key = getIndex(i, j)

      newAliveCellsIndexed[key] = getNextState(key, i, j, aliveCellsIndexed)
    }
  }

  return newAliveCellsIndexed
}
