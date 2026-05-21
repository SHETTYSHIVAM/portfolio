import { projects } from "@/data/projects";
import Link from "next/link";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetail({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-xs tracking-wider text-muted bg-base">
        [SYSTEM_ERROR]: Project signature not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-6 bg-base text-primary">
      <div className="max-w-4xl mx-auto">
        {/* Navigation / Return Link */}
        <Link
          href="/projects"
          className="mb-10 text-xs font-mono tracking-widest text-muted hover:text-accent transition-colors duration-200 flex items-center gap-2 uppercase"
        >
          &larr; return to matrix
        </Link>

        {/* Header Block */}
        <div className="mb-12">
          <p className="text-[10px] tracking-[0.2em] text-accent mb-3 font-mono uppercase">
            // {project.badge}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold font-display text-primary mb-4 tracking-tight">
            {project.title}
          </h1>

          <p className="text-secondary text-sm leading-relaxed max-w-2xl font-sans">
            {project.tagline}
          </p>

          {/* Action Call-To-Actions */}
          <div className="flex flex-wrap gap-3 mt-8 mb-8">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono font-semibold px-5 py-2.5 bg-accent text-bg-base rounded hover:bg-accent-hover transition-colors duration-200"
              >
                Codebase // GitHub ↗
              </a>
            )}

            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono px-5 py-2.5 border border-base text-secondary rounded hover:border-muted hover:text-primary transition-colors duration-200 bg-overlay"
              >
                Live Deployment ↗
              </a>
            )}
          </div>

          {/* Dependencies / Technology Matrix */}
          <div className="flex flex-wrap gap-1.5 border-b border-base pb-10">
            {project.techStack.map((tech: string) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2.5 py-0.5 bg-utility/10 border border-utility/20 text-secondary rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic Project Breakdown Layout */}
        {[
          { label: "Overview", content: project.overview },
          { label: "Problem", content: project.problem },
        ].map((section) => (
          <div key={section.label} className="mb-12">
            <h2 className="text-[11px] tracking-[0.18em] text-utility mb-3 font-mono uppercase">
              {section.label}
            </h2>
            <p className="text-secondary text-sm leading-relaxed font-sans">
              {section.content}
            </p>
          </div>
        ))}

        {/* Multi-source Dataset Console */}
        {(project.dataset.name ||
          project.dataset.size ||
          project.dataset.source ||
          project.dataset.preprocessing.length > 0) && (
          <div className="mb-12">
            <h2 className="text-[11px] tracking-[0.18em] text-utility mb-3 font-mono uppercase">
              Dataset Context
            </h2>

            <div className="bg-surface border border-base rounded-md p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
                {[
                  ["Name", project.dataset.name],
                  ["Metadata Matrix Size", project.dataset.size],
                  ["Telemetry Source", project.dataset.source],
                ]
                  .filter(([_, value]) => value)
                  .map(([label, value]) => (
                    <div key={label}>
                      <p className="text-[10px] text-muted font-mono tracking-wider uppercase mb-1">
                        {label}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        {value}
                      </p>
                    </div>
                  ))}
              </div>

              {project.dataset.preprocessing.length > 0 && (
                <div className="border-t border-base pt-4 mt-4">
                  <p className="text-[10px] text-muted font-mono tracking-wider uppercase mb-3">
                    Pipeline Preprocessing Steps
                  </p>
                  <ul className="space-y-2">
                    {project.dataset.preprocessing.map((step: string) => (
                      <li
                        key={step}
                        className="text-xs font-mono text-secondary flex gap-2 items-start"
                      >
                        <span className="text-accent">&raquo;</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Architecture / Technical Foundation */}
        {(project.architecture.model ||
          project.architecture.keyComponents.length > 0) && (
          <div className="mb-12">
            <h2 className="text-[11px] tracking-[0.18em] text-utility mb-3 font-mono uppercase">
              Architecture &amp; Technical Foundation
            </h2>

            <div className="bg-surface border border-base rounded-md p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {project.architecture.model && (
                  <div>
                    <p className="text-[10px] text-muted font-mono tracking-wider uppercase mb-1">
                      {project.categories.includes("Computer Vision") ||
                      project.categories.includes("ML Systems")
                        ? "Model Architecture"
                        : "Core Pattern"}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      {project.architecture.model}
                    </p>
                  </div>
                )}
                <div>
                  <p className="text-[10px] text-muted font-mono tracking-wider uppercase mb-1">
                    Technology Stack
                  </p>
                  <p className="text-sm font-medium text-primary">
                    {project.architecture.framework}
                  </p>
                </div>
              </div>

              {project.architecture.keyComponents.length > 0 && (
                <>
                  <p className="text-[10px] text-muted font-mono tracking-wider uppercase mb-3">
                    Key Components
                  </p>
                  <ul className="space-y-2">
                    {project.architecture.keyComponents.map(
                      (component: string) => (
                        <li
                          key={component}
                          className="text-xs font-mono text-secondary flex gap-2 items-start"
                        >
                          <span className="text-accent">&bull;</span>
                          <span>{component}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </>
              )}
            </div>
          </div>
        )}

        {/* Workflow / Process Pipeline */}
        {project.pipeline.length > 0 && (
          <div className="mb-12">
            <h2 className="text-[11px] tracking-[0.18em] text-utility mb-4 font-mono uppercase">
              {project.categories.includes("Computer Vision") ||
              project.categories.includes("Predictive Modeling")
                ? "ML Pipeline"
                : "System Workflow"}
            </h2>

            <div className="border-l-2 border-accent pl-8 space-y-8 ml-4">
              {project.pipeline.map((step: any) => (
                <div key={step.step} className="relative">
                  <div className="absolute -left-11 translate-x-1/2 top-0.5 w-7 h-7 flex items-center justify-center border-2 border-accent rounded-full text-[10px] font-mono text-accent bg-base z-10">
                    {String(step.step).padStart(2, "0")}
                  </div>

                  <p className="text-primary text-sm font-semibold font-display mb-1">
                    {step.name}
                  </p>
                  <p className="text-secondary text-xs leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results &amp; Outcomes */}
        {project.results.metrics.length > 0 && (
          <div className="mb-12">
            <h2 className="text-[11px] tracking-[0.18em] text-utility mb-3 font-mono uppercase">
              Results &amp; Outcomes
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {project.results.metrics.map((metric: any) => (
                <div
                  key={metric.name}
                  className="bg-surface border border-base rounded-md p-4 text-center"
                >
                  <p className="text-2xl font-bold font-mono text-accent">
                    {metric.value}
                  </p>
                  <p className="text-[10px] font-mono text-muted tracking-wider uppercase mt-1.5">
                    {metric.name}
                  </p>
                </div>
              ))}
            </div>

            <ul className="space-y-2.5">
              {project.results.highlights.map((highlight: string) => (
                <li
                  key={highlight}
                  className="text-xs font-sans text-secondary flex gap-2.5 items-start"
                >
                  <span className="text-status-green font-mono font-bold">
                    ✓
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
