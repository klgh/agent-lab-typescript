import { useState, useCallback } from 'react';
import { questions } from '../data/questions';

export interface DeckGameState {
  currentQuestion: string;
  usedIndices: Set<number>;
  shuffleCount: number;
  successCount: number;
  failCount: number;
}

export function useDeckGame() {
  const [state, setState] = useState<DeckGameState>({
    currentQuestion: getRandomQuestion(new Set()),
    usedIndices: new Set(),
    shuffleCount: 0,
    successCount: 0,
    failCount: 0,
  });

  const shuffle = useCallback(() => {
    setState((prev) => {
      const newIndices = new Set(prev.usedIndices);
      const nextQuestion = getRandomQuestion(newIndices);

      return {
        currentQuestion: nextQuestion,
        usedIndices: newIndices,
        shuffleCount: prev.shuffleCount + 1,
        successCount: prev.successCount,
        failCount: prev.failCount,
      };
    });
  }, []);

  const recordSuccess = useCallback(() => {
    setState((prev) => {
      const newIndices = new Set(prev.usedIndices);
      const nextQuestion = getRandomQuestion(newIndices);

      return {
        currentQuestion: nextQuestion,
        usedIndices: newIndices,
        shuffleCount: prev.shuffleCount + 1,
        successCount: prev.successCount + 1,
        failCount: prev.failCount,
      };
    });
  }, []);

  const recordFail = useCallback(() => {
    setState((prev) => {
      const newIndices = new Set(prev.usedIndices);
      const nextQuestion = getRandomQuestion(newIndices);

      return {
        currentQuestion: nextQuestion,
        usedIndices: newIndices,
        shuffleCount: prev.shuffleCount + 1,
        successCount: prev.successCount,
        failCount: prev.failCount + 1,
      };
    });
  }, []);

  const reset = useCallback(() => {
    setState({
      currentQuestion: getRandomQuestion(new Set()),
      usedIndices: new Set(),
      shuffleCount: 0,
      successCount: 0,
      failCount: 0,
    });
  }, []);

  return {
    currentQuestion: state.currentQuestion,
    successCount: state.successCount,
    failCount: state.failCount,
    shuffle,
    recordSuccess,
    recordFail,
    reset
  };
}

function getRandomQuestion(usedIndices: Set<number>): string {
  if (usedIndices.size >= questions.length) {
    usedIndices.clear();
  }

  let randomIndex: number;
  do {
    randomIndex = Math.floor(Math.random() * questions.length);
  } while (usedIndices.has(randomIndex));

  usedIndices.add(randomIndex);
  return questions[randomIndex];
}
