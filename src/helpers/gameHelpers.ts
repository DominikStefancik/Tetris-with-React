import { Tetromino, TETROMINOS } from "../models/tetromino";
import { EMPTY_CELL } from "../models/cell";

export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = (): any[] => {
  // a multi-dimensional array which represents stage grid
  return Array.from(Array(STAGE_HEIGHT), () => {
    return new Array(STAGE_WIDTH).fill(EMPTY_CELL);
  });
};

export const getRandomTetromino = (): Tetromino => {
  const tetrominosKeys = "IJLOSTZ";
  const index = Math.floor(Math.random() * tetrominosKeys.length);
  const randomKey = tetrominosKeys[index];

  return TETROMINOS[randomKey];
};
