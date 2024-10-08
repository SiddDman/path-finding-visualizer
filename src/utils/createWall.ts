import { MAX_COLS, MAX_ROWS, SPEEDS, WALL_TILE_STYLE } from "./constants";
import { isRowColEqual } from "./helpers";
import { SpeedType, TileType } from "./types"

const createWall = (
    startTile: TileType,
    endTile: TileType,
    speed: SpeedType

) => {
    const delay = 6 * SPEEDS.find((s) => s.value === speed)!.value - 1;
    for (let row = 0; row < MAX_ROWS; row++) {
        setTimeout(() => {
            for (let col = 0; col < MAX_COLS; col++) {
                if (!(row & 1) || !(col & 1)) {
                    if (!isRowColEqual(row, col, startTile) && !isRowColEqual(row, col, endTile)) {
                        setTimeout(() => {
                            document.getElementById(`${row}-${col}`)!.className = `${WALL_TILE_STYLE} animate-wall`
                        }, delay * col)
                    }
                }
            }
            //delay * (MAX_ROWS / 2) * row = setting timeout based on the current row we are on
        }, delay * (MAX_ROWS / 2) * row)
    }
}

export default createWall