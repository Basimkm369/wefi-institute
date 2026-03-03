import { Globe, ShieldCheck } from "lucide-react";

const AboutMissionSection = () => {
  return (
    <section className="bg-[#f8f9fc] py-16 lg:py-24 dark:bg-[#02081c]">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Our Mission
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white lg:text-4xl">
            Empowering learners worldwide
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            At WEFI-institute, we&apos;re on a mission to transform lives through
            learning. We believe that everyone deserves access to high-quality
            education, regardless of their background or location.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Our platform connects passionate instructors with eager learners,
            creating a global community of knowledge sharing. From coding to
            design, business to photography, we offer courses that help people
            build real skills for the modern world.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-primary">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-slate-950 dark:text-white">Global Reach</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Students from 150+ countries</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-slate-950 dark:text-white">Quality Content</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Vetted by industry experts</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Learners collaborating"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl dark:border dark:border-white/10 dark:bg-[#0d1a35]">
            <p className="text-sm text-slate-500 dark:text-slate-400">Founded</p>
            <p className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">2018</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
