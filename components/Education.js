import SectionTitle from "./SectionTitle";
import Timeline from "./Timeline";
import { education, experience } from "@/data/education";

export default function Education() {
  const eduItems = education.map((e) => ({
    title: e.degree,
    place: e.institute,
    period: e.period,
    description: e.description,
  }));

  const expItems = experience.map((e) => ({
    title: e.role,
    place: e.company,
    period: e.period,
    description: e.description,
  }));

  const hasExperience = expItems.length > 0;

  return (
    <section
      id="education"
      className="scroll-mt-16 border-t border-slate-800 px-4 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          subtitle="My background"
          title={hasExperience ? "Education & Experience" : "Education"}
        />

        <div
          className={`grid gap-12 ${
            hasExperience ? "md:grid-cols-2" : "mx-auto max-w-2xl"
          }`}
        >
          <div>
            <h3 className="mb-6 text-xl font-semibold text-indigo-300">
              🎓 Education
            </h3>
            <Timeline items={eduItems} />
          </div>

          {hasExperience && (
            <div>
              <h3 className="mb-6 text-xl font-semibold text-indigo-300">
                💼 Experience
              </h3>
              <Timeline items={expItems} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}