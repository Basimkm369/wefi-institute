import { Apple, Instagram, Linkedin, Play, Twitter } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const footerLinks = {
  Categories: [
    "Web Development",
    "Data Science",
    "UI/UX Design",
    "Business",
    "Digital Marketing",
    "Mobile Development",
  ],
  Company: [
    "About Us",
    "Become an Instructor",
    "Careers",
    "Blog",
    "Press",
    "Contact",
  ],
  Support: [
    "Help Center",
    "FAQ",
    "Terms of Service",
    "Privacy Policy",
    "Accessibility",
  ],
};

const socialLinks = [
  { label: "X", icon: Twitter },
  { label: "LinkedIn", icon: Linkedin },
  { label: "YouTube", icon: Play },
  { label: "Instagram", icon: Instagram },
];

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-[#f8f9fc] dark:border-white/10 dark:bg-[#02081c]">
      <div className="container py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <BrandLogo textClassName="text-2xl text-slate-950 dark:text-white" />
            <p className="mt-4 max-w-sm text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Master new skills with world-class instructors. Access thousands
              of courses in technology, business, design, and more.
            </p>

            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-600 transition hover:bg-slate-300 dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/20"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-slate-950 dark:text-white">{title}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => {
                  const href =
                    title === "Company" && link === "About Us" ? "/about" : "#";

                  return (
                    <li key={link}>
                      <a
                        href={href}
                        className="text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-white/10">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              &copy; 2026 WEFI-institute. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-500 dark:text-slate-400">Available on:</span>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-3 py-1.5 text-white dark:bg-white/10"
                >
                  <Apple className="h-4 w-4" />
                  <span className="text-xs font-medium">iOS</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-3 py-1.5 text-white dark:bg-white/10"
                >
                  <Play className="h-4 w-4 fill-current" />
                  <span className="text-xs font-medium">Android</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
