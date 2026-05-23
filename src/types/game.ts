import type { GAME_STATUS } from "../constants/constants";

export type Cell = string | 0;

export type Board = Cell[][];

export interface Piece {
  shape: number[][];
  color: string;
  x: number;
  y: number;
}

export interface Figure {
  shape: number[][];
  color: string;
}

export type GameStatus = (typeof GAME_STATUS)[keyof typeof GAME_STATUS];

export interface GameState {
  board: Board;
  piece: Piece;
  gameOver: boolean;
  score: number;
  status: GameStatus;
}
