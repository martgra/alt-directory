import { siteConfig } from "@/config/site";

const footerLinks = [
  { title: "Privacy", href: siteConfig.links.privacy },
  { title: "Github", href: siteConfig.links.github },
  { title: "RSS", href: siteConfig.links.rss },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-slate-200/60 pt-10">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            {siteConfig.name} © {currentYear}
          </p>
          <p className="text-[11px] text-slate-400">{siteConfig.description}</p>
        </div>
        <div className="flex gap-8">
          {footerLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest text-slate-400 transition-colors hover:text-[#2563eb]"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
