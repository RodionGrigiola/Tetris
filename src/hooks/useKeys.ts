import { type Dispatch, type SetStateAction, useEffect } from "react";
import {
  DONT_MOVE,
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
} from "../constants/constants";
import { movePiece } from "../utils/movePiece";
import type { GameState } from "../types/game";
import { rotatePiece } from "../utils/rotatePiece";

type UseKeysProps = {
  setGame: Dispatch<SetStateAction<GameState>>;
};

export const useKeys = ({ setGame }: UseKeysProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setGame((prev) => movePiece(prev, MOVE_LEFT, DONT_MOVE));
      }

      if (event.key === "ArrowRight") {
        setGame((prev) => movePiece(prev, MOVE_RIGHT, DONT_MOVE));
      }

      if (event.key === "ArrowDown") {
        setGame((prev) => movePiece(prev, DONT_MOVE, MOVE_DOWN));
      }

      if (event.key === "ArrowUp") {
        setGame((prev) => rotatePiece(prev));
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setGame]);
};
