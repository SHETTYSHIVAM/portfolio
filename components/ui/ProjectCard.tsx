import Link from "next/link";

interface ProjectProps {
  slug: string;
  badge: string;
  title: string;
  tagline: string;
  techStack: string[];
  categories?: string[];
}

interface ProjectCardProps {
  project: ProjectProps;
}

/**
 * Returns a subtle category-based accent for project badges.
 * AI projects get purple accent, full-stack/systems get cyan.
 */
function getBadgeColor(badge: string): string {
  const lower = badge.toLowerCase();
  if (
    lower.includes("full-stack") ||
    lower.includes("full stack") ||
    lower.includes("web") ||
    lower.includes("users")
  ) {
    return "text-utility";
  }
  if (lower.includes("edge") || lower.includes("iot") || lower.includes("embedded")) {
    return "text-utility";
  }
  // Default: AI/ML related → accent (purple)
  return "text-accent";
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const badgeColor = getBadgeColor(project.badge);

  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <div
        className="
          relative overflow-hidden
          bg-bg-surface border border-border-base rounded-md
          p-7 cursor-pointer
          shadow-sm
          transition-all duration-200
          group-hover:border-border-muted
          group-hover:shadow-md
          group-hover:shadow-accent/5
        "
      >
        {/* Top accent line on hover */}
        <div
          className="
            absolute top-0 left-0 right-0 h-px
            bg-gradient-to-r from-accent via-accent/50 to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
        />

        {/* Badge */}
        <p
          className={`
            font-mono text-[10px] tracking-[0.12em] uppercase
            ${badgeColor} mb-3
          `}
        >
          {project.badge}
        </p>

        {/* Title */}
        <h3
          className="
            font-display text-sm font-semibold
            text-text-primary mb-2 leading-snug
          "
        >
          {project.title}
        </h3>

        {/* Tagline */}
        <p
          className="
            font-sans text-[13px] text-text-secondary
            leading-relaxed mb-5
          "
        >
          {project.tagline}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5 items-center">
          {project.techStack.slice(0, 4).map((tech: string) => (
            <span
              key={tech}
              className="
                font-mono text-[10px]
                px-2 py-0.5 rounded
                bg-utility/10 border border-utility/20
                text-text-secondary
              "
            >
              {tech}
            </span>
          ))}

          {project.techStack.length > 4 && (
            <span className="font-mono text-[10px] text-text-muted ml-0.5">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* CTA */}
        <p
          className="
            font-mono text-[11px] font-medium
            text-accent tracking-wide
            transition-transform duration-200 ease-out
            group-hover:translate-x-1 inline-block
          "
        >
          View case study &rarr;
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;