import type { Cell } from "../types/game";

type RenderedBoardProps = {
  board: Cell[][];
};

export const RenderedBoard = ({ board }: RenderedBoardProps) => {
  return board.map((row, rowIndex) => (
    <div key={rowIndex} className="flex gap-[1px]">
      {row.map((cell, cellIndex) => (
        <div
          key={cellIndex}
          className={`w-6 h-6 border border-gray-900 ${
            cell ? cell : "bg-gray-900"
          }`}
        />
      ))}
    </div>
  ));
};
