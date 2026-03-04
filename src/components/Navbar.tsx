"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Courses", href: "/#courses" },
  { label: "Categories", href: "/#categories" },
  { label: "Instructors", href: "/#instructors" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    window.addEventListener("popstate", syncHash);
    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("popstate", syncHash);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;
    root.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const isActive = (href: string) => {
    if (href.includes("#")) {
      const targetHash = href.substring(href.indexOf("#"));
      return pathname === "/" && hash === targetHash;
    }
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-background/95 backdrop-blur dark:border-white/10 dark:bg-[#020617]/95">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="shrink-0">
          <BrandLogo textClassName="text-2xl text-foreground" />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => {
                if (link.href.includes("#")) {
                  setHash(link.href.substring(link.href.indexOf("#")));
                }
              }}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "text-base font-medium transition-colors",
                isActive(link.href)
                  ? "text-primary"
                  : "text-slate-600 hover:text-foreground dark:text-slate-300 dark:hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="p-2 text-slate-600 transition-colors hover:text-foreground dark:text-slate-300 dark:hover:text-white"
          >
            <Moon className="h-6 w-6 dark:hidden" />
            <Sun className="hidden h-6 w-6 dark:block" />
          </button>
          <a
            href="#"
            className="rounded-full bg-primary px-6 py-3 text-base font-semibold text-white shadow-[0_10px_24px_rgba(79,70,229,0.35)] transition hover:bg-primary/90"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/10 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[80] h-dvh bg-black/35 dark:bg-black/60 lg:hidden">
          <aside className="flex h-dvh w-full flex-col bg-white dark:bg-[#020617]">
            <div className="container flex h-20 shrink-0 items-center justify-between border-b border-slate-200 dark:border-white/10">
              <Link href="/" className="shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
                <BrandLogo textClassName="text-2xl text-foreground" />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="container flex-1 overflow-y-auto bg-white py-5 dark:bg-[#020617]">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      if (link.href.includes("#")) {
                        setHash(link.href.substring(link.href.indexOf("#")));
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                      isActive(link.href)
                        ? "bg-primary/10 text-primary"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 border-t border-slate-200 pt-6 dark:border-white/10">
                <button
                  type="button"
                  aria-label="Toggle dark mode"
                  onClick={toggleTheme}
                  className="flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
                >
                  <Moon className="h-5 w-5 dark:hidden" />
                  <Sun className="hidden h-5 w-5 dark:block" />
                  <span className="dark:hidden">Dark Mode</span>
                  <span className="hidden dark:inline">Light Mode</span>
                </button>
                <a
                  href="#"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white shadow-[0_10px_24px_rgba(79,70,229,0.35)] transition hover:bg-primary/90"
                >
                  Get Started
                </a>
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
};

export default Navbar;
