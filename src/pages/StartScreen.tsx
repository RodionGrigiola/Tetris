type StartScreenProps = {
  onStart: () => void;
};

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-zinc-800 bg-zinc-900 px-12 py-10 shadow-2xl">
        <h1 className="text-5xl font-bold tracking-wider text-cyan-400">
          TETRIS
        </h1>

        <p className="text-sm text-zinc-400">Press start to play</p>

        <button
          onClick={onStart}
          className="rounded-xl bg-cyan-500 px-6 py-3 text-lg font-semibold text-black transition hover:scale-105 hover:bg-cyan-400 active:scale-95">
          Start Game
        </button>
      </div>
    </div>
  );
}
