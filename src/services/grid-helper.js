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
export const getIndex = (row, column) => {
    return `R${row}C${column}`
}

export const getAliveNeighboursCount = (row, column, aliveCellsIndex) => {
    const neighbours = getNeighbours(row, column)

    return neighbours.filter(neighbourIndex => aliveCellsIndex[neighbourIndex])
        .length
}