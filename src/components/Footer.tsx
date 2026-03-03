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
    <footer className="bg-[#f8f9fc]">
      <div className="container py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <BrandLogo textClassName="text-2xl text-slate-950" />
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600 md:text-lg">
              Master new skills with world-class instructors. Access thousands
              of courses in technology, business, design, and more.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-slate-600 transition hover:bg-slate-300"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xl font-semibold text-slate-950">{title}</h4>
              <ul className="mt-6 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-base text-slate-600 transition-colors hover:text-slate-950"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200 py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-base text-slate-600">
            (c) 2026 Learnify. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-base text-slate-600">
            <span>Available on:</span>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 font-medium text-white"
            >
              <Apple className="h-5 w-5" />
              iOS
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 font-medium text-white"
            >
              <Play className="h-4 w-4 fill-current" />
              Android
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
