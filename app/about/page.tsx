import { FaGithub } from "react-icons/fa";
import portfolio from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import ResumeFormClient from "@/components/ResumeForm";

const About = () => {
  return (
    <main className="min-h-screen px-6 py-24 max-w-6xl mx-auto">
      {/* ── HEADER ───────────────────────── */}
      <div className="mb-20 pb-12 border-b border-border-base">
        <p className="font-mono text-[11px] tracking-[0.25em] text-text-faint mb-3">
          // about
        </p>

        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
          {portfolio.personal.name}
        </h1>

        <p className="text-sm text-accent font-mono tracking-widest mb-6">
          {portfolio.personal.title}
        </p>

        <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
          {portfolio.personal.description}
        </p>

        {/* Actions Row */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          {/* Social Links */}
          <div className="flex items-center gap-5 text-xs font-mono">
            <a
              href={portfolio.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-text-muted hover:text-text-primary transition"
            >
              <FaGithub size={14} /> GitHub
            </a>

            <a
              href={portfolio.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-text-muted hover:text-text-primary transition"
            >
              LinkedIn
            </a>

            <a
              href={portfolio.links.googleScholar}
              target="_blank"
              rel="noreferrer"
              className="text-text-muted hover:text-text-primary transition"
            >
              Scholar
            </a>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-4 w-px bg-border-base mx-2" />

          {/* Resume Anchor CTA */}
          <a
            href="#resume-request-section"
            className="
              inline-flex items-center gap-2
              px-4 py-2
              text-xs font-mono tracking-wide
              bg-accent text-white
              rounded-md
              hover:bg-accent-hover
              transition-colors
            "
          >
            Download Resume ↓
          </a>
        </div>
      </div>

      {/* ── BODY ───────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-16">
        {/* ── LEFT COLUMN ────────────────────────────────── */}
        <div className="flex flex-col gap-14">
          {/* Approach */}
          <div>
            <SectionHeader number="// 01" title="Approach" />
            <div className="border border-border-base bg-bg-surface rounded p-5 space-y-3">
              <p className="text-sm text-text-secondary leading-relaxed">
                I focus on building{" "}
                <span className="text-text-primary">end-to-end AI systems</span>
                , not just models. My work prioritises real-world constraints —
                latency, scalability, and deployment — over isolated benchmark
                performance.
              </p>
              <ul className="text-sm text-text-muted space-y-1">
                <li>• Data → Model → API → Deployment pipelines</li>
                <li>• Edge + real-time inference systems</li>
                <li>• Production-first engineering mindset</li>
              </ul>
            </div>
          </div>

          {/* Current Work */}
          <div>
            <SectionHeader number="// 02" title="Currently Building" />
            <div className="space-y-3">
              {[
                "Generative AI apps with Langchain",
                "Edge ML deployment on ESP32 (TinyML)",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-border-base bg-bg-surface rounded px-4 py-3
                       text-sm text-text-secondary hover:border-border-muted transition-colors"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <SectionHeader number="// 03" title="Education" />
            <div className="border border-border-base bg-bg-surface rounded p-4 border-l-2 border-l-accent">
              <p className="font-mono text-[0.65rem] text-text-faint tracking-widest mb-1">
                {portfolio.education.duration}
              </p>
              <p className="text-sm text-text-primary font-medium">
                {portfolio.education.degree}
              </p>
              <p className="text-sm text-text-secondary">
                {portfolio.education.institution}
              </p>
              <p className="text-xs text-text-faint mt-1">
                {portfolio.education.location}
              </p>
            </div>
          </div>

          {/* Publications */}
          <div>
            <SectionHeader number="// 04" title="Research" />
            <div className="space-y-4">
              {portfolio.publications.map((pub) => (
                <div
                  key={pub.id}
                  className="border border-border-base bg-bg-surface rounded p-4
                       hover:border-border-muted transition-colors"
                >
                  <p className="font-mono text-[0.6rem] text-status-gold tracking-widest mb-1">
                    {pub.venue.toUpperCase()} · {pub.year}
                  </p>
                  <p className="text-sm text-text-primary mb-2 leading-relaxed">
                    {pub.title}
                  </p>
                  <p className="text-xs text-text-faint mb-3">
                    {pub.authors.join(", ")}
                  </p>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[0.65rem] text-accent hover:text-accent-hover"
                  >
                    View paper →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ───────────────────────────────── */}
        <div className="flex flex-col gap-14">

          {/* Roles */}
          <div>
            <SectionHeader number="// 05" title="Roles & Involvement" />
            <div className="space-y-3">
              {portfolio.about.roles.map((role) => (
                <div
                  key={role.id}
                  className="border border-border-base bg-bg-surface rounded p-4"
                >
                  <p className="font-mono text-[0.6rem] text-accent tracking-widest mb-1">
                    {role.category.toUpperCase()}
                  </p>
                  <p className="text-sm text-text-primary font-medium">
                    {role.title}
                  </p>
                  <p className="text-xs text-text-secondary mb-1">
                    {role.organization}
                  </p>
                  <p className="text-xs text-text-muted">{role.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Timeline */}
          <div>
            <SectionHeader number="// 06" title="Highlights" />
            <div className="relative pl-5">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-border-base" />

              {portfolio.achievements.map((a) => (
                <div key={a.id} className="relative mb-6">
                  <div className="absolute -left-2.25 top-1 w-2 h-2 rotate-45 bg-bg-base border border-border-muted" />

                  <p className="font-mono text-[0.6rem] text-text-faint mb-1">
                    {a.year}
                  </p>
                  <p className="text-sm text-text-primary font-medium">
                    {a.title}
                  </p>
                  <p className="text-xs text-text-muted mb-1">
                    {a.organization}
                  </p>
                  <span className="font-mono text-[0.6rem] text-accent">
                    {a.place}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CLIENT RESEND FORM CONTAINER ───────────────────── */}
      <div
        id="resume-request-section"
        className="mt-20 pt-12 border-t border-border-base scroll-mt-24"
      >
        <SectionHeader number="// 08" title="Request Access to Resume" />
        <ResumeFormClient />
      </div>
    </main>
  );
};

export default About;