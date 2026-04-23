import { useDeckGame } from '../hooks/useDeckGame';
import { useState } from 'react';

interface CardDeckProps {
  onBack: () => void;
}

export function CardDeck({ onBack }: CardDeckProps) {
  const { currentQuestion, shuffle } = useDeckGame();
  const [isShuffling, setIsShuffling] = useState(false);

  const handleShuffle = () => {
    setIsShuffling(true);
    shuffle();
    setTimeout(() => setIsShuffling(false), 300);
  };

  return (
    <div className="checker-bg min-h-full p-5 sm:p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-xl">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="retro-button retro-button-secondary mb-6 px-4 py-2 text-sm float-in">
          ← Back
        </button>

        {/* Card Display */}
        <div className={`float-in transform transition-all duration-300 ${isShuffling ? 'scale-95 opacity-75' : 'scale-100 opacity-100'}`}>
          <div
            className="retro-panel retro-panel-lift bg-linear-to-br from-[#fffacd] to-[#fff8dc] px-8 py-12 sm:px-10 sm:py-16 shadow-lg cursor-pointer active:scale-95 transition-transform"
            onClick={handleShuffle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleShuffle();
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
              ✦ Tap to shuffle ✦
            </div>
          </div>
        </div>

        {/* Info Footer */}
        <div className="mt-8 retro-panel bg-[#e8f4f8] p-4 text-center text-xs font-semibold text-[#155a8e] uppercase tracking-[0.06em] float-in stagger-2">
          Ask questions. Get answers. Mix it up!
        </div>
      </div>
    </div>
  );
}
