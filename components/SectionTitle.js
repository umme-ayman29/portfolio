export default function SectionTitle({ subtitle, title }) {
  return (
    <div className="mb-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
        {subtitle}
      </p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded bg-gradient-to-r from-indigo-500 to-violet-500" />
    </div>
  );
}