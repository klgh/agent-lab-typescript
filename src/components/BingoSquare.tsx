import type { BingoSquareData } from '../types'

interface BingoSquareProps {
  square: BingoSquareData
  isWinning: boolean
  onClick: () => void
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex min-h-[60px] items-center justify-center rounded-lg border-2 border-[#22177f] px-1 py-2 text-center text-[10px] font-bold leading-tight text-[#2c2278] shadow-[0_2px_0_#1f1a6d] transition-all duration-150 select-none sm:min-h-[66px] sm:text-[11px]'

  const interactionClasses = `${square.isMarked ? 'tile-locked' : 'tile-hover'} ${isWinning ? 'win-pulse' : ''}`

  const stateClasses =
    square.isMarked ?
      isWinning ? 'bg-[linear-gradient(145deg,#fff9a5_0%,#ffe700_100%)] text-[#5a4300] scale-[1.02]'
      : 'bg-[linear-gradient(145deg,#d7ffe7_0%,#a0ffca_100%)] text-[#045a2a]'
    : 'bg-[linear-gradient(180deg,#ffffff_0%,#f0f6ff_100%)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_#1f1a6d]'

  const freeSpaceClasses =
    square.isFreeSpace ?
      'bg-[linear-gradient(145deg,#d6f8ff_0%,#9eeeff_100%)] text-[12px] uppercase tracking-[0.06em] text-[#114f82]'
    : ''

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses} ${interactionClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}>
      <span className="wrap-break-word px-0.5">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute right-1 top-1 rounded bg-white px-1 text-[9px] font-black text-[#057a39]">Y</span>
      )}
      {isWinning && <span className="pointer-events-none absolute inset-0 rounded-lg border-2 border-hot-pink blink" />}
    </button>
  )
}
