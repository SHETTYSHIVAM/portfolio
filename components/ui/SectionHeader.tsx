import SectionLabel from "./SectionLabel";

interface SectionHeaderProps {
  number: string;
  title: string;
  accent?: string;
}

export default function SectionHeader({
  number,
  title,
  accent,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      {/* Label */}
      <SectionLabel number={number}>{number}</SectionLabel>

      {/* Title */}
      <h2 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-semibold tracking-[-0.02em] leading-tight text-text-primary">
        {title}{" "}
        {accent && <span className="text-accent">{accent}</span>}
      </h2>
    </div>
  );
}
