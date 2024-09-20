import { MAX_COLS, MAX_ROWS } from "./constants";
import { GridType, TileType } from "./types";

const createRow = (row: number, startTile: TileType, endTile: TileType) => {
    const currRow = [];
    for (let col = 0; col < MAX_COLS; col++) {
        currRow.push({
            row,
            col,
            isWall: false,
            isPath: false,
            distance: Infinity,
            isStart: row === startTile.row && col === startTile.col,
            isEnd: row === endTile.row && col === endTile.col,
            isTraversed: false,
            parent: null
        });
    }
    return currRow;
}

export const createGrid = (startTile: TileType, endTile: TileType) => {
    const grid: GridType = [];
    for (let row = 0; row < MAX_ROWS; row++)
        grid.push(createRow(row, startTile, endTile));

    return grid;
}

export const checkIfStartOrEnd = (row: number, col: number) => {
    return (row === 1 && col === 1) || (row == MAX_ROWS - 2 && col == MAX_COLS - 2);
}

export const createNewGrid = (grid: GridType, row: number, col: number) => {
    const newGrid = grid.slice()//creating a shallow copy of the grid
    const newTile = {
        ...newGrid[row][col],
        isWall: !newGrid[row][col].isWall,
    }
    newGrid[row][col] = newTile
    return newGrid;
}

export const isEqual = (a: TileType, b: TileType) => {
    return a.row === b.row && a.col === b.col;
}

export const isRowColEqual = (row: number, col: number, tile: TileType) => {
    return row === tile.row && col === tile.col;
}

//pauses the execution for a certain amount of time and then return a new promise
export const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getRandInt = (min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min);
}