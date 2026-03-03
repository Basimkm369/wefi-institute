import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Learnify helped me transition from marketing to software engineering in just 6 months. The web development bootcamp was incredibly comprehensive and practical.",
    course: "Web Development Bootcamp",
    name: "Alex Thompson",
    role: "Software Engineer at Stripe",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "The machine learning courses are top-notch. I went from knowing basic Python to building production ML models. Now I work as a data scientist at a top tech company.",
    course: "Machine Learning A-Z",
    name: "Maria Garcia",
    role: "Data Scientist at Meta",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "As a self-taught designer, Learnify filled all the gaps in my knowledge. The UI/UX courses taught me professional workflows and helped me land my dream job.",
    course: "UI/UX Design Complete Guide",
    name: "James Wilson",
    role: "Product Designer at Figma",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=200&q=80",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#061737] py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-400">
            Success Stories
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            What Our Students Say
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 md:text-xl">
            Join thousands of students who have transformed their careers with
            our courses.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-6 w-6 fill-current" />
                ))}
              </div>

              <p className="mt-7 text-xl leading-relaxed text-slate-200">
                {`"${testimonial.quote}"`}
              </p>
              <p className="mt-6 text-xl text-indigo-400">
                Course: {testimonial.course}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-lg text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
