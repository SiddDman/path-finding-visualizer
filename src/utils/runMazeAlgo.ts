import binaryTree from "../lib/algo/maze/binaryTree";
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
    // else if (maze === "RECURSIVE_DIVISION")
    //     // await recursiveDivision(grid, startTile, endTile, setIsDisabled, speed)
    //     return maze;
}

export default runMazeAlgo