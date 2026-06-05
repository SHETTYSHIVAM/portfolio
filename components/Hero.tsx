"use client";
import React, { useEffect, useRef } from "react";
import portfolio from "../data/portfolio";
import Link from "next/link";
import AccentButton from "@/components/ui/AccentButton";

const heroTags = [
  "Machine Learning",
  "Computer Vision",
  "Next.js",
  "FastAPI",
  "React",
  "AI Systems",
];

const Hero: React.FC = () => {
  const dotRef = useRef<HTMLSpanElement>(null);

  // Subtle breathing animation on the status dot
  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;
    let frame: number;
    let t = 0;
    const tick = () => {
      t += 0.03;
      const s = 0.75 + 0.25 * Math.sin(t);
      dot.style.opacity = String(s);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* ── Grid background ─────────────────────────────────── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--border-base) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-base) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          opacity: 0.35,
        }}
      />
      {/* Radial vignette to dissolve the grid toward the right */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 25% 50%, transparent 40%, var(--bg-base) 100%)",
        }}
      />

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* ── LEFT ──────────────────────────────────────────── */}
          <div>
            {/* Availability status */}
            <div className="flex items-center gap-2 mb-3 font-mono text-[0.6rem] tracking-[0.16em] text-text-muted">
              <span
                ref={dotRef}
                className="w-1.25 h-1.25 rounded-full bg-status-green inline-block"
              />
              <span className="text-status-green">AVAILABLE FOR ROLES</span>
              <span className="text-text-faint">·</span>
              <span>UDUPI, IN</span>
            </div>

            {/* Role badge */}
            <div className="flex items-center gap-2 mb-5 font-mono text-[0.62rem] tracking-[0.2em] text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block animate-pulse" />
              AI-ML / FULL STACK ENGINEER
            </div>

            {/* Name */}
            <h1 className="font-display text-[clamp(2.8rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary mb-2">
              {portfolio.personal.name}
            </h1>

            {/* Accent underline */}
            <div className="w-14 h-0.75 bg-accent rounded mb-6" />

            {/* Code comment */}
            <p className="font-mono text-[0.65rem] text-text-faint tracking-[0.02em] mb-4">
              // building intelligent systems at the intersection of ML &amp;
              full stack development
            </p>

            {/* Description */}
            <p className="text-[0.95rem] text-text-secondary leading-relaxed max-w-md mb-8">
              {portfolio.personal.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.6rem] tracking-wide px-3 py-1.25
                             border border-border-muted rounded
                             text-text-muted
                             hover:border-accent hover:text-accent
                             transition-colors duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <AccentButton href="/about#resume-request-section">Download Resume →</AccentButton>
              <Link
                href="/contact"
                className="font-mono text-[0.65rem] tracking-widest px-6 py-2.5
             border border-border-muted rounded
             text-text-secondary
             hover:text-text-primary hover:border-border-muted
             transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* ── RIGHT — IMAGE ─────────────────────────────────── */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Blue accent glow (replaces the flat bg glow) */}
              <div
                className="absolute inset-0 z-0 rounded-full scale-110"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(37,99,235,0.12) 20%, transparent 70%)",
                }}
              />

              {/* Portrait */}
              <img
                src="/shivamshetty.png"
                alt="Shivam Shetty"
                className="relative z-10 w-70 md:w-85 h-auto object-cover"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 55%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 55%, transparent 100%)",
                  mixBlendMode: "luminosity",
                  filter: "contrast(1.05) brightness(0.92)",
                }}
              />

              <p className="mt-1 text-[0.58rem] font-mono text-text-faint text-center tracking-widest">
                Udupi · AI/ML Systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
