---
name: design-guide
description: "Use when redesigning UI, adding micro-interactions, or updating visual copy in this repo. Enforces the Web 1.0/90s aesthetic, Tailwind v4 token usage, and motion/accessibility checks."
applyTo:
  - "src/**/*.tsx"
  - "src/index.css"
---

# Bingo Mixer Design Guide

Use this guide for all frontend visual changes in this project.

## Visual Direction (Required)

- Keep the product in a Web 1.0 / late-90s playful style.
- Favor bold color contrast, sticker-style accents, chunky borders, and energetic hierarchy.
- Avoid generic modern SaaS look-and-feel.
- Keep visuals cohesive across start, gameplay, board, and win modal states.

## Typography and Color Rules

- Use expressive, era-appropriate type stacks (not default system-only modern UI tone).
- Define reusable visual tokens in [src/index.css](src/index.css) using Tailwind v4 `@theme` variables.
- Prefer named token utilities over repeated ad-hoc hex classes when a value is used more than once.
- Extend existing token families instead of introducing one-off visual styles.

## Motion and Micro-Interactions

- Add a small number of meaningful, high-clarity interactions:
  - entry reveal/stagger
  - hover/tap feedback
  - win-state emphasis
  - shell-level ambient motion
- Make interactions readable and intentional, not noisy.
- Keep durations short and game-friendly (typically 120ms to 900ms).
- If motion is added, include reduced-motion handling.

## Component-Level Guidance

- Prefer visual polish in existing components before adding new structure.
- Keep gameplay logic in hooks/utilities unchanged unless the design change requires behavior wiring.
- Preserve touch friendliness:
  - clear hit targets
  - obvious pressed states
  - readable text at mobile sizes

## Copy and Tone

- Keep copy playful, social, and concise.
- Match 90s personality without sacrificing clarity.
- Favor action-oriented phrases that push conversation and momentum.

## Quality and Safety Checks

After design edits, run:

1. `npm run lint`
2. `npm run build`
3. `npm run test`

Also verify manually:

- start -> play -> bingo -> continue/reset flow
- mobile and desktop readability
- no visual overflow or clipped controls
- animations remain usable with reduced motion preference

## Related Guidance

- See [frontend-design.instructions.md](frontend-design.instructions.md) for anti-generic visual guidance.
- See [tailwind-4.instructions.md](tailwind-4.instructions.md) for Tailwind v4 implementation specifics.
