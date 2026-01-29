import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PlatformIconProps {
  icon: string | ReactNode;
  bgColor: string;
  isTextIcon?: boolean;
  isAlternative?: boolean;
}

export function PlatformIcon({
  icon,
  bgColor,
  isTextIcon = false,
  isAlternative = false,
}: PlatformIconProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-xl text-white",
        isAlternative ? "size-10" : "size-12",
        bgColor,
        isTextIcon && "text-2xl font-bold"
      )}
    >
      {typeof icon === "string" && !isTextIcon ? (
        <span className="material-symbols-outlined">{icon}</span>
      ) : (
        icon
      )}
    </div>
  );
}
