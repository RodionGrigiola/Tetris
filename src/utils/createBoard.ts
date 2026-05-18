export const createBoard = (height = 20, width = 10) => {
  return Array.from({ length: height }, () => Array(width).fill(0));
};
