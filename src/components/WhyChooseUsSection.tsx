import { Award, Clock3, Code2, Play, ShieldCheck, Users } from 'lucide-react';
import avatar1 from '@/assets/9720004.jpg';
import avatar2 from '@/assets/9720026.jpg';
import avatar3 from '@/assets/9720027.jpg';

const highlights = [
  {
    icon: Clock3,
    title: 'Learn at Your Pace',
    description:
      'Access courses anytime, anywhere. Learn on your schedule with lifetime access to all courses.',
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description:
      'Learn from industry professionals working at top companies like Google, Meta, and Amazon.',
  },
  {
    icon: Code2,
    title: 'Hands-on Projects',
    description:
      'Build real-world projects and add them to your portfolio. Practice what you learn with coding exercises.',
  },
  {
    icon: Award,
    title: 'Certificates',
    description:
      'Earn verified certificates upon completion. Share your achievements on LinkedIn and your resume.',
  },
];

const students = [avatar1.src, avatar2.src, avatar3.src];

const WhyChooseUsSection = () => {
  return (
    <section className="border-t border-slate-200/70 bg-white py-20 md:py-28 dark:border-white/10 dark:bg-[#061226]">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Why Choose Us
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white lg:text-4xl">
            The Best Platform to Learn New Skills
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            We provide everything you need to succeed in your learning journey.
            Our platform is designed to make learning effective and enjoyable.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-primary dark:bg-indigo-500/15">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-slate-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Students collaborating"
              className="h-full w-full object-cover"
            />
          </div>

          <button
            type="button"
            aria-label="Play intro video"
            className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-xl"
          >
            <Play className="h-10 w-10 fill-current" />
          </button>

          <div className="absolute -bottom-6 left-6 flex items-center gap-4 rounded-3xl bg-white px-6 py-4 shadow-xl dark:border dark:border-white/10 dark:bg-[#0d1a35]">
            <div className="flex -space-x-3">
              {students.map((avatar, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={avatar}
                  src={avatar}
                  alt={`Student ${index + 1}`}
                  className="h-12 w-12 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div>
              <p className="text-base font-semibold text-slate-950 dark:text-white">
                50K+
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Happy Students
              </p>
            </div>
            <ShieldCheck className="hidden h-7 w-7 text-emerald-500 sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
