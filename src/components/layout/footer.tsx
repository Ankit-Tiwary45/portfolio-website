import { socialLinks } from "@/lib/data";
import { FiArrowUpRight } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10 text-sm text-slate-500 dark:text-slate-300">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Ankit Tiwary. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-slate-900 transition hover:text-brand-primary dark:text-white"
            >
              {link.label}
              <FiArrowUpRight />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

