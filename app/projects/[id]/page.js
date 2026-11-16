import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  return {
    title: project ? `${project.name} | Portfolio` : "Project not found",
  };
}

function ListBlock({ title, icon, items }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <h2 className="mb-4 text-xl font-semibold text-indigo-300">
        {icon} {title}
      </h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-slate-300">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-indigo-400" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function ProjectDetails({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <main className="px-4 pt-28 pb-20">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-indigo-400 transition hover:text-indigo-300"
        >
          <FaArrowLeft /> Back to Projects
        </Link>

        <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-2 text-lg text-slate-400">{project.tagline}</p>

        <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-slate-800">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            sizes="(min-width: 896px) 896px, 100vw"
            className="object-cover object-top"
          />
        </div>

        {/* Links */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400"
          >
            <FaExternalLinkAlt /> Live Project
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-indigo-500 px-6 py-3 font-semibold text-indigo-400 transition hover:bg-indigo-500/10"
          >
            <FaGithub /> GitHub (Client)
          </a>
        </div>

        {/* Description */}
        <div className="mt-10">
          <h2 className="mb-3 text-xl font-semibold text-indigo-300">
            📝 About the Project
          </h2>
          <p className="leading-relaxed text-slate-300">{project.description}</p>
        </div>

        {/* Tech stack */}
        <div className="mt-10">
          <h2 className="mb-3 text-xl font-semibold text-indigo-300">
            🛠️ Main Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges & future */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ListBlock title="Challenges Faced" icon="⚡" items={project.challenges} />
          <ListBlock title="Future Plans" icon="🚀" items={project.future} />
        </div>
      </div>
    </main>
  );
}