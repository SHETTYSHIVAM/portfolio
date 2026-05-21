import { projects } from "../data/projects";
import Link from "next/link";
import SectionLabel from "./ui/SectionLabel";
import ProjectCard from "./ui/ProjectCard";

const featuredProjects = projects.filter((p: any) => p.featured);

const FeaturedProjects = () => {
  return (
    <section className="py-24 border-t border-border-base">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <SectionLabel number="// 04" />

            <h2
              className="
              font-display
              text-[clamp(1.6rem,3vw,2.2rem)]
              font-semibold
              text-text-primary
              tracking-tight
            "
            >
              Featured <span className="text-accent">Projects</span>
            </h2>
          </div>

          <Link
            href="/projects"
            className="
              font-mono text-xs tracking-wide
              text-accent
              hover:text-accent-hover
              transition-colors
            "
          >
            All projects →
          </Link>
        </div>

        {/* Grid */}
        <div
          className="
          grid grid-cols-1 md:grid-cols-2
          gap-5
        "
        >
          {featuredProjects.map((p: any) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
