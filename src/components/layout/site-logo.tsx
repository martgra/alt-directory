import { ArrowLeftRight } from "lucide-react";

import { siteConfig } from "@/config/site";

export function SiteLogo() {
  return (
    <div className="group flex cursor-pointer items-center gap-2.5">
      <div className="flex size-8 items-center justify-center rounded-lg bg-[#2563eb] text-white shadow-sm shadow-[#2563eb]/20">
        <ArrowLeftRight className="size-5" strokeWidth={2.5} />
      </div>
      <h1 className="text-base font-bold tracking-tight text-slate-800">{siteConfig.name}</h1>
    </div>
  );
}
