import { useState } from "react";
import { createBoard } from "../utils/createBoard";
import { mergeBoard } from "../utils/mergeBoard";
import { createRandomPiece } from "../utils/createRandomPiece";
import { BOARD_HEIGHT, BOARD_WIDTH } from "../constants/constants";
import { useKeys } from "../hooks/useKeys";
import { useGameLoop } from "../hooks/useGameLoop";

export function Board() {
  const [game, setGame] = useState({
    board: createBoard(BOARD_HEIGHT, BOARD_WIDTH),
    piece: createRandomPiece(),
  });

  useGameLoop({ setGame });
  useKeys({ setGame });

  const renderedBoard = mergeBoard(game);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="grid gap-[1px] bg-gray-800 p-2">
        {renderedBoard.map((row, rowIndex) => (
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
        ))}
      </div>
    </div>
  );
}
