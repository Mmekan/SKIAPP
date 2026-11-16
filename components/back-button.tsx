"use client";

import { useRouter } from "next/navigation";

export function BackButton({ label = "Back" }: { label?: string }) {
  const router = useRouter();

  // Landed here directly (no history to return to) → send them Home.
  const onClick = () => (window.history.length > 1 ? router.back() : router.push("/"));

  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] opacity-60 transition hover:opacity-100"
    >
      ← {label}
    </button>
  );
}
