import bfs from "../lib/algo/pathFinding/bfs";
import dfs from "../lib/algo/pathFinding/dfs";
import dijkstra from "../lib/algo/pathFinding/dijkstra";
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
        case "DFS":
            return dfs(grid, startTile, endTile);
        case "DIJIKSTRA":
            return dijkstra(grid, startTile, endTile);
        // case "A_STAR":
        //     return;
        default:
            return bfs(grid, startTile, endTile);
    }
}

export default runPathFindingAlgo