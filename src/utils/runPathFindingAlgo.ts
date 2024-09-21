import bfs from "../lib/algo/pathFinding/bfs";
import { AlgoType, GridType, TileType } from "./types";

const runPathFindingAlgo = ({
    algo,
    grid,
    startTile,
    endTile,
}: {
    algo: AlgoType;
    grid: GridType;
    startTile: TileType;
    endTile: TileType;
}) => {
    switch (algo) {
        case "BFS":
            return bfs(grid, startTile, endTile);
        // case "DFS":
        //     return;
        // case "DIJIKSTRA":
        //     return;
        // case "A_STAR":
        //     return;
        default:
            return bfs(grid, startTile, endTile);
    }
}

export default runPathFindingAlgo