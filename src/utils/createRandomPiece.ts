import type { Piece } from "../types/game";
import { FIGURE_KEYS, FIGURES } from "./figures";

export const createRandomPiece = (): Piece => {
  const random_figure = FIGURE_KEYS[Math.floor(Math.random() * 7)];

  return { ...FIGURES[random_figure], x: 3, y: 0 };
};
