import { Globe, ShieldCheck } from 'lucide-react';
import study1 from '@/assets/study1.jpg';

const AboutMissionSection = () => {
  return (
    <section className="bg-[#f8f9fc] py-16 lg:py-24 dark:bg-[#02081c]">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Mission & Vision
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white lg:text-4xl">
            Empowering learners worldwide
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Wisdom Education Foundation of India (WEFI) is a non-profit
            organization triggered to stream multiple development projects in
            the fields of education and guidance as to further mobilize the
            youth potential among the Indian citizens.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Being grounded in the principles of morality and ethics, engagement
            of this foundation would definitely help to instill an ideal
            personality, and more significantly, to carve out a socially
            responsible younger generations especially in India.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-primary">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-slate-950 dark:text-white">
                  Wisdom Homes Network
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  24 value-based homes near cities and campuses
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-slate-950 dark:text-white">
                  HiSem Admissions
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  586 central university admissions supported
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={study1.src}
              alt="Learners collaborating"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl dark:border dark:border-white/10 dark:bg-[#0d1a35]">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Career Guidance
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">
              Since 2015
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Wisdom Guide Initiative
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
