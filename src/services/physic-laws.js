import {getIndex, getAliveNeighboursCount} from './grid-helper'

const PhysicLaws = {}

PhysicLaws.tick = (iMax, jMax, aliveCellsIndexed) => {
  const newAliveCellsIndexed = {}

  for (var i=0; i < iMax; i++) {
    for (var j=0; j < jMax; j++) {
      const key = getIndex(i, j)
      const isAliveCell = aliveCellsIndexed[key]
      const aliveNeighboursCount = getAliveNeighboursCount(i, j)

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

export default PhysicLaws
