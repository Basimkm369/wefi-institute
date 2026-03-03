import { ArrowRight, BarChart3, Clock3, Star } from "lucide-react";

const courses = [
  {
    category: "WEB DEVELOPMENT",
    title: "The Complete Web Development Bootcamp...",
    instructor: "Sarah Johnson",
    rating: "4.8",
    reviews: "(46K)",
    students: "235K students",
    level: "All Levels",
    lessons: "478 lessons",
    price: "$89.99",
    oldPrice: "$199.99",
    duration: "65 hours",
    badge: "BESTSELLER",
    discount: "55% OFF",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "DATA SCIENCE",
    title: "Machine Learning A-Z: AI, Python & R",
    instructor: "Michael Chen",
    rating: "4.7",
    reviews: "(32K)",
    students: "178K students",
    level: "Intermediate",
    lessons: "312 lessons",
    price: "$94.99",
    oldPrice: "$189.99",
    duration: "44 hours",
    badge: "BESTSELLER",
    discount: "50% OFF",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "UI/UX DESIGN",
    title: "UI/UX Design: The Complete Guide",
    instructor: "Emily Rodriguez",
    rating: "4.9",
    reviews: "(19K)",
    students: "89K students",
    level: "Beginner",
    lessons: "245 lessons",
    price: "$79.99",
    oldPrice: "$159.99",
    duration: "38 hours",
    badge: "NEW",
    discount: "50% OFF",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "CLOUD & DEVOPS",
    title: "AWS Certified Solutions Architect 2032",
    instructor: "David Kim",
    rating: "4.8",
    reviews: "(25K)",
    students: "157K students",
    level: "Intermediate",
    lessons: "380 lessons",
    price: "$84.99",
    oldPrice: "$169.99",
    duration: "52 hours",
    badge: "BESTSELLER",
    discount: "50% OFF",
    image:
      "https://images.unsplash.com/photo-1537420327992-d6e192287183?auto=format&fit=crop&w=800&q=80",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="bg-[#f8f9fc] py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Featured Courses
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Most Popular Courses
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
              Start learning from the highest-rated courses chosen by thousands
              of students worldwide.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-xl font-medium text-primary transition hover:underline"
          >
            View All Courses <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => (
            <article
              key={course.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-56">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 space-y-2">
                  <span
                    className={`inline-flex rounded-full px-4 py-1 text-sm font-bold text-white ${
                      course.badge === "NEW" ? "bg-emerald-500" : "bg-orange-500"
                    }`}
                  >
                    {course.badge}
                  </span>
                  <div className="block">
                    <span className="rounded-full bg-rose-500 px-4 py-1 text-sm font-bold text-white">
                      {course.discount}
                    </span>
                  </div>
                </div>
                <span className="absolute bottom-4 right-4 rounded-full bg-slate-900/85 px-3 py-1 text-sm font-semibold text-white">
                  {course.duration}
                </span>
              </div>

              <div className="space-y-4 p-6">
                <p className="text-xs font-bold tracking-[0.16em] text-primary">
                  {course.category}
                </p>
                <h3 className="text-2xl font-semibold leading-snug text-slate-950">
                  {course.title}
                </h3>

                <div className="flex items-center gap-2 text-base text-slate-700">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold">
                    {course.instructor
                      .split(" ")
                      .map((chunk) => chunk[0])
                      .join("")}
                  </span>
                  {course.instructor}
                </div>

                <div className="flex flex-wrap items-center gap-2 text-base text-slate-600">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-slate-900">{course.rating}</span>
                  <span>{course.reviews}</span>
                  <span>{course.students}</span>
                </div>

                <div className="flex items-center gap-4 text-base text-slate-600">
                  <span className="inline-flex items-center gap-1">
                    <BarChart3 className="h-5 w-5" />
                    {course.level}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="h-5 w-5" />
                    {course.lessons}
                  </span>
                </div>

                <div className="border-t border-slate-200 pt-5">
                  <p className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-slate-900">
                      {course.price}
                    </span>
                    <span className="text-xl text-slate-500 line-through">
                      {course.oldPrice}
                    </span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
