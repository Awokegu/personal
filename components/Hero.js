'use client';

import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/portfolio';

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setResumeOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <p className="text-accent-light font-medium mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-accent-light" />
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
            {profile.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-500 dark:text-slate-400 mb-6">
            {profile.tagline}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-lg mb-8 leading-relaxed">{profile.bio}</p>

          <div className="flex flex-wrap gap-4 relative">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-accent hover:bg-accent-light text-white font-medium transition-colors"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 hover:border-accent text-slate-700 dark:text-slate-200 font-medium transition-colors"
            >
              Contact me
            </a>

            <div className="relative" ref={ref}>
              <button
                onClick={() => setResumeOpen(!resumeOpen)}
                type="button"
                className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 hover:border-accent text-slate-700 dark:text-slate-200 font-medium transition-colors flex items-center gap-2"
              >
                Resume
                <svg
                  className={`w-4 h-4 transition-transform ${resumeOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {resumeOpen && (
                <div className="absolute left-0 mt-2 w-44 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg overflow-hidden z-10">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    View
                  </a>
                  <a
                    href="/resume.pdf"
                    download="Your-Name-Resume.pdf"
                    className="flex items-center gap-2 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border-t border-slate-100 dark:border-slate-800"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                      />
                    </svg>
                    Download
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-5 mt-10 text-slate-500 dark:text-slate-400">
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition-colors" aria-label="GitHub">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition-colors" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z"/></svg>
            </a>
            <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition-colors" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.95 4.57a10 10 0 0 1-2.82.77 4.93 4.93 0 0 0 2.16-2.72c-.95.56-2 .96-3.12 1.19a4.92 4.92 0 0 0-8.38 4.48A13.94 13.94 0 0 1 1.64 3.16a4.9 4.9 0 0 0 1.52 6.57A4.9 4.9 0 0 1 .96 9v.06a4.93 4.93 0 0 0 3.95 4.83 4.9 4.9 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 19.54a13.94 13.94 0 0 0 7.55 2.21c9.06 0 14-7.5 14-14v-.64A9.94 9.94 0 0 0 24 4.59a9.9 9.9 0 0 1-2.05.02c.75-.44 1.32-1.14 1.6-1.98Z"/></svg>
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent to-purple-500 opacity-30 blur-2xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.photo}
              alt={profile.name}
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
