import { useDeckGame } from '../hooks/useDeckGame';
import { getQuestionsForSet, questionSets } from '../data/questions';
import { useState } from 'react';
import type { QuestionSetId } from '../types';

interface CardDeckProps {
  onBack: () => void;
  questionSetId: QuestionSetId;
}

export function CardDeck({ onBack, questionSetId }: CardDeckProps) {
  const { currentQuestion, successCount, failCount, shuffle, recordSuccess, recordFail } = useDeckGame(
    getQuestionsForSet(questionSetId)
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const activeQuestionSet = questionSets[questionSetId];

  const handleAction = (callback: () => void) => {
    setIsAnimating(true);
    callback();
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="checker-bg min-h-full p-5 sm:p-8 flex flex-col items-center justify-between">
      {/* Header with Back Button */}
      <div className="w-full max-w-2xl">
        <button
          onClick={onBack}
          className="retro-button retro-button-secondary mb-4 px-4 py-2 text-sm float-in">
          ← Back
        </button>

        {/* Instructions */}
        <div className="retro-panel bg-[#fff3cf] p-4 mb-6 float-in stagger-1">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xs uppercase font-bold tracking-[0.08em] text-[#6b2d92] mb-2">How to play</h2>
            <span className="retro-sticker mb-2">{activeQuestionSet.label}</span>
          </div>
          <p className="text-xs text-[#3a2388] leading-relaxed">
            <span className="hidden sm:inline">Tap <strong>LEFT</strong> if you didn't find someone matching this. <strong>RIGHT</strong> if you did! </span>
            <span className="sm:hidden">Swipe <strong>LEFT</strong> if you didn't find someone matching this. <strong>RIGHT</strong> if you did! </span>
            Each button gives you the next card.
          </p>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#155a8e]">{activeQuestionSet.description}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-2xl grow flex flex-col items-center justify-center">
        {/* Card Display */}
        <div className={`float-in transform transition-all duration-300 ${isAnimating ? 'scale-95 opacity-75' : 'scale-100 opacity-100'}`}>
          <div
            className="retro-panel retro-panel-lift bg-linear-to-br from-[#fffacd] to-[#fff8dc] px-8 py-12 sm:px-10 sm:py-16 shadow-lg cursor-pointer active:scale-95 transition-transform"
            onClick={shuffle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                shuffle();
              }
            }}
            aria-label={`Current card: ${currentQuestion}. Click to shuffle.`}>

            {/* Deck Icon */}
            <div className="text-center mb-4 text-3xl opacity-60">🎴</div>

            {/* Question Text */}
            <div className="text-center">
              <p className="text-2xl sm:text-4xl font-black text-[#2b1f73] leading-tight uppercase tracking-tight">
                {currentQuestion}
              </p>
            </div>

            {/* Tap Indicator */}
            <div className="mt-8 text-center text-sm font-bold text-[#6b2d92] uppercase tracking-[0.08em] animate-pulse">
              ✦ Tap center to shuffle ✦
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons & Score */}
      <div className="w-full max-w-2xl">
        {/* Score Display */}
        <div className="grid grid-cols-2 gap-3 mb-6 float-in stagger-2">
          <div className="retro-panel bg-[#ffb3ba] p-3 text-center shadow-none">
            <div className="text-xs uppercase font-bold tracking-[0.08em] text-[#8b2f39]">Not Found</div>
            <div className="text-2xl font-black text-[#5a1a22] mt-1">{failCount}</div>
          </div>
          <div className="retro-panel bg-[#99ff99] p-3 text-center shadow-none">
            <div className="text-xs uppercase font-bold tracking-[0.08em] text-[#2d5a2d]">Found</div>
            <div className="text-2xl font-black text-[#1a3a1a] mt-1">{successCount}</div>
          </div>
        </div>

        {/* Left/Right Buttons */}
        <div className="grid grid-cols-2 gap-3 float-in stagger-3">
          <button
            onClick={() => handleAction(recordFail)}
            className="retro-button bg-[#ffb3ba] hover:bg-[#ff9da3] px-6 py-4 font-bold uppercase tracking-[0.06em] text-[#5a1a22] transition-colors"
            aria-label="Not found - get next card">
            ← Nope
          </button>
          <button
            onClick={() => handleAction(recordSuccess)}
            className="retro-button bg-[#99ff99] hover:bg-[#7fffd5] px-6 py-4 font-bold uppercase tracking-[0.06em] text-[#1a3a1a] transition-colors"
            aria-label="Found - get next card">
            Found →
          </button>
        </div>

        {/* Info Footer */}
        <div className="mt-6 retro-panel bg-[#e8f4f8] p-3 text-center text-xs font-semibold text-[#155a8e] uppercase tracking-[0.06em] float-in stagger-4">
          Ask. Find. Celebrate. Repeat!
        </div>
      </div>
    </div>
  );
}
