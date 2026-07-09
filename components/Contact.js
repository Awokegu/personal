'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  }

  return (
    <section id="contact" className="py-24 border-t border-slate-200 dark:border-slate-900">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-3 mb-4">
          <span className="text-accent font-mono text-xl">05.</span> Get In Touch
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12">
          I'm currently open to new opportunities. Whether you have a question, a project in mind, or just want to
          say hi — my inbox is always open.
        </p>

        {status === 'success' && (
          <div className="mb-8 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 px-4 py-3 text-sm">
            Thanks for reaching out! I'll get back to you soon.
          </div>
        )}
        {status === 'error' && (
          <div className="mb-8 rounded-xl border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 px-4 py-3 text-sm">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="text-left space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 focus:border-accent focus:ring-1 focus:ring-accent px-4 py-2.5 text-slate-800 dark:text-slate-200 outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 focus:border-accent focus:ring-1 focus:ring-accent px-4 py-2.5 text-slate-800 dark:text-slate-200 outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 focus:border-accent focus:ring-1 focus:ring-accent px-4 py-2.5 text-slate-800 dark:text-slate-200 outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 focus:border-accent focus:ring-1 focus:ring-accent px-4 py-2.5 text-slate-800 dark:text-slate-200 outline-none transition-colors"
            />
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="px-8 py-3 rounded-full bg-accent hover:bg-accent-light text-white font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
