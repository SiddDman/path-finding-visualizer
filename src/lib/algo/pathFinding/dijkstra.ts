import getUntraversedNeighbours from "../../../utils/getUntraversedNeighbours"
import { isEqual, removeFromQueue } from "../../../utils/helpers"
import { GridType, TileType } from "../../../utils/types"

const dijkstra = (
    grid: GridType,
    startTile: TileType,
    endTile: TileType,
) => {
    const traversedTiles = []
    const src = grid[startTile.row][startTile.col]
    src.distance = 0
    src.isTraversed = true
    const unTraversedTiles = [src]

    while (unTraversedTiles.length) {
        unTraversedTiles.sort((a, b) => a.distance - b.distance)
        const currTile = unTraversedTiles.shift()
        if (currTile) {
            if (currTile.isWall)
                continue;
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

    return { traversedTiles, path }
}

export default dijkstra