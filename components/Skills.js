import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-slate-200 dark:border-slate-900 bg-slate-50 dark:bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-12">
          <span className="text-accent font-mono text-xl">02.</span> Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <span className="text-accent-light">▹</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
