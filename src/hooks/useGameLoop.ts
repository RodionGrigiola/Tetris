import { type Dispatch, type SetStateAction, useEffect } from "react";
import { GAME_STATUS, TICK_SPEED } from "../constants/constants";
import type { GameState } from "../types/game";
import { gameTick } from "../utils/gameTick";

type UseKeysProps = {
  setGame: Dispatch<SetStateAction<GameState>>;
};

export const useGameLoop = ({ setGame }: UseKeysProps) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setGame((prev) => {
        if (prev.status !== GAME_STATUS.PLAYING) {
          return prev;
        }

        return gameTick(prev);
      });
    }, TICK_SPEED);

    return () => clearInterval(interval);
  }, [setGame]);
};
