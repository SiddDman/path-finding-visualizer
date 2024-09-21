import { GridType, TileType } from './types'
import { MAX_COLS, MAX_ROWS } from './constants';

const getUntraversedNeighbours = (grid: GridType, tile: TileType) => {
    const { row, col } = tile;
    const neighbours = [];
    //add tile above if it exits
    if (row > 0)
        neighbours.push(grid[row - 1][col]);
    //add tile below if it exits
    if (row < MAX_ROWS - 1)
        neighbours.push(grid[row + 1][col]);
    //add tile left if it exists
    if (col > 0)
        neighbours.push(grid[row][col - 1]);
    //add tile right if it exists
    if (col < MAX_COLS - 1)
        neighbours.push(grid[row][col + 1])

    return neighbours.filter((neighbour) => !neighbour.isTraversed)
}

export default getUntraversedNeighbours