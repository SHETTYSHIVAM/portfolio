import Link from "next/link";

interface ProjectProps {
  slug: string;
  badge: string;
  title: string;
  tagline: string;
  techStack: string[];
}

interface ProjectCardProps {
  project: ProjectProps;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <div
        className="
          relative overflow-hidden
          bg-surface border border-base rounded-md
          p-7 cursor-pointer
          transition-colors duration-200
          group-hover:border-muted
        "
      >
        {/* Top accent matrix line */}
        <div
          className="
            absolute top-0 left-0 right-0 h-0.5
            bg-linear-to-r from-accent to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200
          "
        />

        {/* System Badge Tag */}
        <p
          className="
            font-mono text-[10px] tracking-[0.12em] uppercase
            text-accent mb-3
          "
        >
          {project.badge}
        </p>

        {/* Section Heading */}
        <h3
          className="
            font-display text-sm font-semibold
            text-primary mb-2 leading-snug
          "
        >
          {project.title}
        </h3>

        {/* Project Description Block */}
        <p
          className="
            font-sans text-[13px] text-secondary
            leading-relaxed mb-5
          "
        >
          {project.tagline}
        </p>

        {/* Technical Dependencies Matrix */}
        <div className="flex flex-wrap gap-1.5 mb-5 items-center">
          {project.techStack.slice(0, 4).map((tech: string) => (
            <span
              key={tech}
              className="
                font-mono text-[10px]
                px-2 py-0.5 rounded
                bg-utility/10 border border-utility/20
                text-secondary
              "
            >
              {tech}
            </span>
          ))}

          {project.techStack.length > 4 && (
            <span className="font-mono text-[10px] text-faint ml-0.5">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Call To Action Indicator */}
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