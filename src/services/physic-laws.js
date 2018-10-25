import {
  getIndex,
  getAliveNeighboursCount,
  getNeighboursFromIndex,
  getAliveNeighboursCountFromIndex,
  getUniqueValuesFromArray
} from './grid-helper'

const getNextState = (isAliveCell, aliveNeighboursCount) => {
  if (isAliveCell) {
    if (aliveNeighboursCount < 2) return false
    if (aliveNeighboursCount > 3) return false
    return isAliveCell
  }
  if (!isAliveCell && aliveNeighboursCount == 3) return true

  return isAliveCell
}

export const tick = (
  rowsCount,
  columnsCount,
  aliveCellsIndexed,
  modifiedCells
) => {
  const newAliveCellsIndexed = {}
  const newModifiedCells = []

  modifiedCells.forEach(modifiedCellIndex => {
    const neighbours = [
      ...getNeighboursFromIndex(modifiedCellIndex),
      modifiedCellIndex
    ]

    neighbours.forEach(cellIndex => {
      const isAliveCell = aliveCellsIndexed[cellIndex]
      const aliveNeighboursCount = getAliveNeighboursCountFromIndex(
        cellIndex,
        aliveCellsIndexed
      )

      const cellNextState = getNextState(isAliveCell, aliveNeighboursCount)

      newAliveCellsIndexed[cellIndex] = cellNextState

      if (cellNextState !== isAliveCell) {
        newModifiedCells.push(cellIndex)
      }
    })
  })

  return {
    aliveCellsIndexed: newAliveCellsIndexed,
    modifiedCells: getUniqueValuesFromArray(newModifiedCells)
  }
}
