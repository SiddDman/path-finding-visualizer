import { initHeuristicCost, initFunctionCost } from "../../../utils/heuristics"
import { isEqual, removeFromQueue } from "../../../utils/helpers"
import getUntraversedNeighbours from "../../../utils/getUntraversedNeighbours"
import { GridType, TileType } from "../../../utils/types"

const a_star = (
    grid: GridType,
    startTile: TileType,
    endTile: TileType,
) => {
    const traversedTiles = []
    const heuristicCost = initHeuristicCost(grid, endTile)
    const functionCost = initFunctionCost()

    const src = grid[startTile.row][startTile.col]
    src.distance = 0
    functionCost[src.row][src.col] = src.distance + heuristicCost[src.row][src.col]
    src.isTraversed = true

    const unTraversedTiles = [src]

    while (unTraversedTiles.length) {
        unTraversedTiles.sort((a, b) => {
            if (functionCost[a.row][a.col] === functionCost[b.row][b.col])
                return b.distance - a.distance
            return functionCost[a.row][a.col] - functionCost[b.row][b.col]
        })

        const currTile = unTraversedTiles.shift()
        if (currTile) {
            if (currTile.isWall)
                continue
            if (currTile.distance === Infinity)
                break;
            currTile.isTraversed = true
            traversedTiles.push(currTile)
            if (isEqual(currTile, endTile))
                break;

            const neighbours = getUntraversedNeighbours(grid, currTile)
            for (let i = 0; i < neighbours.length; i++) {
                if (currTile.distance + 1 < neighbours[i].distance) {
                    removeFromQueue(neighbours[i], unTraversedTiles)
                    neighbours[i].distance = currTile.distance + 1
                    functionCost[neighbours[i].row][neighbours[i].col] = neighbours[i].distance + heuristicCost[neighbours[i].row][neighbours[i].col]
                    neighbours[i].parent = currTile
                    unTraversedTiles.push(neighbours[i])
                }
            }
        }
    }
    const path = []
    let curr = grid[endTile.row][endTile.col]

    while (curr !== null) {
        curr.isPath = true
        path.unshift(curr)
        curr = curr.parent!
    }
    console.log(path)
    return { traversedTiles, path }

}

export default a_star