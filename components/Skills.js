import SectionTitle from "./SectionTitle";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 border-t border-slate-800 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle subtitle="What I work with" title="My Skills" />

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-indigo-500/50"
            >
              <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold text-indigo-300">
                <span className="text-2xl">{category.icon}</span>
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
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