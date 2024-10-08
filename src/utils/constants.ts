import { AlgoSelectType, MazeSelectType, SpeedSelectType } from "./types";

export const MAX_ROWS = 39;
export const MAX_COLS = 39;

export const START_TILE_CONFIG = {
    row: 1,
    col: 1,
    isWall: false,
    isPath: false,
    isStart: false,
    isEnd: false,
    isTraversed: false,
    distance: 0,
    parent: null
}

export const END_TILE_CONFIG = {
    //bottom right hand corner
    row: MAX_ROWS - 2,
    col: MAX_COLS - 2,
    isWall: false,
    isPath: false,
    isStart: false,
    isEnd: false,
    isTraversed: false,
    distance: 0,
    parent: null
}

export const TILE_STYLE = "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border border-t border-r border-sky-200"

export const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-cyan-400"
export const START_TILE_STYLE = TILE_STYLE + " bg-green-400"
export const END_TILE_STYLE = TILE_STYLE + " bg-red-600"
export const WALL_TILE_STYLE = TILE_STYLE + " bg-gray-100"
export const PATH_TILE_STYLE = TILE_STYLE + " bg-green-500"

export const MAZES: MazeSelectType[] = [
    { name: "No Maze", value: "None" },
    { name: "Binary Tree", value: "BINARY_TREE" },
    { name: "Recursive Division", value: "RECURSIVE_DIVISION" },
]

export const PATH_FINDING_ALGO: AlgoSelectType[] = [
    { name: "Dijkstra", value: "DIJIKSTRA" },
    { name: "A Star", value: "A_STAR" },
    { name: "Breadth First Search", value: "BFS" },
    { name: "Depth First Search", value: "DFS" },
]

export const SPEEDS: SpeedSelectType[] = [
    { name: "Slow", value: 2 },
    { name: "Medium", value: 1 },
    { name: "Fast", value: 0.5 },
]

export const SLEEP_TIME = 8;
export const EXTENDED_SLEEP_TIME = 30;