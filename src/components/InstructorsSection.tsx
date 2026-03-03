import { ArrowRight, Star } from "lucide-react";

const instructors = [
  {
    name: "Sarah Johnson",
    role: "Senior Software Engineer at Google",
    rating: "4.9",
    reviews: "(12K)",
    students: "89K",
    courses: "8",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Michael Chen",
    role: "Data Science Lead at Netflix",
    rating: "4.8",
    reviews: "(9K)",
    students: "62K",
    courses: "6",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Emily Rodriguez",
    role: "Principal Designer at Airbnb",
    rating: "4.9",
    reviews: "(7K)",
    students: "45K",
    courses: "5",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "David Kim",
    role: "AWS Solutions Architect",
    rating: "4.7",
    reviews: "(5K)",
    students: "38K",
    courses: "7",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=300&q=80",
  },
];

const InstructorsSection = () => {
  return (
    <section id="instructors" className="bg-[#f8f9fc] py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Expert Instructors
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Learn From the Best
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
            Our instructors are industry professionals from top companies,
            passionate about sharing their knowledge.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {instructors.map((instructor) => (
            <article
              key={instructor.name}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-950">
                {instructor.name}
              </h3>
              <p
                className={`mt-2 text-lg ${
                  instructor.name === "Emily Rodriguez"
                    ? "text-primary"
                    : "text-slate-600"
                }`}
              >
                {instructor.role}
              </p>

              <div className="mt-6 flex items-center justify-center gap-2 text-base">
                <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-slate-950">{instructor.rating}</span>
                <span className="text-slate-500">{instructor.reviews}</span>
              </div>

              <div className="mt-6 flex justify-center gap-8 border-t border-slate-200 pt-6">
                <div>
                  <p className="text-3xl font-bold text-slate-950">
                    {instructor.students}
                  </p>
                  <p className="text-base text-slate-600">Students</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-950">
                    {instructor.courses}
                  </p>
                  <p className="text-base text-slate-600">Courses</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xl font-medium text-primary transition hover:underline"
          >
            View All Instructors <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
