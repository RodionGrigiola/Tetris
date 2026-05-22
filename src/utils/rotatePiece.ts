import type { GameState } from "../types/game";
import { checkCollisions } from "./checkCollisions";
import { rotateMatrix } from "./rotateMatrix";

export const rotatePiece = (game: GameState) => {
  const { board, piece } = game;

  const rotated = {
    ...piece,
    shape: rotateMatrix(piece.shape),
  };

  const kicks = [0, -1, 1, -2, 2, -3, 3];

  for (const dx of kicks) {
    const testPiece = {
      ...rotated,
      x: piece.x + dx,
    };

    const hasCollisions = checkCollisions(board, testPiece, 0, 0);
    if (!hasCollisions) {
      return {
        ...game,
        piece: testPiece,
      };
    }
  }

  return game;
};
