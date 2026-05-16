type SkillCardProps = {
  title: string;
  description: string;
  level: string;
};

export default function SkillCard({ title, description, level }: SkillCardProps) {
  return (
    <div className="group rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-slate-800/90">
      <div className="mb-4 inline-flex items-center rounded-full bg-slate-800/80 px-3 py-1 text-sm font-medium text-sky-200/90">
        {level}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 leading-7">{description}</p>
    </div>
  );
}
