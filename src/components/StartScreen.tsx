import { questionSetOptions } from '../data/questions'
import type { GameMode, QuestionSetId } from '../types'

interface StartScreenProps {
  onStart: (mode: GameMode, questionSetId: QuestionSetId) => void
  selectedQuestionSet: QuestionSetId
  onQuestionSetChange: (questionSetId: QuestionSetId) => void
  audioEnabled: boolean
  onToggleAudio: () => void
}

export function StartScreen({
  onStart,
  selectedQuestionSet,
  onQuestionSetChange,
  audioEnabled,
  onToggleAudio,
}: StartScreenProps) {
  return (
    <div className="checker-bg min-h-full p-5 sm:p-8">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 text-center float-in">
        <div className="flex items-center justify-center gap-2">
          <span className="retro-sticker stagger-1">new look</span>
          <span className="retro-sticker blink stagger-2">mix mode</span>
        </div>

        <div className="retro-panel retro-panel-lift px-5 py-6 sm:px-8 sm:py-8">
          <h1 className="text-4xl font-black uppercase tracking-[0.08em] text-retro-ink sm:text-5xl">Bingo Mixer</h1>
          <p className="mt-3 text-base font-bold text-[#3a2388] sm:text-lg">
            Make a friend. Mark the square. Repeat until legendary.
          </p>

          <div className="mt-6 grid gap-3 text-left text-sm font-semibold text-[#2b1f73] sm:grid-cols-2">
            <div className="retro-panel retro-panel-lift float-in stagger-2 bg-[#fff3cf] p-3 shadow-none">
              <h2 className="text-xs uppercase tracking-[0.08em] text-[#6b2d92]">How to play</h2>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                <li>Find people who match each square.</li>
                <li>Tap to lock in your discoveries.</li>
                <li>Get five in a row and claim BINGO.</li>
              </ul>
            </div>
            <div className="retro-panel retro-panel-lift float-in stagger-3 bg-[#d8fff9] p-3 shadow-none">
              <h2 className="text-xs uppercase tracking-[0.08em] text-[#155a8e]">Pro tip</h2>
              <p className="mt-2">
                Ask follow-up stories, not yes/no questions, to make every square spark a real conversation.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <div className="retro-panel retro-panel-lift bg-[#ffe2ff] p-3 text-left shadow-none float-in stagger-2">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-xs uppercase tracking-[0.08em] text-[#6b2d92]">Pick your question set</h2>
                  <p className="mt-1 text-xs font-semibold text-[#3a2388]">Swap the board vibe before you start.</p>
                </div>
                <span className="retro-sticker shrink-0">2 packs</span>
              </div>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {questionSetOptions.map((questionSet, index) => {
                  const isSelected = questionSet.id === selectedQuestionSet

                  return (
                    <button
                      key={questionSet.id}
                      type="button"
                      onClick={() => onQuestionSetChange(questionSet.id)}
                      className={`retro-panel text-left transition-transform hover:-translate-y-0.5 ${
                        isSelected ? 'bg-[#fff3cf] ring-2 ring-[#ff5d8f]' : 'bg-white/80'
                      } float-in ${index === 0 ? 'stagger-3' : 'stagger-4'}`}
                      aria-pressed={isSelected}>
                      <div className="flex items-center justify-between gap-2">
                        <strong className="text-sm uppercase tracking-[0.08em] text-retro-ink">
                          {questionSet.label}
                        </strong>
                        <span className="text-xs font-black uppercase text-[#6b2d92]">
                          {isSelected ? 'Selected' : 'Pick me'}
                        </span>
                      </div>
                      <p className="mt-2 text-xs font-semibold text-[#3a2388]">{questionSet.description}</p>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <button
                  onClick={() => onStart('bingo', selectedQuestionSet)}
                  className="retro-button w-full px-6 py-4 text-lg float-in stagger-2">
                  🎰 Bingo Mode
                </button>
                <p className="mt-1 text-xs text-[#3a2388]">Best for: Groups • ~15 min • 4+ people</p>
              </div>
              <div>
                <button
                  onClick={() => onStart('deck', selectedQuestionSet)}
                  className="retro-button w-full px-6 py-4 text-lg float-in stagger-3 bg-[#ffb3ba]">
                  🎴 Card Shuffle
                </button>
                <p className="mt-1 text-xs text-[#3a2388]">Best for: Solo prep • ~5 min • 1-2 people</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-3 sm:justify-center">
            <button
              onClick={onToggleAudio}
              className="retro-button retro-button-secondary px-4 py-2 text-sm float-in stagger-4"
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
