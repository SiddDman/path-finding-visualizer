import { createContext, useState } from "react";
import { AlgoType, GridType, MazeType } from "../utils/types";
import { createGrid } from "../utils/helpers";
import { END_TILE_CONFIG, START_TILE_CONFIG } from "../utils/constants";

interface PathFindingContextInterface {
    algo: AlgoType;
    setAlgo: (algo: AlgoType) => void;
    maze: MazeType;
    setMaze: (maze: MazeType) => void;
    grid: GridType;
    setGrid: (grid: GridType) => void;
    isGraphVisualized: boolean;
    setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}

export const PathFindingContext = createContext<PathFindingContextInterface | undefined>(undefined);

export const PathFindingProvider = ({ children }: { children: ReactNode }) => {
    const [algo, setAlgo] = useState<AlgoType>('BFS');
    const [maze, setMaze] = useState<MazeType>("NONE")
    const [grid, setGrid] = useState<GridType>(createGrid(START_TILE_CONFIG, END_TILE_CONFIG))
    const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false)

    return (
        <PathFindingContext.Provider value={{
            algo,
            setAlgo,
            maze,
            setMaze,
            grid,
            setGrid,
            isGraphVisualized,
            setIsGraphVisualized
        }}>
            {children}
        </PathFindingContext.Provider>
    )

}