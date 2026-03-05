import { Award, Clock3, Code2, ShieldCheck, Sparkles, Users } from 'lucide-react';

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

const stats = [
  { value: '25K+', label: 'Daily Career Updates' },
  { value: '11L+', label: 'Students Reached' },
  { value: '260+', label: 'Professional Fields' },
  { value: '90', label: 'Trained Counsellors' },
];

const WhyChooseUsSection = () => {
  return (
    <section
      id="why-choose-us"
      className="relative isolate overflow-hidden border-t border-white/10 py-20 md:py-24"
    >
      <div className="absolute inset-0 bg-[#433fbd]" />
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="container relative grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-100">
            Why Choose Us
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white lg:text-4xl">
            The Best Platform to Learn New Skills
          </h2>
          <p className="mt-4 text-base leading-relaxed text-indigo-100/95">
            We provide everything you need to succeed in your learning journey.
            Our platform is designed to make learning effective and enjoyable.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-2xl border border-white/20 bg-white/[0.08] px-4 py-4 shadow-[0_12px_28px_rgba(3,17,63,0.32)] backdrop-blur-md"
              >
                <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-1 text-xs text-indigo-100/90">{stat.label}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/35 bg-cyan-200/15 px-4 py-2 text-sm font-medium text-cyan-100">
            <Sparkles className="h-4 w-4" />
            Trusted, guided, and outcomes-focused.
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            const cardOffset = index % 2 === 1 ? 'sm:translate-y-6' : '';

            return (
              <article
                key={item.title}
                className={`rounded-3xl border border-white/20 bg-white/[0.08] p-5 shadow-[0_16px_34px_rgba(3,17,63,0.32)] backdrop-blur-md transition hover:bg-white/[0.12] ${cardOffset}`}
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100/20 text-cyan-100">
                    <Icon className="h-6 w-6" />
                  </div>
                  <ShieldCheck className="h-5 w-5 text-emerald-300" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-indigo-100/90">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
