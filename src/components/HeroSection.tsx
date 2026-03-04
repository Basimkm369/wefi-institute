import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  ShieldCheck,
  Star,
} from 'lucide-react';

const stats = [
  { value: '50K+', label: 'Active Students' },
  { value: '500+', label: 'Expert Instructors' },
  { value: '2,500+', label: 'Quality Courses' },
  { value: '95%', label: 'Success Rate' },
];

const HeroSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_95%,rgba(56,189,248,0.15),transparent_38%),linear-gradient(180deg,#2c2978_0%,#4b44d6_100%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="container relative py-16 text-center md:py-24">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-indigo-200">
          <BadgeCheck className="h-4 w-4 fill-indigo-300/20 text-indigo-200" />
          Trusted by 50,000+ learners worldwide
        </div>

        <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          Learn Without Limits
          <span className="block text-cyan-400">WEFI-Institute</span>
        </h1>

        <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-indigo-100/85 lg:text-xl">
          We believe that education should be accessible to everyone,
          everywhere. That&apos;s why we&apos;ve built a platform that connects
          learners .
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#courses"
            className="inline-flex min-w-56 items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-lg font-semibold text-primary transition hover:bg-white/95"
          >
            Explore Courses <ArrowRight className="h-6 w-6" />
          </a>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-8 text-sm text-indigo-100">
          <span className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            4.8 average rating
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            Free courses available
          </span>
          <span className="flex items-center gap-2">
            <Clock3 className="h-5 w-5 text-emerald-400" />
            Lifetime access
          </span>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 pt-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-h-32 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center"
            >
              <p className="text-4xl font-bold text-white lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-base text-indigo-100/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
