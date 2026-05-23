import { type Dispatch, type SetStateAction } from "react";
import type { GameState } from "../types/game";
import { Board } from "../comonents/Board";
import { useKeys } from "../hooks/useKeys";
import { useGameLoop } from "../hooks/useGameLoop";
import { GAME_STATUS } from "../constants/constants";

type PlayScreenProps = {
  game: GameState;
  setGame: Dispatch<SetStateAction<GameState>>;
};

export default function PlayScreen({ game, setGame }: PlayScreenProps) {
  useGameLoop({ setGame });
  useKeys({ setGame });

  return (
    <div className="relative">
      <Board game={game} />

      {game.status === GAME_STATUS.PAUSE && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-white text-3xl">
          PAUSED
        </div>
      )}
    </div>
  );
}
