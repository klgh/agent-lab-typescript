import type { BingoSquareData } from '../types'
import { BingoBoard } from './BingoBoard'

interface GameScreenProps {
  board: BingoSquareData[]
  winningSquareIds: Set<number>
  hasBingo: boolean
  onSquareClick: (squareId: number) => void
  onReset: () => void
  audioEnabled: boolean
  onToggleAudio: () => void
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
  audioEnabled,
  onToggleAudio,
}: GameScreenProps) {
  return (
    <div className="checker-bg flex min-h-full flex-col">
      <header className="flex items-center justify-between gap-2 border-b-2 border-[#1f1a6d] bg-[#ffe9fb] px-3 py-3 sm:px-4">
        <button
          onClick={onReset}
          className="retro-button retro-button-secondary float-in stagger-1 px-3 py-2 text-xs sm:text-sm">
          New Board
        </button>
        <h1 className="text-center text-sm font-black uppercase tracking-[0.08em] text-[#22177f] sm:text-base">
          Bingo Mixer 99
        </h1>
        <button
          onClick={onToggleAudio}
          className="retro-button retro-button-secondary float-in stagger-2 px-3 py-2 text-xs sm:text-sm"
          aria-pressed={audioEnabled}>
          {audioEnabled ? 'Sound On' : 'Sound Off'}
        </button>
      </header>

      <div className="mx-3 mt-3 rounded-xl border-2 border-[#22177f] bg-[#fffde3] px-3 py-2 text-center text-xs font-bold uppercase tracking-[0.08em] text-[#2d2376] float-in stagger-1 sm:mx-4 sm:text-sm">
        Walk up. Say hi. Find a match. Tap it. Keep momentum.
      </div>

      {hasBingo && (
        <div className="mx-3 mt-3 rounded-xl border-2 border-[#1f1a6d] bg-[#d9fff8] px-3 py-2 text-center text-sm font-black uppercase tracking-[0.08em] text-[#11568a] bingo-banner sm:mx-4">
          Bingo unlocked. Keep going for extra bragging rights.
        </div>
      )}

      <div className="flex flex-1 items-center justify-center p-3 sm:p-5">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>

      <div className="pb-3 text-center text-[11px] font-bold uppercase tracking-[0.08em] text-[#3d2f8f] sm:pb-4">
        Collect stories, not just checkmarks.
      </div>
    </div>
  )
}
