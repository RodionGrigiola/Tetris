import { mergeBoard } from "../utils/mergeBoard";
import { RenderedBoard } from "./RenderedBoard";
import type { GameState } from "../types/game";

type BoardProps = {
  game: GameState;
};

export function Board({ game }: BoardProps) {
  const renderedBoard = mergeBoard(game);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="grid gap-[1px] bg-gray-800 p-2">
        <RenderedBoard board={renderedBoard} />
      </div>
    </div>
  );
}
