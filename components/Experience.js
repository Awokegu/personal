import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-slate-200 dark:border-slate-900 bg-slate-50 dark:bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-12">
          <span className="text-accent font-mono text-xl">04.</span> Experience
        </h2>

        <div className="relative border-l border-slate-300 dark:border-slate-800 ml-3 space-y-12">
          {experience.map((job) => (
            <div key={job.role + job.company} className="relative pl-8">
              <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-slate-50 dark:ring-slate-950" />
              <p className="text-sm text-accent font-mono mb-1">{job.period}</p>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {job.role} · {job.company}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
