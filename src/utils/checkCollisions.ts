import type { Board, Piece } from "../types/game";

export const checkCollisions = (
  board: Board,
  piece: Piece,
  offsetX: number,
  offsetY: number,
) => {
  return piece.shape.some((row, y) => {
    return row.some((cell, x) => {
      if (cell === 0) return false;

      const nextY = piece.y + y + offsetY;
      const nextX = piece.x + x + offsetX;

      if (nextY >= board.length) {
        return true;
      }

      if (nextX < 0 || nextX >= board[0].length) {
        return true;
      }

      return Boolean(board[nextY]?.[nextX]);
    });
  });
};
