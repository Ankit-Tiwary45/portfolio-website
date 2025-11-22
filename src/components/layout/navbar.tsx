"use client";

import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../theme-toggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex items-center justify-center px-4",
        isScrolled ? "backdrop-blur-xl" : "",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center justify-between rounded-[24px] border border-white/10 px-6 py-3 transition-all",
          isScrolled ? "bg-white/70 shadow-2xl dark:bg-slate-900/70" : "bg-transparent",
        )}
      >
        <a
          className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white"
          href="#hero"
        >
          Ankit<span className="text-brand-primary">.</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-200 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm transition hover:text-brand-primary"
            >
              <span>{link.label}</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-brand-primary transition group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Open navigation"
        >
          <FiMenu className="h-5 w-5" />
        </button>
      </div>
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-4 right-4 top-20 rounded-3xl border border-white/10 bg-white/90 p-6 text-slate-800 shadow-2xl dark:bg-slate-900/90 dark:text-white md:hidden"
        >
          <div className="mb-4">
            <ThemeToggle />
          </div>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

