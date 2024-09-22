import getUntraversedNeighbours from "../../../utils/getUntraversedNeighbours";
import { isEqual, isInStack } from "../../../utils/helpers";
import { GridType, TileType } from "../../../utils/types"

const dfs = (
    grid: GridType,
    startTile: TileType,
    endTile: TileType,
) => {
    const traversedTiles: TileType[] = []
    const src = grid[startTile.row][startTile.col]
    src.distance = 0;
    src.isTraversed = true;
    const unTraversedTiles = [src]

    while (unTraversedTiles.length) {
        //using shift as we need first ele,pop will give us last ele
        const tile = unTraversedTiles.pop();
        if (tile) {
            if (tile.isWall)
                continue
            if (tile.distance === Infinity)
                break;
            tile.isTraversed = true;
            traversedTiles.push(tile)
            if (isEqual(tile, endTile))
                break;
            //get untraversed neighbours
            const neighbours = getUntraversedNeighbours(grid, tile)

            for (let i = 0; i < neighbours.length; i++)
                if (!isInStack(neighbours[i], unTraversedTiles)) {
                    neighbours[i].distance = tile.distance + 1;
                    neighbours[i].parent = tile
                    unTraversedTiles.push(neighbours[i])
                }
        }

    }

    const path = []
    let curr = grid[endTile.row][endTile.col]
    //we have started with endtile and we have made a path from the end tile to its parent and so on till the src. it will stop at src as src has no parent
    while (curr !== null) {
        curr.isPath = true
        path.unshift(curr)
        curr = curr.parent!
    }

    return { traversedTiles, path }

}

export default dfs