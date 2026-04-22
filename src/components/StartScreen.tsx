interface StartScreenProps {
  onStart: () => void
  audioEnabled: boolean
  onToggleAudio: () => void
}

export function StartScreen({ onStart, audioEnabled, onToggleAudio }: StartScreenProps) {
  return (
    <div className="checker-bg min-h-full p-5 sm:p-8">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 text-center float-in">
        <div className="flex items-center justify-center gap-2">
          <span className="retro-sticker">new look</span>
          <span className="retro-sticker blink">mix mode</span>
        </div>

        <div className="retro-panel px-5 py-6 sm:px-8 sm:py-8">
          <h1 className="text-4xl font-black uppercase tracking-[0.08em] text-retro-ink sm:text-5xl">Bingo Mixer</h1>
          <p className="mt-3 text-base font-bold text-[#3a2388] sm:text-lg">
            Make a friend. Mark the square. Repeat until legendary.
          </p>

          <div className="mt-6 grid gap-3 text-left text-sm font-semibold text-[#2b1f73] sm:grid-cols-2">
            <div className="retro-panel bg-[#fff3cf] p-3 shadow-none">
              <h2 className="text-xs uppercase tracking-[0.08em] text-[#6b2d92]">How to play</h2>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                <li>Find people who match each square.</li>
                <li>Tap to lock in your discoveries.</li>
                <li>Get five in a row and claim BINGO.</li>
              </ul>
            </div>
            <div className="retro-panel bg-[#d8fff9] p-3 shadow-none">
              <h2 className="text-xs uppercase tracking-[0.08em] text-[#155a8e]">Pro tip</h2>
              <p className="mt-2">
                Ask follow-up stories, not yes/no questions, to make every square spark a real conversation.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
            <button
              onClick={onStart}
              className="retro-button w-full px-6 py-4 text-lg">
              Start The Party
            </button>
            <button
              onClick={onToggleAudio}
              className="retro-button retro-button-secondary w-full px-4 py-4 text-sm sm:w-auto"
              aria-pressed={audioEnabled}>
              {audioEnabled ? 'Audio On' : 'Audio Off'}
            </button>
          </div>

          <p className="mt-4 text-xs font-bold uppercase tracking-[0.08em] text-[#3d2f8f]">
            Tip: best on phone + loud room + curious people
          </p>
        </div>
      </div>
    </div>
  )
}
