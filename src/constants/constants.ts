export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;

export const TICK_SPEED = 500;

export const MOVE_LEFT = -1;
export const MOVE_RIGHT = 1;
export const MOVE_DOWN = 1;
export const DONT_MOVE = 0;

export const GAME_STATUS = {
  START: "start",
  PLAYING: "playing",
  GAMEOVER: "gameover",
  PAUSE: "pause",
} as const;
