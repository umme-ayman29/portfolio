

import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 border-t border-slate-800 px-4 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          subtitle="What I have built"
          title="My Projects"
        />

        <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
          Here are some of the projects I have built using
          modern web technologies, focusing on clean design,
          functionality, and real-world problem solving.
        </p>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition duration-300 hover:-translate-y-2 hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>

              {/* Project Information */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-slate-100 transition group-hover:text-indigo-300">
                  {project.name}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-relaxed text-slate-400">
                  {project.tagline}
                </p>

                {/* Tech Stack */}
                <div className="mt-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Technologies Used
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-xs text-indigo-300 transition hover:border-indigo-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg bg-indigo-500 px-3 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-indigo-400"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg border border-slate-700 px-3 py-2.5 text-center text-sm font-semibold text-slate-200 transition hover:border-indigo-400 hover:bg-indigo-500/10"
                  >
                    GitHub ↗
                  </a>
                </div>

                {/* Details Button */}
                <Link
                  href={`/projects/${project.id}`}
                  className="mt-3 block rounded-lg border border-slate-700 px-4 py-2.5 text-center text-sm font-medium text-slate-300 transition hover:border-indigo-500 hover:text-indigo-300"
                >
                  Explore Project Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
