type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
};

export default function ProjectCard({ title, description, tags, github, demo }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_32px_120px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:border-sky-400/30">
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-sky-400 via-violet-400 to-white opacity-60 blur-xl" />
      <div className="relative space-y-5 pt-4">
        <div className="h-48 rounded-[1.5rem] bg-slate-800/80 p-4 text-slate-400 flex items-end justify-start">
          <span className="text-base text-slate-300">Project preview</span>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="text-slate-400 leading-7">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="interactive inline-flex items-center justify-center rounded-full border border-slate-700/90 bg-slate-950/80 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:bg-sky-400/15"
          >
            GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="interactive inline-flex items-center justify-center rounded-full border border-slate-700/90 bg-slate-950/80 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:bg-violet-400/15"
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
