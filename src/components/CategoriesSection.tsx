import {
  BarChart3,
  BriefcaseBusiness,
  Camera,
  Cloud,
  Code2,
  Megaphone,
  Palette,
  Smartphone,
} from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Build modern websites and web applications",
    courses: "156 courses",
    iconClasses: "bg-blue-100 text-blue-600",
  },
  {
    icon: BarChart3,
    title: "Data Science",
    description: "Analyze data and build ML models",
    courses: "98 courses",
    iconClasses: "bg-violet-100 text-violet-600",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Create beautiful user experiences",
    courses: "124 courses",
    iconClasses: "bg-pink-100 text-pink-600",
    highlighted: true,
  },
  {
    icon: BriefcaseBusiness,
    title: "Business",
    description: "Grow your career and business",
    courses: "87 courses",
    iconClasses: "bg-amber-100 text-amber-600",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Master SEO, social media, and ads",
    courses: "72 courses",
    iconClasses: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Build iOS and Android apps",
    courses: "64 courses",
    iconClasses: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, Azure, Docker, Kubernetes",
    courses: "58 courses",
    iconClasses: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capture stunning images",
    courses: "45 courses",
    iconClasses: "bg-rose-100 text-rose-600",
  },
];

const CategoriesSection = () => {
  return (
    <section
      id="categories"
      className="scroll-mt-[5rem] bg-[#f8f9fc] pb-20 pt-12 md:py-28 dark:bg-[#02081c]"
    >
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Browse Categories
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white lg:text-4xl">
            Explore Our Top Categories
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Find the perfect course from our wide selection of categories taught
            by industry experts.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <a
                key={category.title}
                href="#"
                className={`rounded-2xl border bg-white p-8 transition-all hover:-translate-y-0.5 hover:shadow-lg dark:bg-[#0d1a35] ${
                  category.highlighted
                    ? "border-primary/30 shadow-[0_8px_30px_rgba(79,70,229,0.08)]"
                    : "border-slate-200 dark:border-white/10"
                }`}
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${category.iconClasses}`}
                >
                  <Icon className="h-8 w-8" />
                </div>
                <h3
                  className={`mt-7 text-lg font-semibold ${
                    category.highlighted ? "text-primary" : "text-slate-950 dark:text-white"
                  }`}
                >
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {category.description}
                </p>
                <p className="mt-5 text-sm font-medium text-primary">
                  {category.courses} -&gt;
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
