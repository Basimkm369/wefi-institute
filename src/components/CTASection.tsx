import { ArrowRight, Check } from "lucide-react";

const CTASection = () => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_95%,rgba(56,189,248,0.15),transparent_38%),linear-gradient(180deg,#4237b8_0%,#4b44d6_100%)] py-20 text-center md:py-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="container relative">
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Ready to Start Learning?
        </h2>
        <p className="mx-auto mt-6 max-w-5xl text-lg leading-relaxed text-indigo-100 md:text-xl">
          Join over 50,000 students already learning on Learnify. Get
          unlimited access to all courses with our Pro plan.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex min-w-56 items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-lg font-semibold text-primary transition hover:bg-white/95"
          >
            Start Learning Free <ArrowRight className="h-6 w-6" />
          </a>
          <a
            href="#courses"
            className="inline-flex min-w-56 items-center justify-center rounded-full border border-white/45 px-10 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
          >
            Browse Courses
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-base text-indigo-100">
          <p className="inline-flex items-center gap-2">
            <Check className="h-5 w-5" />
            No credit card required
          </p>
          <p className="inline-flex items-center gap-2">
            <Check className="h-5 w-5" />
            7-day free Pro trial
          </p>
          <p className="inline-flex items-center gap-2">
            <Check className="h-5 w-5" />
            Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
