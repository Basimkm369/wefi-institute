import { Moon, Search } from "lucide-react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

const navLinks = [
  { label: "Courses", href: "#courses" },
  { label: "Categories", href: "#categories" },
  { label: "Instructors", href: "#instructors" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="shrink-0">
          <BrandLogo textClassName="text-2xl text-foreground" />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-medium text-slate-600 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            type="button"
            aria-label="Search"
            className="hidden p-2 text-slate-600 transition-colors hover:text-foreground md:block"
          >
            <Search className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Toggle theme"
            className="hidden p-2 text-slate-600 transition-colors hover:text-foreground md:block"
          >
            <Moon className="h-6 w-6" />
          </button>
          <a
            href="#"
            className="hidden text-base font-medium text-slate-700 transition-colors hover:text-foreground md:block"
          >
            Sign In
          </a>
          <a
            href="#"
            className="rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-[0_10px_24px_rgba(79,70,229,0.35)] transition hover:bg-primary/90"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
