import React from "react";
import Link from "next/link";

type AccentButtonProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
};

const AccentButton: React.FC<AccentButtonProps> = ({
  href,
  children,
  external = false,
  className = "",
}) => {
  const baseClasses = `font-mono text-[0.65rem] tracking-widest px-6 py-2.5 bg-accent rounded text-bg-base hover:bg-accent-hover transition-colors duration-200 ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses}>
      {children}
    </Link>
  );
};

export default AccentButton;