import type { ComponentType } from 'react';
import { FaFacebookF, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

const quickLinks = [
  { label: 'SSF Kerala', href: 'http://www.ssfkerala.org/' },
  { label: 'IPF Online', href: 'http://ipfonline.org/' },
  { label: 'Wisdom Online', href: '#' },
];

type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  iconClassName?: string;
};

const socialLinks: SocialLink[] = [
  {
    label: 'Telegram',
    href: 'https://t.me/wisdomwefi',
    icon: FaTelegramPlane,
    iconClassName: 'h-4 w-4 text-[#229ED9]',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/wisdom.wefi/',
    icon: FaFacebookF,
    iconClassName: 'h-4 w-4 text-[#1877F2]',
  },
  {
    label: 'WhatsApp',
    href: 'https://bit.ly/3ag7pEn',
    icon: FaWhatsapp,
    iconClassName: 'h-5 w-5 text-[#25D366]',
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 dark:border-white/10 dark:bg-[#02081c] dark:text-slate-300">
      <div className="container py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
              WEFI - Institute
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              &copy; Copyright 2026
              <br />
              All Rights Reserved.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-semibold text-slate-950 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="transition-colors hover:text-slate-950 dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-semibold text-slate-950 dark:text-white">
              Contact us
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:mail@wisdomonline.in"
                  className="transition-colors hover:text-slate-950 dark:hover:text-white"
                >
                  mail@wisdomonline.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+919633687336"
                  className="transition-colors hover:text-slate-950 dark:hover:text-white"
                >
                  +91 9633 687 336
                </a>
              </li>
              <li className="leading-relaxed">
                Students&apos; Centre, <br />
                Calicut - 04,
                <br />
                Kerala, India
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-semibold text-slate-950 dark:text-white">
              Follow us
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => {
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 transition hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-md bg-white dark:bg-slate-200">
                      <social.icon
                        className={social.iconClassName ?? 'h-4 w-4 text-slate-700'}
                      />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
