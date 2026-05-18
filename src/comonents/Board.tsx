import { useEffect, useState } from "react";
import { createBoard } from "../utils/createBoard";
import { FIGURES } from "../utils/figures";
import { mergeBoard } from "../utils/mergeBoard";
import { lockPiece } from "../utils/lockPiece";
import { checkCollisions } from "../utils/checkCollisions";

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

export function Board() {
  const [board, setBoard] = useState(createBoard(BOARD_HEIGHT, BOARD_WIDTH));
  const [piece, setPiece] = useState({
    shape: FIGURES.T.shape,
    x: 3,
    y: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPiece((prev) => {
        if (checkCollisions(board, piece)) {
          setBoard((prevBoard) => lockPiece(prevBoard, prev));

          return {
            shape: FIGURES.SQUARE.shape,
            x: 3,
            y: 0,
          };
        }

        return {
          ...prev,
          y: prev.y + 1,
        };
      });
    }, 500);

    return () => clearInterval(interval);
  }, [board, piece]);

  const renderedBoard = mergeBoard(board, piece);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="grid gap-[1px] bg-gray-800 p-2">
        {renderedBoard.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-[1px]">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`w-6 h-6 border border-gray-900 ${
                  cell === 0 ? "bg-gray-900" : "bg-cyan-400"
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
