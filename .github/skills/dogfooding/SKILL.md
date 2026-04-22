---
name: dogfooding
description: 'Critically dogfood this app like an internal power user. Use for fun-factor reviews, UX friction analysis, and product quality checks with lint/build/test gates.'
argument-hint: 'What area should be dogfooded (full app, onboarding, game loop, retention)?'
---

# Dogfooding Review

Run a strict, product-minded dogfooding pass that evaluates both software quality and user enjoyment.

## When To Use

- User asks to "dogfood" the app
- User asks for critical product feedback, especially fun/engagement
- Before demos, workshops, or release candidates
- When deciding what UX or gameplay improvements to prioritize

## Inputs

- Optional scope: full app, onboarding, gameplay loop, scoring, retention
- Optional persona: first-time user, host/facilitator, repeat player

If scope is not provided, review the full app with emphasis on onboarding + core loop.

## Procedure

1. Establish baseline quality gates first.
2. Inspect core user flow files and product copy.
3. Evaluate fun and friction with explicit scoring.
4. Produce prioritized, actionable feedback.
5. Recommend highest-impact next improvements.

## Step 1: Quality Gates (Mandatory)

Run in order:

1. `npm run lint`
2. `npm run build`
3. `npm run test`

Decision logic:

- If one or more gates fail, report failures first and classify all product feedback as provisional.
- If all pass, continue with full product/fun critique.

## Step 2: Read Product-Critical Areas

Review these areas before scoring:

- App flow and state orchestration
- Onboarding/start screen copy and clarity
- Core interaction loop (tap, progress, win)
- Feedback surfaces (win state, modals, indicators)
- Content quality (question/prompts)
- Persistence/reset behavior and accidental-loss risk

For this repository, likely anchors include:

- `src/App.tsx`
- `src/components/StartScreen.tsx`
- `src/components/GameScreen.tsx`
- `src/components/BingoModal.tsx`
- `src/hooks/useBingoGame.ts`
- `src/data/questions.ts`

## Step 3: Score and Diagnose

Provide a compact scorecard:

- Fun score: `/10`
- Clarity score: `/10`
- Replayability score: `/10`
- Social energy score: `/10`

Then list findings ordered by severity:

1. Critical blockers to enjoyment/trust
2. Major friction points
3. Minor polish issues

## Step 4: Product-Minded Recommendations

Recommend changes in this format:

- Problem
- Why it hurts fun/engagement
- Fix
- Impact (`High`, `Medium`, `Low`)
- Effort (`S`, `M`, `L`)

Prefer recommendations that increase:

- Tension and momentum
- Social interaction quality
- Payoff at win moments
- Replayability across sessions

## Step 5: Completion Criteria

A dogfooding review is complete only if it includes:

- Gate results (`lint`, `build`, `test`)
- Explicit fun/clarity/replayability/social scores
- At least 5 critical findings with rationale
- Top 3 highest-impact next steps
- A note on any testing limitations (for example: no in-browser manual play)

## Response Style

- Be candid and specific, not diplomatic fluff
- Prioritize user experience outcomes over code aesthetics
- Separate objective quality status from subjective product critique
- Keep recommendations implementation-ready
