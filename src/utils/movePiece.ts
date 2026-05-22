import type { GameState } from "../types/game";
import { checkCollisions } from "./checkCollisions";

export const movePiece = (
  game: GameState,
  directionX: number,
  directionY: number,
) => {
  const hasColliosions = checkCollisions(
    game.board,
    game.piece,
    directionX,
    directionY,
  );

  if (hasColliosions) return game;

  return {
    ...game,
    piece: {
      ...game.piece,
      x: game.piece.x + directionX,
      y: game.piece.y + directionY,
    },
  };
};
