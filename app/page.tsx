import { SiteMenu } from "@/components/site-menu";
import { ThemeToggle } from "@/components/theme-toggle";

const OFFER = [
  {
    n: "01",
    title: "Outline-bound video lessons",
    body: "Short segments built from your course outline and past questions. No tangents, no filler.",
  },
  {
    n: "02",
    title: "Ask while you watch",
    body: "Pause at any point and ask about that exact part. Answers stay inside the outline, with exam-acceptable shortcuts where they help.",
  },
  {
    n: "03",
    title: "Quizzes that come back",
    body: "After each segment, after each topic, and again later — so what you're forgetting gets caught before the exam does.",
  },
];

const METRICS = [
  { stat: "100%", title: "Outline-bound", body: "Every lesson segment maps to a line in the official course outline." },
  { stat: "3×", title: "Layered recall", body: "Segment quiz, topic quiz, then the same material again later — spaced." },
  { stat: "0", title: "Off-syllabus answers", body: "Ask anything while watching. Outside the outline, SKI says so and redirects." },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5">
      <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-background/80 backdrop-blur-md">
        <span className="flex items-center gap-2.5 text-sm font-extrabold tracking-[0.16em]">
          <span className="size-2.5 rounded-full bg-primary ring-4 ring-primary/20" />
          SKI
        </span>
        <span className="flex items-center gap-3">
          <span className="hidden text-xs opacity-60 sm:inline">
            Built for Nigerian university students
          </span>
          <ThemeToggle />
        </span>
      </header>

      <section className="py-16 sm:py-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] opacity-55">
          Study, inside the outline
        </p>
        <h1 className="mt-4 max-w-[16ch] text-[clamp(2.4rem,7vw,4.6rem)] font-bold leading-[1.05] tracking-[-0.03em]">
          Every answer you need is already in your{" "}
          <span className="text-primary">past questions</span>.
        </h1>
        <p className="mt-6 max-w-[56ch] text-base leading-relaxed opacity-80">
          SKI turns your official course outline and past questions into short video lessons. Pause
          anywhere, ask about the exact part you&apos;re watching, and get an answer that stays inside
          what you&apos;ll actually be tested on.
        </p>

        <SiteMenu />
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] opacity-55">Our thesis</p>
        <h2 className="mt-4 max-w-[24ch] text-[clamp(1.6rem,3.6vw,2.6rem)] font-bold leading-tight tracking-[-0.03em]">
          Students don&apos;t fail because they&apos;re lazy. They fail because the material is too wide.
        </h2>
        <blockquote className="mt-8 max-w-[44ch] border-l-[3px] border-primary pl-5 text-lg font-medium leading-snug">
          If a lesson can&apos;t be traced back to the course outline or a past question, it doesn&apos;t
          belong in SKI.
        </blockquote>
        <p className="mt-6 max-w-[56ch] leading-relaxed opacity-80">
          Lecturers move fast and assume prior knowledge. YouTube gives you the whole internet and no
          direction. AI gives you confident answers to questions you were never asked. SKI does one
          thing: it teaches exactly what your exam will ask, and nothing else.
        </p>
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] opacity-55">About</p>
        <h2 className="mt-4 text-[clamp(1.6rem,3.6vw,2.6rem)] font-bold tracking-[-0.03em]">
          Built from what students actually told us.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[var(--radius)] border border-border bg-card p-6">
            <p className="text-[11px] font-bold tracking-[0.16em] text-primary">THE PAIN</p>
            <h3 className="mt-2 font-semibold">Too much material, no priority</h3>
            <p className="mt-2 text-sm leading-relaxed opacity-75">
              The biggest problems students named: lecturers jumping ahead, too few examples, and not
              knowing what to prioritise before an exam.
            </p>
          </div>
          <div className="rounded-[var(--radius)] border border-border bg-card p-6">
            <p className="text-[11px] font-bold tracking-[0.16em] text-primary">THE WORKAROUND</p>
            <h3 className="mt-2 font-semibold">Ask AI, re-read notes, search YouTube</h3>
            <p className="mt-2 text-sm leading-relaxed opacity-75">
              Each one fails differently: AI is inaccurate, notes are static, YouTube can&apos;t answer a
              question about the exact part you&apos;re watching.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] opacity-55">
          Metrics &amp; vision
        </p>
        <h2 className="mt-4 text-[clamp(1.6rem,3.6vw,2.6rem)] font-bold tracking-[-0.03em]">
          What we&apos;re measuring, and where this goes.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {METRICS.map((m) => (
            <div key={m.title} className="rounded-[var(--radius)] border border-border bg-card p-6">
              <p className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-[-0.04em] text-primary">
                {m.stat}
              </p>
              <h3 className="mt-1 font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-75">{m.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-[56ch] leading-relaxed opacity-80">
          The vision: every Nigerian university course, taught in the order the exam asks for it, with a
          tutor that never wanders off the syllabus.
        </p>
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] opacity-55">
          What we offer
        </p>
        <h2 className="mt-4 text-[clamp(1.6rem,3.6vw,2.6rem)] font-bold tracking-[-0.03em]">
          Three things, done properly.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {OFFER.map((o) => (
            <div key={o.n} className="rounded-[var(--radius)] border border-border bg-card p-6">
              <p className="text-[11px] font-bold tracking-[0.16em] text-primary">{o.n}</p>
              <h3 className="mt-2 font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-75">{o.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] opacity-55">Started</p>
        <h2 className="mt-4 text-[clamp(1.6rem,3.6vw,2.6rem)] font-bold tracking-[-0.03em]">
          June 2026.
        </h2>
        <p className="mt-6 max-w-[56ch] leading-relaxed opacity-80">
          SKI began as a response to a simple survey question: what actually stops you from passing? The
          answers shaped every decision above.
        </p>
      </section>

      <footer className="border-t border-border py-10 text-xs opacity-60">
        SKI — study inside the outline.
      </footer>
    </main>
  );
}
