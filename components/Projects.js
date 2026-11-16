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
        <SectionTitle subtitle="What I have built" title="My Projects" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition hover:-translate-y-1 hover:border-indigo-500/50"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-slate-100">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-400">
                  {project.tagline}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.id}`}
                  className="mt-6 inline-block rounded-lg bg-indigo-500 px-5 py-2.5 text-center font-semibold text-white transition hover:bg-indigo-400"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}