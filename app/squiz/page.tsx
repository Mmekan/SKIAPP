import { BackButton } from "@/components/back-button";

export default function SQuizPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-24">
      <BackButton />
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] opacity-55">SQuiz</p>
      <h1 className="mt-4 text-3xl font-bold tracking-[-0.03em]">Past-question tests.</h1>
      <p className="mt-4 max-w-[56ch] opacity-75">
        Coming in Phase 4: pick up to two topics, then answer past questions.
      </p>
    </main>
  );
}
