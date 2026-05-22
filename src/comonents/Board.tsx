import { useEffect, useState } from "react";
import { createBoard } from "../utils/createBoard";
import { mergeBoard } from "../utils/mergeBoard";
import { createRandomPiece } from "../utils/createRandomPiece";
import { gameTick } from "../utils/gameTick";
import { BOARD_HEIGHT, BOARD_WIDTH, TICK_SPEED } from "../constants/constants";
import { movePiece } from "../utils/movePiece";

export function Board() {
  const [game, setGame] = useState({
    board: createBoard(BOARD_HEIGHT, BOARD_WIDTH),
    piece: createRandomPiece(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setGame((prev) => gameTick(prev));
    }, TICK_SPEED);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setGame((prev) => movePiece(prev, -1, 0));
      }

      if (event.key === "ArrowRight") {
        setGame((prev) => movePiece(prev, 1, 0));
      }

      if (event.key === "ArrowDown") {
        setGame((prev) => movePiece(prev, 0, 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
