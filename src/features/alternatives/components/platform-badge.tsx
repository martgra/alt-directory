import { Platform } from "@/types/Alternative";

import { PlatformIcon } from "./platform-icon";

interface PlatformBadgeProps {
  platform: Platform;
  isTextIcon?: boolean;
}

export function PlatformBadge({ platform, isTextIcon }: PlatformBadgeProps) {
  return (
    <div className="flex items-center gap-4">
      <PlatformIcon icon={platform.icon} bgColor={platform.bgColor} isTextIcon={isTextIcon} />
      <span className="text-sm font-medium text-slate-600">{platform.name}</span>
    </div>
  );
}
