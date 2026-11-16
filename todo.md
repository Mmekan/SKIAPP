# SKI — todo

Check items off as they land. Each phase should end in something you can run and look at.

## Phase 0 — Scaffold
- [x] `create-next-app` with TypeScript, Tailwind, App Router, `src/` off
- [x] shadcn config (`components.json` + `lib/utils.ts` written by hand; CLI was blocked)
- [x] Install `gsap` (+ clsx, tailwind-merge, cva, lucide-react, tw-animate-css)
- [x] Paste design-system CSS variables into `app/globals.css`
- [x] Font: Open Sans via `next/font`
- [x] Confirm `npm run dev` serves `/` with 200
- [x] Delete leftovers: `scaffold/`, `page.html`, `course.html`, `squiz.html`, `study.html`, `me.html`
- [ ] `git init` at the root

## Phase 1 — Home + fullscreen menu
- [x] `components/site-menu.tsx` — links: Home, Course, SQuiz, Study, Me
- [x] Home page sections: Hero, thesis, about, metrics & vision, what we offer, started date (June 2026)
- [x] "Pick today's task" grey text + button underneath opens the menu
- [x] Dark mode toggle (`components/theme-toggle.tsx`, saved in `localStorage`)
- [x] Back button on every sub-page (`components/back-button.tsx`)
- [x] `suppressHydrationWarning` on `<html>`/`<body>` (Grammarly extension attributes)
- [ ] Reduced-motion fallbacks verified
- [ ] Mobile check (375px) + desktop

## Phase 2 — Course + onboarding
- [ ] `lib/store.ts` — localStorage-backed context: level, primary course, extra courses, onboarded flag
- [ ] Level prompt (100L–500L)
- [ ] Course list with expandable tree of topics per level
- [ ] Course selection locks globally; can add extra courses, never zero primary
- [ ] Share `/course` confirm flow used by Home's light onboarding
- [ ] Minimal `/squiz`, `/study`, `/me` placeholder pages so nav links don't 404

## Phase 3 — Shell polish
- [ ] Bottom nav or page transitions between sections
- [ ] Empty states + loading skeletons

## Phase 4 — SQuiz
- [ ] Topic picker (max 2)
- [ ] Past-question data shape + sample set
- [ ] Quiz runner + result screen

## Phase 5 — Study
- [ ] Segmented video player
- [ ] Pause-and-ask panel
- [ ] AI guardrail prompt (outline-scoped) + API route
- [ ] Segment quiz → topic quiz → spaced repetition scheduling

## Phase 6 — Me
- [ ] Profile, analytics, settings

## Later (not now)
- Auth + database
- Real video hosting/CDN
- Content pipeline for outlines + past questions
