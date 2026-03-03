const stats = [
  { value: "50K+", label: "Active Students" },
  { value: "500+", label: "Expert Instructors" },
  { value: "2,500+", label: "Quality Courses" },
  { value: "95%", label: "Success Rate" },
];

const AboutHeroSection = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_95%,rgba(56,189,248,0.15),transparent_38%),linear-gradient(180deg,#2c2978_0%,#3f3aa6_100%)] py-20 lg:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="container relative">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-indigo-200">
              Our Story
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Democratizing education for
              <span className="block text-cyan-400">everyone</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-indigo-100/90">
              We believe that education should be accessible to everyone,
              everywhere. That&apos;s why we&apos;ve built a platform that
              connects learners with world-class instructors.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-12 dark:border-white/10 dark:bg-[#02081c]">
        <div className="container grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold tracking-tight text-primary lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-base text-slate-600 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutHeroSection;
