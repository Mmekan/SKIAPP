import { BackButton } from "@/components/back-button";

export default function MePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-24">
      <BackButton />
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] opacity-55">Me</p>
      <h1 className="mt-4 text-3xl font-bold tracking-[-0.03em]">Profile, progress, settings.</h1>
      <p className="mt-4 max-w-[56ch] opacity-75">Coming in Phase 6.</p>
    </main>
  );
}
