import React from "react";
import portfolio from "../data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

/**
 * Returns a category-appropriate accent color class.
 * AI/ML categories get purple, engineering categories get cyan.
 */
function getCategoryAccent(category: string): string {
  const lower = category.toLowerCase();
  if (lower.includes("ai") || lower.includes("machine learning") || lower.includes("data")) {
    return "text-accent";
  }
  return "text-utility";
}

const Skills: React.FC = () => {
  return (
    <section className="py-24 border-t border-border-base">
      <div className="max-w-6xl mx-auto px-8">

        <SectionHeader number="// 03" title="Tech" accent="Stack" />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {portfolio.skills.map((cat: any) => {
            const categoryColor = getCategoryAccent(cat.category);

            return (
              <div
                key={cat.category}
                className="bg-bg-surface border border-border-base rounded-md p-6 shadow-sm
                           hover:border-border-muted transition-colors duration-200"
              >
                {/* Category */}
                <div className={`font-mono text-[0.62rem] tracking-[0.12em] ${categoryColor} mb-5 pb-3 border-b border-border-base`}>
                  {cat.category.toUpperCase()}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item: any) => (
                    <div
                      key={item.name}
                      className="inline-flex items-center gap-2 px-2.5 py-1.5
                                 border border-border-base rounded bg-bg-base/40
                                 text-text-secondary text-[11px] font-mono
                                 hover:border-border-muted hover:text-text-primary hover:bg-bg-base/70
                                 transition-colors duration-200"
                    >
                      {item.icon ? (
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-4 h-4 shrink-0 object-contain"
                        />
                      ) : (
                        <div className="w-4 h-4 shrink-0 flex items-center justify-center border border-border-base rounded text-[8px] text-text-muted">
                          {item.name[0]}
                        </div>
                      )}

                      <span className="whitespace-nowrap">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Skills;