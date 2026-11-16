import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";

// Contact বানানো হলে এই অস্থায়ী ব্লক সরিয়ে আসল কম্পোনেন্ট বসবে
function ComingSoon({ id, title, subtitle }) {
  return (
    <section
      id={id}
      className="scroll-mt-16 border-t border-slate-800 px-4 py-24"
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
          {subtitle}
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded bg-gradient-to-r from-indigo-500 to-violet-500" />
        <p className="mt-10 rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 px-6 py-16 text-slate-400">
          This section is coming soon.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <ComingSoon id="contact" title="Contact Me" subtitle="Get in touch" />
    </main>
  );
}