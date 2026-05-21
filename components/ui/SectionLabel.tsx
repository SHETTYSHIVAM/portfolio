import React from "react";

interface SectionLabelProps {
  number: string;
  children?: React.ReactNode;
}

export default function SectionLabel({ number, children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <span className="font-mono text-sm text-accent letter-spacing-3">
        {number}
      </span>
      <div className="h-px w-8 bg-accent/40" />
      {children}
    </div>
  );
}
