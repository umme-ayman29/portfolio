import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from "react-icons/fa";
import { profile } from "@/data/profile";

const socialList = [
  { icon: FaGithub, href: profile.socials.github, label: "GitHub" },
  { icon: FaLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: FaFacebook, href: profile.socials.facebook, label: "Facebook" },
];

const techTags = ["React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-16 items-center overflow-hidden px-4 pt-24 pb-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-10 md:flex-row md:justify-between md:gap-12">
        {/* Text */}
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Open to work
          </span>

          <p className="mt-6 mb-2 text-lg text-indigo-400">Hello, I&apos;m</p>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <h2 className="mt-3 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-xl font-semibold text-transparent sm:text-3xl">
            {profile.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-400 md:mx-0">
            {profile.intro}
          </p>

          {/* Tech tags */}
          <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-400"
            >
              <FaDownload /> Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-indigo-500 px-6 py-3 font-semibold text-indigo-400 transition hover:-translate-y-0.5 hover:bg-indigo-500/10"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex justify-center gap-4 md:justify-start">
            {socialList.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-full border border-slate-700 p-3 text-xl text-slate-300 transition hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-400"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="relative shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 opacity-40 blur-2xl" />
          <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-indigo-500 shadow-2xl shadow-indigo-500/30 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 224px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}