import React, { FC } from "react";
import { StyledCell } from "./StyledCell";
import { Tetromino } from "../../models/tetromino";

interface CellProps {
  type: Tetromino;
}

const Cell: FC<CellProps> = ({ type }) => {
  return (
    <StyledCell type={type} color={type.rgb_colour}>
      Cell
    </StyledCell>
  );
};

export default Cell;
