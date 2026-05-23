import type { GameState } from "../types/game";
import { checkCollisions } from "./checkCollisions";
import { clearLines } from "./clearLines";
import { createRandomPiece } from "./createRandomPiece";
import { lockPiece } from "./lockPiece";

export const gameTick = (game: GameState): GameState => {
  const { board, piece } = game;

  const hasCollisionsWhenMovingDown = checkCollisions(board, piece, 0, 1);

  if (!hasCollisionsWhenMovingDown) {
    return {
      ...game,
      piece: {
        ...piece,
        y: piece.y + 1,
      },
    };
  }

  const lockedBoard = lockPiece(game);
  const { board: clearedBoard, clearedLines } = clearLines(lockedBoard);

  const newPiece = createRandomPiece();

  const hasCollisionOnCreateNewPiece = checkCollisions(
    clearedBoard,
    newPiece,
    0,
    0,
  );

  if (hasCollisionOnCreateNewPiece) {
    return {
      ...game,
      board: clearedBoard,
      gameOver: true,
    };
  }

  const score = game.score + clearedLines * 100;

  return {
    ...game,
    board: clearedBoard,
    piece: newPiece,
    score,
  };
};
