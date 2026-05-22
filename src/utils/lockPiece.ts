import type { GameState } from "../types/game";

export const lockPiece = (game: GameState) => {
  const { board, piece } = game;
  const newBoard = board.map((row) => [...row]);

  piece.shape.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell) {
        const boardY = piece.y + y;
        const boardX = piece.x + x;

        if (newBoard[boardY]?.[boardX] !== undefined) {
          newBoard[boardY][boardX] = piece.color;
        }
      }
    });
  });

  return newBoard;
};
