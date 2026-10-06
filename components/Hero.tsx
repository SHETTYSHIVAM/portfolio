"use client";
import React, { useEffect, useRef } from "react";
import portfolio from "../data/portfolio";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const capabilityLabels = [
  "Computer Vision",
  "Generative AI",
  "Full-Stack",
  "Edge AI",
  "Backend Systems",
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
      {/* ── Subtle grid background ─────────────────────────── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--border-base) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-base) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          opacity: 0.15,
        }}
      />
      {/* Radial vignette to fade the grid */}
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
            <div className="flex items-center gap-2 mb-4 font-mono text-[0.6rem] tracking-[0.16em] text-text-muted">
              <span
                ref={dotRef}
                className="w-1.5 h-1.5 rounded-full bg-status-green inline-block"
              />
              <span className="text-status-green">AVAILABLE FOR ROLES</span>
              <span className="text-text-muted">·</span>
              <span>UDUPI, IN</span>
            </div>

            {/* Role badge */}
            <div className="flex items-center gap-2 mb-5 font-mono text-[0.62rem] tracking-[0.2em] text-accent uppercase">
              AI/ML & Full-Stack Engineer
            </div>

            {/* Name */}
            <h1 className="font-display text-[clamp(2.8rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary mb-4">
              {portfolio.personal.name}
            </h1>

            {/* Description */}
            <p className="text-[0.95rem] text-text-secondary leading-relaxed max-w-lg mb-8">
              I build intelligent software systems — from models and data
              pipelines to APIs, web applications, and edge deployment.
            </p>

            {/* Actions */}
            <div className="flex gap-3 mb-10">
              <Link
                href="/projects"
                className="font-mono text-[0.65rem] tracking-widest px-6 py-2.5
                           bg-accent rounded text-white
                           hover:bg-accent-hover transition-colors duration-200"
              >
                View Projects
              </Link>
              <a
                href={portfolio.links.github}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[0.65rem] tracking-widest px-6 py-2.5
                           border border-border-base rounded
                           text-text-secondary
                           hover:text-text-primary hover:border-border-muted
                           transition-colors duration-200
                           flex items-center gap-2"
              >
                <FaGithub size={13} />
                GitHub
              </a>
            </div>

            {/* Capability labels */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {capabilityLabels.map((label, i) => (
                <React.Fragment key={label}>
                  <span className="font-mono text-[0.6rem] tracking-[0.08em] text-text-muted uppercase">
                    {label}
                  </span>
                  {i < capabilityLabels.length - 1 && (
                    <span className="text-border-muted text-[0.5rem]">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ── RIGHT — IMAGE ─────────────────────────────────── */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Subtle accent glow */}
              <div
                className="absolute inset-0 z-0 rounded-full scale-110"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(139,92,246,0.08) 20%, transparent 70%)",
                }}
              />

              {/* Portrait */}
              <img
                src="/shivamshetty.png"
                alt="Shivam Shetty"
                className="relative z-10 w-70 md:w-85 h-auto object-cover [html[data-theme='dark']_&]:mix-blend-luminosity"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 55%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 55%, transparent 100%)",
                  filter: "contrast(1.05) brightness(0.95)",
                }}
              />

              <p className="mt-1 text-[0.58rem] font-mono text-text-muted text-center tracking-widest">
                Udupi · AI/ML & Full-Stack
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
