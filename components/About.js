import SectionTitle from "./SectionTitle";
import { about } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle subtitle="Get to know me" title="About Me" />

        <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-slate-300">
          {about.intro}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {about.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-indigo-500/50"
            >
              <div className="mb-4 text-3xl">{card.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-indigo-300">
                {card.title}
              </h3>
              <p className="leading-relaxed text-slate-400">{card.text}</p>

              {card.title === "Beyond Code" && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {about.hobbies.map((hobby) => (
                    <span
                      key={hobby}
                      className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}