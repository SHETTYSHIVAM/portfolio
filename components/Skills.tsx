import React from "react";
import portfolio from "../data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

const Skills: React.FC = () => {
  return (
    <section className="py-24 border-t border-border-base">
      <div className="max-w-6xl mx-auto px-8">

        <SectionHeader number="// 03" title="Tech" accent="Stack" />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">

          {portfolio.skills.map((cat: any) => (
            <div
              key={cat.category}
              className="bg-bg-surface border border-border-base rounded-sm p-6"
            >
              {/* Category */}
              <div className="font-mono text-[0.62rem] tracking-[0.12em] text-accent mb-5 pb-3 border-b border-border-base">
                {cat.category.toUpperCase()}
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-3">

                {cat.items.map((item: any) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 px-3 py-2
                               border border-border-base rounded
                               text-text-secondary text-xs font-mono"
                  >
                    {item.icon ? (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-6 h-6"
                      />
                    ) : (
                      <div className="w-6 h-6 flex items-center justify-center border border-border-base rounded text-[10px] text-text-faint">
                        {item.name[0]}
                      </div>
                    )}

                    <span>{item.name}</span>
                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;