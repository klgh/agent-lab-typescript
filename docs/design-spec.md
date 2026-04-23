# Bingo Mixer Design Spec

## Game Modes

### Mode 1: Bingo Mixer (Original)

- **Entry**: Start Screen with game rules
- **Gameplay**: 5x5 bingo board with travel-themed questions
- **Win State**: First to 5 in a row (row, column, diagonal, or corners)
- **Flow**: StartScreen → GameScreen (board) → BingoModal (win) → Reset

### Mode 2: Card Deck Shuffle (NEW)

- **Entry**: Players see mode selection on Start Screen
- **Gameplay**: Tap to reveal random card with a question
- **Interaction**: Single tap reveals card, tap again to shuffle to next
- **No Win Condition**: Infinite deck for continuous conversation
- **Visual**: Large card UI, one question at a time, shuffle animation

---

## Implementation Plan

### Phase 1: Mode Selection UI

- [x] Add mode selection buttons to StartScreen
- [x] Update GameState type to include 'deck' mode state
- [x] Add radio/button group styling (90s aesthetic)

### Phase 2: Card Component & Hook

- [x] Create CardDeck component
- [x] Create useDeckGame hook (manage current card, shuffle history)
- [x] Add deck game state to App.tsx
- [x] Wire up mode routing

### Phase 3: Visual Polish

- [x] Style large card display (sticker/retro style)
- [x] Add tap feedback / shuffle animation
- [x] Ensure mobile-friendly hit targets
- [x] Add gradient background and emoji accent
- [x] Pulsing tap indicator for affordance

### Phase 4: Integration & Testing

- [x] Link both modes from StartScreen
- [x] Add reset/back navigation
- [x] Full flow testing (start → mode → play → reset)

---

## Design Decisions

### Visual Style

- Keep Web 1.0/90s aesthetic consistent with Bingo mode
- Large, bold card design with clear question text
- Sticker-style accents and chunky borders
- Retro panel styling matching existing components

### Interaction Model

- **Tap/Click**: Advances to next random card (shuffle)
- **Touch feedback**: Button press state visible on tap
- **No multi-tap sequences**: Keep it simple and fast-paced

### Content

- Reuse existing travel questions from bingo mode
- Ensure questions work well as standalone prompts (not grid context dependent)

---

## Decisions Logged

- Using existing questions.ts for consistency
- Single card at a time (vs. deck fan-out) for clarity
- Infinite shuffle loop (no win state) matches "party mixer" vibe

---

## Build Status

✅ All phases complete
✅ Build passing (npm run build)
✅ Lint passing (npm run lint)
✅ Ready for user testing

### Implementation Details

**CardDeck Component** (`src/components/CardDeck.tsx`):

- Large centered card with question text
- Tap/click to shuffle to next random question
- Yellow/cream gradient background (#fffacd → #fff8dc)
- Card icon emoji (🎴) for visual interest
- Pulsing "tap to shuffle" indicator
- Back button for returning to mode selection

**useDeckGame Hook** (`src/hooks/useDeckGame.ts`):

- Manages deck state: current question, used indices, shuffle count
- Tracks used questions to avoid repeats (until all exhausted)
- Auto-resets used set when all questions shown once

**Mode Selection** (Updated `StartScreen.tsx`):

- Two buttons: Bingo Mode & Card Shuffle
- Mode selection passed to game state machine
- Separate routing in App.tsx based on selected mode

