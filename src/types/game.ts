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

export interface GameState {
  board: Board;
  piece: Piece;
}
