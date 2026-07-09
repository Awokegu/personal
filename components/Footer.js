export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-900 text-center text-sm text-slate-500">
      <p>
        Designed &amp; built <span className="text-accent-light"></span> by Awoke — {new Date().getFullYear()}
      </p>
    </footer>
  );
}
