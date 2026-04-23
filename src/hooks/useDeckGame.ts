import { useState, useCallback } from 'react'
import { questions } from '../data/questions'

export interface DeckGameState {
  currentQuestion: string
  usedIndices: Set<number>
  shuffleCount: number
  successCount: number
  failCount: number
}

export function useDeckGame(questionPool: string[] = questions) {
  const [state, setState] = useState<DeckGameState>({
    currentQuestion: getRandomQuestion(new Set(), questionPool),
    usedIndices: new Set(),
    shuffleCount: 0,
    successCount: 0,
    failCount: 0,
  })

  const shuffle = useCallback(() => {
    setState((prev) => {
      const newIndices = new Set(prev.usedIndices)
      const nextQuestion = getRandomQuestion(newIndices, questionPool)

      return {
        currentQuestion: nextQuestion,
        usedIndices: newIndices,
        shuffleCount: prev.shuffleCount + 1,
        successCount: prev.successCount,
        failCount: prev.failCount,
      }
    })
  }, [questionPool])

  const recordSuccess = useCallback(() => {
    setState((prev) => {
      const newIndices = new Set(prev.usedIndices)
      const nextQuestion = getRandomQuestion(newIndices, questionPool)

      return {
        currentQuestion: nextQuestion,
        usedIndices: newIndices,
        shuffleCount: prev.shuffleCount + 1,
        successCount: prev.successCount + 1,
        failCount: prev.failCount,
      }
    })
  }, [questionPool])

  const recordFail = useCallback(() => {
    setState((prev) => {
      const newIndices = new Set(prev.usedIndices)
      const nextQuestion = getRandomQuestion(newIndices, questionPool)

      return {
        currentQuestion: nextQuestion,
        usedIndices: newIndices,
        shuffleCount: prev.shuffleCount + 1,
        successCount: prev.successCount,
        failCount: prev.failCount + 1,
      }
    })
  }, [questionPool])

  const reset = useCallback(() => {
    setState({
      currentQuestion: getRandomQuestion(new Set(), questionPool),
      usedIndices: new Set(),
      shuffleCount: 0,
      successCount: 0,
      failCount: 0,
    })
  }, [questionPool])

  return {
    currentQuestion: state.currentQuestion,
    successCount: state.successCount,
    failCount: state.failCount,
    shuffle,
    recordSuccess,
    recordFail,
    reset,
  }
}

function getRandomQuestion(usedIndices: Set<number>, questionPool: string[]): string {
  if (usedIndices.size >= questionPool.length) {
    usedIndices.clear()
  }

  let randomIndex: number
  do {
    randomIndex = Math.floor(Math.random() * questionPool.length)
  } while (usedIndices.has(randomIndex))

  usedIndices.add(randomIndex)
  return questionPool[randomIndex]
}
