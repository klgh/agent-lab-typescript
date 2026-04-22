interface BingoModalProps {
  onDismiss: () => void
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1659]/65 p-4 backdrop-blur-[2px]">
      <div className="retro-panel modal-pop relative w-full max-w-sm border-4 bg-[#fff7cc] p-6 text-center">
        <span
          className="confetti-spark"
          aria-hidden
        />
        <span
          className="confetti-spark"
          aria-hidden
        />
        <span
          className="confetti-spark"
          aria-hidden
        />
        <span
          className="confetti-spark"
          aria-hidden
        />
        <span
          className="confetti-spark"
          aria-hidden
        />
        <div className="mx-auto mb-3 inline-flex rounded-full border-2 border-[#1f1a6d] bg-[#ffffff] px-3 py-1 text-xs font-black uppercase tracking-[0.08em] text-[#2f237e]">
          Achievement Unlocked
        </div>
        <h2 className="mb-2 text-4xl font-black uppercase tracking-[0.08em] text-hot-pink">Bingo</h2>
        <p className="mb-6 text-sm font-bold text-[#2c2278]">
          You landed a full line. Keep roaming and see if you can stack another one.
        </p>

        <button
          onClick={onDismiss}
          className="retro-button w-full px-6 py-3 text-base">
          Keep The Streak Going
        </button>
      </div>
    </div>
  )
}
