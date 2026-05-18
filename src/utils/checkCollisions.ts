export const checkCollisions = (board, piece, offsetY = 1) => {
  return piece.shape.some((row, y) => {
    return row.some((cell, x) => {
      if (cell === 0) return;

      const nextY = piece.y + y + offsetY;
      const nextX = piece.x + x;

      if (nextY >= board.length) {
        return true;
      }

      if (nextX < 0 || nextX > board[0].length) {
        return true;
      }

      return board[nextY][nextX] === 1;
    });
  });
};
