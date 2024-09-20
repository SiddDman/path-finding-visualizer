export type AlgoType = "DIJIKSTRA" | "A_STAR" | "BFS" | "DFS";

export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION"

export type MazeSelectType = {
    name: string,
    value: string,
}

export type TileType = {
    row: number;
    col: number;
    isEnd: boolean;
    isWall: boolean;
    isPath: boolean;
    isTraversed: boolean;
    distance: number;
    isStart: boolean;
    parent: TileType | null;
}

export type GridType = TileType[][];

//2=fast, 1=medium, 0.5 = slow 
export type SpeedType = 2 | 1 | 0.5;

export interface SpeedSelectType {
    name: string;
    value: SpeedType;
}