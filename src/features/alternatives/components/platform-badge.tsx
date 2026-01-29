import { cn } from "@/lib/utils";
import { Platform } from "@/types/Alternative";

import { PlatformIcon } from "./platform-icon";

interface PlatformBadgeProps {
  platform: Platform;
  isTextIcon?: boolean;
  isMobile?: boolean;
}

export function PlatformBadge({ platform, isTextIcon, isMobile = false }: PlatformBadgeProps) {
  return (
    <div className="flex min-w-0 items-center gap-4">
      <PlatformIcon icon={platform.icon} bgColor={platform.bgColor} isTextIcon={isTextIcon} />
      <span
        className={cn(
          "min-w-0 truncate",
          isMobile ? "text-lg font-bold md:text-base md:font-semibold" : "font-semibold"
        )}
      >
        {platform.name}
      </span>
    </div>
  );
}
