import binaryTree from "../lib/algo/maze/binaryTree";
import recursiveDivision from "../lib/algo/maze/recursiveDivision";
import { MAX_COLS, MAX_ROWS, SPEEDS } from "./constants";
import constructBorder from "./constructBorder";
import { GridType, MazeType, SpeedType, TileType } from "./types"

const runMazeAlgo = async ({
    maze,
    grid,
    startTile,
    endTile,
    setIsDisabled,
    speed
}: {
    maze: MazeType;
    grid: GridType;
    startTile: TileType;
    endTile: TileType;
    setIsDisabled: (isDisabled: boolean) => void;
    speed: SpeedType;
}) => {

    if (maze === "BINARY_TREE")
        await binaryTree(grid, startTile, endTile, setIsDisabled, speed);
    else if (maze === "RECURSIVE_DIVISION") {
        const currSpeed = SPEEDS.find((s) => s.value === speed)!.value ?? 2
        await constructBorder(grid, startTile, endTile)
        await recursiveDivision({
            grid,
            startTile,
            endTile,
            row: 1,
            col: 1,
            height: Math.floor((MAX_ROWS - 1) / 2),
            width: Math.floor((MAX_COLS - 1) / 2),
            setIsDisabled,
            speed
        })
        setTimeout(() => {
            setIsDisabled(false)
        }, 800 * currSpeed)
    }

}

export default runMazeAlgo

