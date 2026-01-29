import { ArrowLeftRight } from "lucide-react";

import { siteConfig } from "@/config/site";

export function SiteLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-lg bg-[#2563eb] p-2">
        <ArrowLeftRight className="size-5 text-white" strokeWidth={2.5} />
      </div>
      <span className="text-xl font-bold tracking-tight">{siteConfig.name}</span>
    </div>
  );
}
