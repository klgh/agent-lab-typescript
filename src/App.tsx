import { useBingoGame } from './hooks/useBingoGame'
import { StartScreen } from './components/StartScreen'
import { GameScreen } from './components/GameScreen'
import { BingoModal } from './components/BingoModal'
import { CardDeck } from './components/CardDeck'

function App() {
  const {
    gameState,
    board,
    selectedQuestionSet,
    winningSquareIds,
    showBingoModal,
    audioEnabled,
    startGame,
    setQuestionSet,
    handleSquareClick,
    resetGame,
    dismissModal,
    toggleAudio,
  } = useBingoGame()

  return (
    <div className="app-shell">
      <div className="retro-window">
        <header className="retro-topbar">
          <span
            className="retro-dots"
            aria-hidden>
            <span />
            <span />
            <span />
          </span>
          <strong className="retro-title">bingo-mixer.exe</strong>
          <span className="retro-status">online</span>
        </header>
        <div
          className="retro-marquee"
          aria-label="Retro ticker">
          <div className="retro-ticker-track">
            Welcome to Bingo Mixer 1999 - click around, meet people, and chase that line. New look unlocked. - Welcome
            to Bingo Mixer 1999 - click around, meet people, and chase that line. New look unlocked.
          </div>
        </div>

        {gameState === 'start' ?
          <StartScreen
            onStart={startGame}
            selectedQuestionSet={selectedQuestionSet}
            onQuestionSetChange={setQuestionSet}
            audioEnabled={audioEnabled}
            onToggleAudio={toggleAudio}
          />
        : gameState === 'deck' ?
          <CardDeck
            onBack={resetGame}
            questionSetId={selectedQuestionSet}
          />
        : <>
            <GameScreen
              board={board}
              winningSquareIds={winningSquareIds}
              hasBingo={gameState === 'bingo'}
              onSquareClick={handleSquareClick}
              onReset={resetGame}
              audioEnabled={audioEnabled}
              onToggleAudio={toggleAudio}
            />
            {showBingoModal && <BingoModal onDismiss={dismissModal} />}
          </>
        }
      </div>
    </div>
  )
}

export default App
