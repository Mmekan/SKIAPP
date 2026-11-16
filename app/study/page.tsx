import { BackButton } from "@/components/back-button";

export default function StudyPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-24">
      <BackButton />
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] opacity-55">Study</p>
      <h1 className="mt-4 text-3xl font-bold tracking-[-0.03em]">Watch, pause, ask.</h1>
      <p className="mt-4 max-w-[56ch] opacity-75">
        Coming in Phase 5: segmented video lessons, in-video questions, and the three quiz layers.
      </p>
    </main>
  );
}
