import React from "react";
import SectionHeader from "./ui/SectionHeader";
import portfolio from "../data/portfolio";
import AccentButton from "@/components/ui/AccentButton";

const Research: React.FC = () => {
  const pub = portfolio.publications[0];

  return (
    <section id="research" className="py-24 border-t border-border-base">
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeader
          number="// 02"
          title="Research &"
          accent="Publications"
        />

        <div className="mt-10 bg-bg-surface border border-border-base border-l-[3px] border-l-accent rounded-sm p-8 max-w-2xl">
          {/* Venue */}
          <div className="font-mono text-[0.65rem] tracking-[0.15em] text-status-gold mb-3">
            {pub.venue.toUpperCase()} · {pub.year}
          </div>

          {/* Title */}
          <h3 className="font-display text-[1.05rem] font-medium text-text-primary leading-relaxed mb-3">
            {pub.title}
          </h3>

          {/* Authors */}
          <p className="text-sm text-text-muted italic mb-6">
            {pub.authors.map((a: string, i: number) => (
              <span
                key={a}
                className={
                  a === "Shivam Shetty"
                    ? "text-text-secondary"
                    : "text-text-faint"
                }
              >
                {a}
                {i < pub.authors.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>

          {/* Action */}
          <div>
            <AccentButton href={pub.url} external>View Paper ↗</AccentButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
