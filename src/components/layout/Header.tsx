import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

import { SiteLogo } from "./site-logo";

export function Header() {
  return (
    <header className="mb-16 flex h-12 items-center justify-between">
      <SiteLogo />

      <nav className="flex items-center gap-8">
        {siteConfig.nav.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="text-sm font-medium text-slate-500 transition-colors hover:text-[#2563eb]"
          >
            {item.title}
          </a>
        ))}
        <Button>Sign In</Button>
      </nav>
    </header>
  );
}
