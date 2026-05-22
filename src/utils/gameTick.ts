import type { GameState } from "../types/game";
import { checkCollisions } from "./checkCollisions";
import { createRandomPiece } from "./createRandomPiece";
import { lockPiece } from "./lockPiece";

export const gameTick = (game: GameState): GameState => {
  const { board, piece } = game;

  const hasCollisions = checkCollisions(board, piece, 0, 1);

  if (hasCollisions) {
    return {
      board: lockPiece(game),
      piece: {
        ...createRandomPiece(),
        x: 3,
        y: 0,
      },
    };
  }

  return {
    board,
    piece: {
      ...piece,
      y: piece.y + 1,
    },
  };
};
