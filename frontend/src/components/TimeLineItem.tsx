type TimelineItemProps = {
  date: string;
  title: string;
  subtitle: string;
  description: string;
};

export default function TimelineItem({ date, title, subtitle, description }: TimelineItemProps) {
  return (
    <div className="relative pl-12 pb-10">
      <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_0_8px_rgba(56,189,248,0.1)]" />
      <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{date}</p>
      <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-slate-400 mb-3">{subtitle}</p>
      <p className="text-slate-400 leading-7">{description}</p>
    </div>
  );
}
