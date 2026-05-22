import type { GameState } from "../types/game";

export const mergeBoard = (game: GameState) => {
  const { board, piece } = game;
  const newBoard = board.map((row) => [...row]);

  console.log(piece.shape);

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
