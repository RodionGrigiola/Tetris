import { BOARD_HEIGHT, BOARD_WIDTH, GAME_STATUS } from "../constants/constants";

import { createBoard } from "./createBoard";
import { createRandomPiece } from "./createRandomPiece";

export const createInitialGameState = () => {
  return {
    board: createBoard(BOARD_HEIGHT, BOARD_WIDTH),
    piece: createRandomPiece(),
    score: 0,
    gameOver: false,
    status: GAME_STATUS.START,
  };
};
