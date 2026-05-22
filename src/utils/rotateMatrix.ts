export const rotateMatrix = (matrix: number[][]) => {
  const transposed = matrix[0].map((_, colIndex) =>
    matrix.map((row) => row[colIndex]),
  );

  return transposed.map((row) => row.reverse());
};
