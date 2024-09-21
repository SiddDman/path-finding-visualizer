import { GridType, SpeedType, TileType } from "../../../utils/types"
import horizontalDivision from "./horizontalDivision";
import verticalDivision from "./verticalDivision";

const recursiveDivision = async ({
    grid,
    startTile,
    endTile,
    row,
    col,
    height,
    width,
    setIsDisabled,
    speed
}: {
    grid: GridType;
    startTile: TileType;
    endTile: TileType;
    row: number;
    col: number;
    height: number;
    width: number;
    setIsDisabled: (isDisabled: boolean) => void;
    speed: SpeedType;
    // speed: number;
}) => {
    if (height <= 1 || width <= 1)
        return;
    //divide horizontally
    if (height > width)
        await horizontalDivision({
            grid,
            startTile,
            endTile,
            row,
            col,
            height,
            width,
            setIsDisabled,
            speed
        })
    else
        await verticalDivision({
            grid,
            startTile,
            endTile,
            row,
            col,
            height,
            width,
            setIsDisabled,
            speed
        })
}

export default recursiveDivision