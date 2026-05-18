export const mergeBoard = (
  board: any[],
  piece: { shape: any; x: any; y: any },
) => {
  const newBoard = board.map((row) => [...row]);

  piece.shape.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell === 1) {
        const boardY = piece.y + y;
        const boardX = piece.x + x;

        if (newBoard[boardY]?.[boardX] !== undefined) {
          newBoard[boardY][boardX] = 1;
        }
      }
    });
  });

  return newBoard;
};
