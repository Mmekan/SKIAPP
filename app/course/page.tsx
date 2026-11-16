import { BackButton } from "@/components/back-button";

export default function CoursePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-24">
      <BackButton />
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] opacity-55">Course</p>
      <h1 className="mt-4 text-3xl font-bold tracking-[-0.03em]">Pick your level and course.</h1>
      <p className="mt-4 max-w-[56ch] opacity-75">
        Coming in Phase 2: level prompt, course tree, and a primary course locked in globally.
      </p>
    </main>
  );
}
