
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import { profile } from "@/data/profile";

const socialList = [
  { icon: FaGithub, href: profile.socials.github, label: "GitHub" },
  { icon: FaLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: FaFacebook, href: profile.socials.facebook, label: "Facebook" },
];

const techTags = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-16 items-center overflow-hidden px-4 pb-16 pt-28"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 -top-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-32 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <div className="text-center md:text-left">

          {/* Availability */}
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Open to Work
          </span>

          <p className="mt-7 text-lg font-medium text-indigo-400">
            Hello, I&apos;m
          </p>

          {/* Name */}
          <h1 className="mt-2 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          {/* Profession */}
          <h2 className="mt-4 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
            {profile.title}
          </h2>

          {/* Introduction */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 md:mx-0">
            {profile.intro}
          </p>

          {/* Technologies */}
          <div className="mt-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Technologies I Work With
            </p>

            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-indigo-400 hover:text-indigo-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-1 hover:bg-indigo-400"
            >
              <FaDownload />
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-indigo-500/60 px-6 py-3.5 font-semibold text-indigo-300 transition duration-300 hover:-translate-y-1 hover:bg-indigo-500/10"
            >
              Contact Me
              <FaArrowRight className="text-sm" />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-9 flex justify-center gap-4 md:justify-start">
            {socialList.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-full border border-slate-700 bg-slate-900/70 p-3 text-xl text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-400"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="relative mx-auto flex justify-center">

          {/* Glow */}
          <div className="absolute h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96" />

          {/* Decorative Ring */}
          <div className="absolute h-64 w-64 rounded-full border border-indigo-500/20 sm:h-80 sm:w-80 lg:h-96 lg:w-96" />

          {/* Profile */}
          <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-indigo-500/80 shadow-2xl shadow-indigo-500/30 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
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
