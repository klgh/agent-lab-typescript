---
description: "Bingo Mixer is a social bingo game for in-person mixers. React 19 + TypeScript + Tailwind CSS 4 + Vite application."
---

# Bingo Mixer Agent Guide

Bingo Mixer is a React + TypeScript social bingo app for in-person mixers.

## Mandatory Development Checklist

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] `npm run test`

Do not finalize code changes until all three are checked.

## Quick Start

- Dev server: `npm run dev`
- App entry: [src/App.tsx](src/App.tsx)
- Core state hook: [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts)
- Core logic: [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts)
- Shared types: [src/types/index.ts](src/types/index.ts)
- Questions dataset: [src/data/questions.ts](src/data/questions.ts)

## Architecture

- UI flow: start screen -> game screen -> bingo modal
- State owner: `useBingoGame()` manages `start | playing | bingo`
- Persistence: localStorage key `bingo-game-state` with schema versioning
- Board model: 5x5 grid, center free space at index `12`

## Conventions

- Keep logic pure in [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts)
- Keep UI in components under [src/components](src/components)
- Keep all domain types in [src/types/index.ts](src/types/index.ts)
- Prefer immutable updates and explicit typing

## Change Guidance

- New game rules or bingo checks: edit [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts) and update [src/utils/bingoLogic.test.ts](src/utils/bingoLogic.test.ts)
- New questions: edit [src/data/questions.ts](src/data/questions.ts)
- Screen/state behavior: edit [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts) and [src/App.tsx](src/App.tsx)

## Related Instructions

- [Frontend design instructions](.github/instructions/frontend-design.instructions.md)
- [Tailwind 4 instructions](.github/instructions/tailwind-4.instructions.md)
