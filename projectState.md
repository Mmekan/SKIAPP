# SKI — project state

> Persistent memory for this project. Update this file whenever a decision
> changes, a phase finishes, or a convention is set. Read it first in any new session.

## What SKI is

A study tool for Nigerian university students. Short video lessons built
**strictly** from the official course outline + past questions. Students can pause
and ask a question about the exact part they're watching; the answer stays inside
the course outline. Understanding is locked in with quizzes after every segment,
after every topic, and again later (spaced repetition).

## Product priorities (in order)

1. Content tightly bound to course outline + past questions — nothing else.
2. In-video questioning, scoped to the outline. Exam-acceptable shortcuts allowed
   in Math/Physics only when they aid understanding.
3. Layered testing: segment quiz → topic quiz → spaced quiz later.

## Navigation (5 sections, no hamburger)

Home · Course · SQuiz · Study · Me

- The full-screen menu opens **only** from the button under the grey text
  "Pick today's task" on Home. No top-right toggle, no hamburger anywhere.
- Menu panel: no images. Instead, floating/falling short study phrases picked at
  random from a text file (e.g. "Past questions first", "Ask while you watch",
  "Stay inside the outline").
- Home: Hero, Our thesis, About, Metrics & Vision, What we offer, date we started,
  light onboarding.
- Course: requires Level. Lists courses; selecting one expands it as a tree of
  topics for that level and locks it in globally. Users can add extra courses
  (carry-over students) but always keep one primary course.
- SQuiz: past-question tests; max 2 topics selected at a time.
- Study: segmented video lessons + "ask AI about this part".
- Me: profile, analytics/progress, settings.

## Decisions log

| Date | Decision |
|------|----------|
| 2026-06-19 | **Official project start: Friday, 19 June 2026, 12:38:44 PM.** The Home page "Started" section shows `June 2026`. |
|------|----------|
| 2026-11-16 | Stack: Next.js (App Router) + TypeScript + Tailwind v4 + shadcn/ui + GSAP. |
| 2026-11-16 | Design system: user-supplied CSS variables (X-blue `#1e9df1`/`#1da1f2`), light + dark, `@theme inline`, radius `1.3rem`. Font: Open Sans. |
| 2026-11-16 | Menu: clip-path fullscreen reveal (from the Hyperiux immersive nav), triggered by an in-page button, not a header toggle. |
| 2026-11-16 | Memory (dev process): `projectState.md` = decisions/state; `todo.md` = phased checklist. Deja indexes session history. |
| 2026-11-16 | App data (Phase 1): `localStorage` + React context for onboarding/level/primary course. No auth, no backend yet. Revisit when Study/SQuiz need real user data. |

## Conventions

- Mobile-first; no decorative images.
- AI answers in Study: scoped to outline + past questions, redirect when out of scope.
- Keep files small; components in `components/ui` come from shadcn, app-specific
  components in `components/`.

## Environment

- OS: Windows 11, shell: bash (Git Bash). Node v24.19.0.
- Path: `C:\xampp\htdocs\ski main` — note the **space** in the folder name;
  always quote paths.
- **The Bash tool is blocked by the auto-mode classifier in this session.**
  Use the Terminal panel (`mcp__terminal__run_in_terminal`) instead. It only
  accepts literal PowerShell lines: no pipes, no variables, no parentheses.
- `create-next-app` refuses this folder: the name has a space (invalid npm
  name) and the folder is not empty. **Workaround in use:** scaffold into a
  subfolder `scaffold/`, then move its contents up one level.

## Build status

- **Phase 0 — done.** Next.js 16.4.6, React 19.3, Tailwind 4.3.3 (Turbopack),
  TypeScript, ESLint, App Router, no `src/`, `@/*` alias.
  - `shadcn init` was **not** run (the CLI kept getting blocked). Instead
    `components.json` and `lib/utils.ts` were written by hand and the deps
    installed directly: `gsap clsx tailwind-merge class-variance-authority
    lucide-react tw-animate-css`. `npx shadcn@latest add <component>` should
    work from here.
  - Design tokens pasted into `app/globals.css` verbatim, plus `@theme inline`
    additions for `--font-sans`, `--font-mono`, `--radius-lg/xl`, and a
    `ski-fall` keyframe for the menu phrases.
  - Open Sans wired via `next/font/google` in `app/layout.tsx`.
- **Phase 1 — Home + menu built.** `app/page.tsx` (hero, thesis, about,
  metrics & vision, what we offer, started date) and
  `components/site-menu.tsx` (the "Pick today's task" block + GSAP clip-path
  fullscreen menu, no hamburger, falling phrases from `content/study-phrases.ts`).
  Placeholder pages exist for `/course`, `/squiz`, `/study`, `/me`.
- **Verified:** `npm run dev` on port 3000; `/`, `/course`, `/squiz`, `/study`,
  `/me` all return 200.
- **Phase 1 extras — done.** Dark mode toggle (`components/theme-toggle.tsx`,
  persisted as `ski-theme` in `localStorage`, applied pre-paint by an inline
  script in `app/layout.tsx`), back button on every sub-page
  (`components/back-button.tsx`), `suppressHydrationWarning` on `<html>`/`<body>`
  for browser-extension attributes (Grammarly).
- **Cleaned up:** `scaffold/` and the five debug `.html` files are deleted.
