import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PlatformIconProps {
  icon: string | ReactNode;
  bgColor: string;
  isTextIcon?: boolean;
  isAlternative?: boolean;
}

export function PlatformIcon({ icon, bgColor, isTextIcon = false }: PlatformIconProps) {
  return (
    <div
      className={cn(
        "flex size-10 items-center justify-center rounded-xl text-white shadow-sm",
        bgColor,
        isTextIcon && "text-xl font-bold"
      )}
    >
      {typeof icon === "string" && !isTextIcon ? (
        <span className="material-symbols-outlined text-xl">{icon}</span>
      ) : (
        icon
      )}
    </div>
  );
}
