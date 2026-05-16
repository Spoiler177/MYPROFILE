export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090a0d] px-6 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Victor Kamau. Crafted for AI-focused product teams.</p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-sky-300">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-sky-300">LinkedIn</a>
          <a href="mailto:hello@example.com" className="transition hover:text-sky-300">Email</a>
        </div>
      </div>
    </footer>
  );
}
