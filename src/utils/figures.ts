import type { Figure } from "../types/game";

export const FIGURES: Record<string, Figure> = {
  T: {
    color: "bg-purple-500",
    shape: [
      [0, 1, 0],
      [1, 1, 1],
    ],
  },
  O: {
    color: "bg-yellow-400",
    shape: [
      [1, 1],
      [1, 1],
    ],
  },
  I: {
    color: "bg-cyan-400",
    shape: [[1, 1, 1, 1]],
  },
  S: {
    color: "bg-green-500",
    shape: [
      [0, 1, 1],
      [1, 1, 0],
    ],
  },
  Z: {
    color: "bg-red-500",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
    ],
  },
  L: {
    color: "bg-orange-500",
    shape: [
      [0, 0, 1],
      [1, 1, 1],
    ],
  },
  J: {
    color: "bg-blue-500",
    shape: [
      [1, 0, 0],
      [1, 1, 1],
    ],
  },
};

export const FIGURE_KEYS = Object.keys(FIGURES);
