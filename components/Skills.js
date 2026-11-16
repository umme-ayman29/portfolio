
import SectionTitle from "./SectionTitle";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-slate-800 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          subtitle="What I work with"
          title="My Skills"
        />

        <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-7 text-slate-400 sm:text-base">
          Technologies and tools I use to build responsive, functional,
          and user-friendly web applications.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-indigo-500/60 hover:bg-slate-900 hover:shadow-xl hover:shadow-indigo-500/5"
            >
              {/* Category Heading */}
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-2xl">
                  {category.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {category.skills.length} technologies
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-slate-300">
                        {skill.name}
                      </span>

                      <span className="text-xs font-semibold tabular-nums text-indigo-300">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div
                      className="h-2 w-full overflow-hidden rounded-full bg-slate-800"
                      role="progressbar"
                      aria-label={`${skill.name} proficiency`}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-700 group-hover:brightness-125"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
