import { Project } from "../lib/sanity/types";
import { ArrowUpRightIcon } from "./Icons";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-24 bg-stone-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600">
            Selected Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            A selection of modern web platforms, headless architectures, and scalable digital tools.
          </p>
        </div>

        {/* 3 Cards in one row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const liveUrl = project.demoUrl || project.githubUrl || "#";

            return (
              <article
                key={project._id || idx}
                className="group p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Subtle index / label */}
                  <span className="font-mono text-xs font-semibold text-slate-400">
                    0{idx + 1}
                  </span>

                  {/* Project Name */}
                  <h3 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {project.description || project.tagline}
                  </p>
                </div>

                {/* Live Link */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span>Live Preview</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </a>

                  {project.category && (
                    <span className="text-[11px] font-mono text-slate-400">
                      {project.category}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

