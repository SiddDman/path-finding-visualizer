import { useState } from "react"
import usePathFinding from "../hooks/usePathFinding"
import useTile from "../hooks/useTile"
import { MAZES } from "../utils/constants"
import resetGrid from "../utils/resetGrid"
import { MazeType } from "../utils/types"
import Select from "./Select"

const Nav = () => {
    const [isDisabled, setIsDisabled] = useState(false)
    const { maze, setMaze, grid } = usePathFinding()
    const { startTile, endTile } = useTile()

    const handleGenerateMaze = (maze: MazeType) => {
        if (maze === 'NONE') {
            setMaze(maze)
            resetGrid({ grid, startTile, endTile })
        }

        setMaze(maze)
        setIsDisabled(true)
        //run maze Algo
    }
    return (
        <div className="flex items-center justify-center min-h-[4.5rem] border-b shadow-gray-600 sm:px-5 px-0">
            <div className=" flex items-center lg:justify-between justify-center w-full sm:w-[52rem]">
                <h1 className="lg:flex hidden w-[40%] text-2xl pl-1">
                    Path Finding Visualizer
                </h1>
                <div className="flex sm:items-end items-center justify-normal sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4">
                    <Select
                        label='Maze'
                        value={maze}
                        options={MAZES}
                        isDisabled={true}
                        onChange={(e) => {
                            //handle generating maze
                            handleGenerateMaze(e.target.value as MazeType);
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Nav