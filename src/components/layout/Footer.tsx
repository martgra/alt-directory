import { copy, siteConfig } from "@/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 pb-6 text-center text-sm text-slate-400">
      <p>
        © {currentYear} {siteConfig.name}. {copy.site.copyright}
      </p>
    </footer>
  );
}
