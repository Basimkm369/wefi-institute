import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Course } from '@/lib/courses';

type CourseCardProps = {
  course: Course;
};

const CourseCard = ({ course }: CourseCardProps) => (
  <article className="flex h-full flex-col overflow-hidden rounded-[26px] border border-slate-200/70 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.08)] transition hover:shadow-[0_30px_60px_rgba(15,23,42,0.16)] dark:border-slate-600 dark:bg-[#04112f]">
    <div className="flex items-center justify-center bg-[#ecf1ff] px-6 py-8 dark:bg-[#111b3a]">
      <div className="h-16 w-16 rounded-[18px] bg-white p-3 shadow-[0_10px_30px_rgba(15,23,42,0.15)]">
        <Image
          src="/doc-model.svg"
          alt="Course icon"
          width={48}
          height={48}
          className="h-full w-full object-contain"
        />
      </div>
    </div>

    <div className="flex flex-1 flex-col gap-3 px-6 py-5 text-left">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
        {course.category}
      </h3>
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {course.title}
      </p>
    </div>

    <div className="px-6 pb-6">
      <a
        href={course.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-[20px] bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
      >
        View Course <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  </article>
);

export default CourseCard;
