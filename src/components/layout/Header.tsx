import { siteConfig, theme } from "@/config";

import { SiteLogo } from "./site-logo";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200/50 px-4 py-4 md:border-0 md:px-6 md:py-6">
      <SiteLogo />

      {siteConfig.nav.length > 0 && (
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {siteConfig.nav.map((item: { title: string; href: string }) => (
            <a
              key={item.title}
              href={item.href}
              className={`${theme.transitions.default} hover:text-[${theme.colors.primary}]`}
            >
              {item.title}
            </a>
          ))}
        </nav>
      )}

      <div className="flex items-center gap-2 md:hidden">
        <button className="rounded-lg p-2 hover:bg-slate-100">
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </div>
    </header>
  );
}
