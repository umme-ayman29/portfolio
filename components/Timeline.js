export default function Timeline({ items }) {
  return (
    <div className="relative space-y-6 border-l-2 border-slate-800 pl-8">
      {items.map((item) => {
        const isCurrent = item.period.toLowerCase().includes("present");

        return (
          <div key={item.title + item.period} className="relative">
            {/* Dot */}
            <span
              className={`absolute -left-[41px] top-6 h-4 w-4 rounded-full border-4 border-slate-950 ${
                isCurrent
                  ? "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]"
                  : "bg-indigo-500"
              }`}
            />

            {/* Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-indigo-500/50">
              <span
                className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${
                  isCurrent
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                    : "border-indigo-500/30 bg-indigo-500/10 text-indigo-300"
                }`}
              >
                {item.period}
              </span>

              <h3 className="mt-3 text-xl font-semibold text-slate-100">
                {item.title}
              </h3>
              <p className="mt-1 font-medium text-indigo-300">{item.place}</p>

              {item.description && (
                <p className="mt-3 leading-relaxed text-slate-400">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}