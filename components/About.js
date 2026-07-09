import { about } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-slate-200 dark:border-slate-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <span className="text-accent font-mono text-xl">01.</span> About Me
          </h2>
        </div>
        <div className="md:col-span-2 space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <ul className="grid grid-cols-2 gap-2 pt-4 text-sm text-slate-600 dark:text-slate-400 font-mono">
            {about.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-accent-light">▹</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
