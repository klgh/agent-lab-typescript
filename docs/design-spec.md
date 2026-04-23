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
- **Interaction**: Left button (Nope) for "not found", Right button (Found) for "found a match"
- **Scoring**: Tracks successes vs. failures with live counter display
- **No Win Condition**: Infinite deck for continuous conversation
- **Visual**: Large card UI, one question at a time, score display, color-coded buttons

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
- Left/Right buttons track success/fail with live counters
- Instructions visible on card screen for quick learning
- Color-coded buttons: red (fail/nope) and green (success/found) for instant visual feedback

---

## Build Status

✅ All phases complete
✅ Build passing (npm run build)
✅ Lint passing (npm run lint)
✅ Ready for user testing

### Implementation Details

**CardDeck Component** (`src/components/CardDeck.tsx`):

- Large centered card with question text
- Tap center to shuffle (see another random card)
- Left button (red) "Nope" = didn't find a match, advance to next card
- Right button (green) "Found" = found someone matching, advance to next card
- Score display: "Not Found" counter (red) and "Found" counter (green)
- Clear instructions panel at top showing how to play
- Full-height layout with buttons at bottom
- Gradient card background and color-coded button feedback

**useDeckGame Hook** (`src/hooks/useDeckGame.ts`):

- Manages deck state: current question, used indices, shuffle count
- Tracks success/fail counters for live score display
- recordSuccess() = advance card + increment found count
- recordFail() = advance card + increment not found count
- shuffle() = advance card without changing counters
- Auto-resets used set when all questions shown once

**Mode Selection** (Updated `StartScreen.tsx`):

- Two buttons: Bingo Mode & Card Shuffle
- Mode selection passed to game state machine
- Separate routing in App.tsx based on selected mode


## Build Status

✅ All phases complete
✅ Build passing (npm run build)
✅ Lint passing (npm run lint)
✅ Ready for user testing

### Feature Summary

**Left/Right Scoring System**:
- "Nope" button (left, red) - increments "Not Found" counter
- "Found" button (right, green) - increments "Found" counter
- Buttons auto-advance to next random card after each action
- Score display shows both counters with visual emphasis

**User Instructions**:
- Clear instructions panel at top of Card Deck screen
- Explains left/right button behavior in simple language
- Matches retro aesthetic with styled panel and bold text
