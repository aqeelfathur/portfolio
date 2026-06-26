import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "./portfolioData";

export default function ProjectSection() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
          Featured projects
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Case studies, not just thumbnails.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
          These projects show the range Aqeel wants to be hired for: web system
          implementation, API-heavy workflows, Scrum coordination, and AI-assisted
          product development.
        </p>
      </div>

      <div className="grid gap-5">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-lg border border-white/10 bg-slate-950/45 shadow-xl shadow-black/15"
          >
            <div className="grid gap-0 lg:grid-cols-[0.42fr_0.58fr]">
              <div className="relative min-h-64 border-b border-white/10 bg-gradient-to-br from-purple-800/35 via-slate-950 to-blue-950/40 lg:border-b-0 lg:border-r">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(min-width: 1024px) 36vw, 100vw"
                    className="object-cover opacity-90"
                  />
                ) : (
                  <div className="flex h-full min-h-64 flex-col justify-between p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-200">
                      Case {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <p className="text-4xl font-bold text-white">{project.title}</p>
                      <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
                        {project.role} · {project.period}
                      </p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">
                  <p className="text-sm font-semibold text-blue-100">
                    {project.role} · {project.period}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
                      {project.description}
                    </p>
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition hover:border-blue-300/50 hover:bg-blue-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      GitHub
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-purple-300/20 bg-purple-300/10 px-3 py-1.5 text-xs font-semibold text-purple-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 grid gap-6 xl:grid-cols-[1fr_0.8fr]">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-400">
                      Contribution
                    </h4>
                    <ul className="mt-3 grid gap-3">
                      {project.contributions.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-md border border-blue-300/20 bg-blue-300/10 p-4">
                    <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-blue-100">
                      Outcome
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-slate-200">{project.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
