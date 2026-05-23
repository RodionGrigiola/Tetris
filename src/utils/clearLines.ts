import type { Board } from "../types/game";

export const clearLines = (board: Board) => {
  const remainingRows = board.filter((row) => {
    return row.some((cell) => cell === 0);
  });

  const clearedLines = board.length - remainingRows.length;

  const newRows = Array.from({ length: clearedLines }, () =>
    Array(board[0].length).fill(0),
  );

  return {
    board: [...newRows, ...remainingRows],
    clearedLines,
  };
};
