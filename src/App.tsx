import { useState } from "react";
import { GAME_STATUS } from "./constants/constants";
import PlayScreen from "./pages/PlayScreen";
import type { GameState } from "./types/game";
import StartScreen from "./pages/StartScreen";
import FinishScreen from "./pages/FinishScreen";
import { createInitialGameState } from "./utils/createInitialGameState";

function App() {
  const [game, setGame] = useState<GameState>(() => createInitialGameState());

  const handleOnStart = () => {
    setGame((prev) => {
      return {
        ...prev,
        status: GAME_STATUS.PLAYING,
      };
    });
  };

  const handleOnRestart = () => {
    setGame(() => createInitialGameState());
  };

  switch (game.status) {
    case GAME_STATUS.START:
      return <StartScreen onStart={handleOnStart} />;

    case GAME_STATUS.PLAYING:
    case GAME_STATUS.PAUSE:
      return <PlayScreen game={game} setGame={setGame} />;

    case GAME_STATUS.GAMEOVER:
      return <FinishScreen score={game.score} onRestart={handleOnRestart} />;
  }
}

export default App;
