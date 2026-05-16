type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-sky-400/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-slate-400 text-base leading-7">
          {description}
        </p>
      ) : null}
    </div>
  );
}
