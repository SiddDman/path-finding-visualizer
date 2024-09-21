import { twMerge } from "tailwind-merge";
import usePathFinding from "../hooks/usePathFinding"
import { MAX_COLS, MAX_ROWS } from "../utils/constants";
import Tile from "./Tile";
import { MutableRefObject, useState } from "react";
import { checkIfStartOrEnd, createNewGrid } from "../utils/helpers";

const Grid = ({
    isVisualizationRunningRef
}: {
    isVisualizationRunningRef: MutableRefObject<boolean>
}) => {
    const { grid, setGrid } = usePathFinding();
    const [isMouseDown, setIsMouseDown] = useState(false)
    const handleMouseDown = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col))
            return;

        setIsMouseDown(true)
        const newGrid = createNewGrid(grid, row, col)
        setGrid(newGrid)
    }
    const handleMouseUp = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col))
            return;

        setIsMouseDown(false)
    }
    const handleMouseClick = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col))
            return;

        if (isMouseDown) {
            const newGrid = createNewGrid(grid, row, col)
            setGrid(newGrid)
        }

    }


    return (
        <div className={twMerge(
            //Base Classes
            'flex flex-col items-center justify-center border-sky-300 mt-10',
            //Control g>rid height
            `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${MAX_ROWS * 15}px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
            //Control Grid Width
            `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] xs:w-[${MAX_COLS * 8}px] w-[${MAX_COLS * 7}px]`,
        )}>
            {grid.map((r, rIdx) => (
                <div key={rIdx} className="flex">
                    {r.map((tile, tileIdx) => {
                        const { row, col, isStart, isEnd, isPath, isTraversed, isWall } = tile;
                        return (
                            <Tile
                                key={tileIdx}
                                row={tile.row}
                                col={tile.col}
                                isStart={isStart}
                                isEnd={isEnd}
                                isWall={isWall}
                                isPath={isPath}
                                isTraversed={isTraversed}
                                handleMouseDown={() => handleMouseDown(row, col)}
                                handleMouseUp={() => handleMouseUp(row, col)}
                                handleMouseClick={() => handleMouseClick(row, col)}
                            />
                        )

                    }
                    )}
                </div>
            ))}
        </div>
    )
}

export default Grid