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