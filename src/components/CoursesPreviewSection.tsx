import { courses } from '@/lib/courses';
import CourseCard from '@/components/CourseCard';

const featuredCourses = courses.slice(0, 4);

const CoursesPreviewSection = () => (
  <section
    id="courses"
    className="scroll-mt-[5rem] bg-white py-24 text-slate-900 dark:bg-[#030617] dark:text-white"
  >
    <div className="container">
      <div className="mx-auto max-w-4xl space-y-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
          Free Cources
        </p>
        <h2 className="text-3xl font-bold leading-tight text-slate-950 dark:text-white md:text-4xl">
          Learn from the best in every field
        </h2>
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
          Start learning from the courses chosen by thousands of students
          worldwide.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {featuredCourses.map((course) => (
          <CourseCard
            key={`${course.category}-${course.link}`}
            course={course}
          />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <a
          href="/courses"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
        >
          View all courses
        </a>
      </div>
    </div>
  </section>
);

export default CoursesPreviewSection;
