import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent mb-2">
            /projects
          </p>

          <h1 className="
            font-display
            text-[clamp(2rem,4vw,2.8rem)]
            font-bold
            tracking-tight
            text-text-primary
          ">
            All <span className="text-accent">Projects</span>
          </h1>
        </div>

        {/* Grid */}
        <div className="
          grid
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-5
        ">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectsPage;