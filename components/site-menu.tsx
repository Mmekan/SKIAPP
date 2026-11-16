"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { STUDY_PHRASES } from "@/content/study-phrases";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Course", href: "/course" },
  { label: "SQuiz", href: "/squiz" },
  { label: "Study", href: "/study" },
  { label: "Me", href: "/me" },
];

const CLOSED = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
const OPENED = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

type Drifter = { text: string; left: number; duration: number; delay: number; tilt: number };

export function SiteMenu() {
  const [open, setOpen] = useState(false);
  const [drifters, setDrifters] = useState<Drifter[]>([]);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const firstRun = useRef(true);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    if (open) {
      setDrifters(
        [...STUDY_PHRASES]
          .sort(() => Math.random() - 0.5)
          .slice(0, 10)
          .map((text) => ({
            text,
            left: 2 + Math.random() * 76,
            duration: 14 + Math.random() * 12,
            delay: -Math.random() * 20,
            tilt: Math.random() * 8 - 4,
          })),
      );
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.style.pointerEvents = open ? "auto" : "none";
    gsap.to(el, {
      clipPath: open ? OPENED : CLOSED,
      duration: reduce ? 0.2 : 0.9,
      ease: "power4.inOut",
    });

    document.body.style.overflow = open ? "hidden" : "";

    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    if (open) el.querySelector<HTMLElement>("a")?.focus();
    else triggerRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="mt-16 flex flex-col items-center gap-4 rounded-[var(--radius)] border border-border bg-card px-6 py-12 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] opacity-55">
          Pick today&apos;s task
        </p>
        <h2 className="text-2xl font-bold tracking-tight">What are we doing today?</h2>
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:brightness-95 active:scale-[0.98]"
        >
          Open menu
        </button>
      </div>

      <div
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label="Main menu"
        style={{ clipPath: CLOSED }}
        className="pointer-events-none fixed inset-0 z-[60] flex flex-col justify-between overflow-hidden bg-[#0f1419] p-6 text-white sm:p-12"
      >
        <div className="pointer-events-none absolute inset-0">
          {drifters.map((d) => (
            <span
              key={d.text}
              className="absolute top-[-12%] whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] text-white/15 motion-reduce:bottom-0 motion-reduce:top-auto motion-reduce:opacity-20 motion-reduce:[animation:none]"
              style={{
                left: `${d.left}%`,
                animation: `ski-fall ${d.duration}s linear ${d.delay}s infinite`,
                ["--tilt" as string]: `${d.tilt}deg`,
              }}
            >
              {d.text}
            </span>
          ))}
        </div>

        <div className="relative z-10 flex items-start justify-between">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-sm font-bold uppercase tracking-[0.16em]"
          >
            SKI
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid size-11 place-items-center rounded-full border border-white/20 transition hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        <nav className="relative z-10 flex flex-col gap-1">
          {LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="w-max text-[clamp(2.2rem,7vw,4.4rem)] font-bold leading-[1.12] tracking-[-0.04em] transition hover:translate-x-2.5 hover:text-[var(--primary)]"
            >
              {link.label}
              <span className="ml-2 align-super text-[11px] font-semibold tracking-[0.2em] opacity-40">
                0{index + 1}
              </span>
            </Link>
          ))}
        </nav>

        <div className="relative z-10 flex items-end justify-between gap-5 text-xs opacity-50">
          <span>Study inside the outline.</span>
          <span>Nigeria · 2026</span>
        </div>
      </div>
    </>
  );
}
