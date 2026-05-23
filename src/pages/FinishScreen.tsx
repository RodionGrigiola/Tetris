type FinishScreenProps = {
  score: number;
  onRestart: () => void;
};

export default function FinishScreen({ score, onRestart }: FinishScreenProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-red-900 bg-zinc-900 px-12 py-10 shadow-2xl">
        <h1 className="text-5xl font-bold tracking-wider text-red-500">
          GAME OVER
        </h1>

        <div className="flex flex-col items-center">
          <span className="text-sm uppercase tracking-widest text-zinc-500">
            Score
          </span>

          <span className="text-4xl font-bold text-yellow-400">{score}</span>
        </div>

        <button
          onClick={onRestart}
          className="rounded-xl bg-yellow-400 px-6 py-3 text-lg font-semibold text-black transition hover:scale-105 hover:bg-yellow-300 active:scale-95">
          Play Again
        </button>
      </div>
    </div>
  );
}
