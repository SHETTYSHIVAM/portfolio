import Image from "next/image";
import Link from "next/link";
import portfolio from "@/data/portfolio";
import { projects } from "@/data/projects";

const relatedProjectIds: Record<string, string> = {
  "monaithon-2025": "medical-image-segmentation",
  "hackyugma-2025": "ar-car-visualization",
};

const placeStyles: Record<string, string> = {
  "1st": "text-status-gold border-status-gold/30 bg-status-gold/10",
  "2nd": "text-status-gold border-status-gold/30 bg-status-gold/10",
  "3rd": "text-status-gold border-status-gold/30 bg-status-gold/10",
  Best: "text-accent border-accent/30 bg-accent/10",
  "Top 15": "text-utility border-utility/30 bg-utility/10",
  "Honorary Mention": "text-utility border-utility/30 bg-utility/10",
};

export const metadata = {
  title: "Achievements | Shivam Shetty",
  description:
    "Awards, hackathon wins, competitions, and project recognitions earned by Shivam Shetty.",
};

export default function AchievementsPage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const firstPlaceCount = portfolio.achievements.filter(
    (achievement) => achievement.place === "1st",
  ).length;

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14 max-w-3xl">
          <p className="mb-3 font-mono text-[11px] tracking-[0.25em] text-text-faint">
            {"// achievements"}
          </p>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold tracking-tight text-text-primary">
            Proof of <span className="text-accent">building</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-text-secondary">
            A record of competitions, recognitions, and shipped work — from
            medical imaging systems to augmented reality experiences.
          </p>
        </header>

        <div className="mb-14 grid grid-cols-2 gap-px overflow-hidden border border-border-base bg-border-base sm:grid-cols-4">
          <div className="bg-bg-surface p-5">
            <p className="font-mono text-2xl text-accent">{portfolio.achievements.length}</p>
            <p className="mt-2 text-xs text-text-muted">Recognitions</p>
          </div>
          <div className="bg-bg-surface p-5">
            <p className="font-mono text-2xl text-status-gold">{firstPlaceCount}</p>
            <p className="mt-2 text-xs text-text-muted">First-place wins</p>
          </div>
          <div className="bg-bg-surface p-5">
            <p className="font-mono text-2xl text-utility">{featuredProjects.length}</p>
            <p className="mt-2 text-xs text-text-muted">Featured projects</p>
          </div>
          <div className="bg-bg-surface p-5">
            <p className="font-mono text-2xl text-text-primary">2024–26</p>
            <p className="mt-2 text-xs text-text-muted">Active timeline</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {portfolio.achievements.map((achievement) => {
            const relatedProject = projects.find(
              (project) => project.id === relatedProjectIds[achievement.id],
            );

            return (
              <article
                key={achievement.id}
                className="group overflow-hidden border border-border-base bg-bg-surface transition-colors duration-200 hover:border-border-muted"
              >
                <a
                  href={achievement.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View certificate for ${achievement.title}`}
                  className="relative block aspect-[16/10] overflow-hidden border-b border-border-base bg-bg-overlay"
                >
                  <Image
                    src={achievement.certificateUrl}
                    alt={`${achievement.title} certificate`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute right-4 top-4 bg-bg-base/85 px-2 py-1 font-mono text-[10px] tracking-widest text-text-secondary backdrop-blur-sm">
                    VIEW ↗
                  </span>
                </a>

                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-text-faint">
                      {achievement.year}
                    </span>
                    <span
                      className={`border px-2 py-1 font-mono text-[10px] tracking-widest ${
                        placeStyles[achievement.place] ?? placeStyles["Top 15"]
                      }`}
                    >
                      {achievement.place.toUpperCase()}
                    </span>
                  </div>

                  <h2 className="font-display text-lg font-semibold leading-snug text-text-primary">
                    {achievement.title}
                  </h2>
                  <p className="mt-2 text-sm text-text-secondary">
                    {achievement.organization}
                  </p>
                  {achievement.description && (
                    <p className="mt-4 text-sm leading-relaxed text-text-muted">
                      {achievement.description}
                    </p>
                  )}

                  {relatedProject && (
                    <Link
                      href={`/projects/${relatedProject.slug}`}
                      className="mt-5 inline-flex font-mono text-[11px] tracking-wide text-accent transition-colors hover:text-accent-hover"
                    >
                      Related build: {relatedProject.shortTitle} →
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
