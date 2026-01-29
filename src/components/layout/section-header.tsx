import { ReactNode } from "react";

import { theme } from "@/config";

interface SectionHeaderProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export function SectionHeader({ title, description, action }: SectionHeaderProps) {
  return (
    <div
      className={`${theme.spacing.section.marginBottom} flex flex-col gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left`}
    >
      <div>
        <h1 className={theme.typography.heading.h1}>{title}</h1>
        <p className="mx-auto max-w-xl text-base text-slate-500 md:mx-0 md:text-lg">
          {description}
        </p>
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}
