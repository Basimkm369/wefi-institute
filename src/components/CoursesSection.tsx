'use client';

import { Search } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

import CourseCard from '@/components/CourseCard';
import { courses } from '@/lib/courses';

type CategoryStat = {
  name: string;
  count: number;
  active?: boolean;
};

const CoursesSection = () => {
  const [query, setQuery] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const categoryList = useMemo<CategoryStat[]>(() => {
    const counts = new Map<string, number>();
    for (const course of courses) {
      counts.set(course.category, (counts.get(course.category) ?? 0) + 1);
    }
    const sorted = Array.from(counts.entries()).sort(([a], [b]) => a.localeCompare(b));
    return [
      { name: 'All Categories', count: courses.length, active: true },
      ...sorted.map(([name, count]) => ({ name, count })),
    ];
  }, [courses]);

  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return courses;
    }
    return courses.filter((course) => {
      const searchable = `${course.category} ${course.title}`.toLowerCase();
      return searchable.includes(normalizedQuery);
    });
  }, [query, courses]);

  return (
    <section
      id="courses"
      className="scroll-mt-[5rem] border-t border-slate-200/70 bg-white pt-12 pb-8 md:pt-16 md:pb-12 dark:border-white/10 dark:bg-[#061226]"
    >
      <div className="container">
        <div className="space-y-8">
          <div className="space-y-2 px-6">
            <p className="text-sm text-slate-500 dark:text-slate-300">
              <Link
                href="/"
                className="font-semibold text-slate-500 transition hover:text-primary dark:text-slate-300"
              >
                Home
              </Link>{' '}
              / <span className="font-semibold text-slate-900 dark:text-white">All Courses</span>
            </p>
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white lg:text-4xl">
                All Courses
              </h2>
              <span className="text-sm text-slate-600 dark:text-slate-300">{courses.length} courses available</span>
            </div>
          </div>

          <div className="flex justify-end gap-2 px-6">
            <div className="w-full max-w-xs">
              <label htmlFor="course-search" className="sr-only">
                Search courses
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 dark:text-slate-500">
                  <Search className="h-4 w-4" />
                </div>
                <input
                  id="course-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by course title or topic"
                  className="w-full rounded-full border border-slate-200/80 bg-white py-3 pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40 dark:border-slate-600 dark:bg-[#04112f] dark:text-white"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden rounded-[20px] border border-slate-200/80 bg-white/90 px-4 py-2 text-sm font-semibold text-primary shadow-[0_10px_30px_rgba(15,23,42,0.25)] transition hover:bg-white"
            >
              Categories
            </button>
          </div>

          <div className="lg:flex gap-6 px-6 lg:items-start">
            <div className="hidden lg:block lg:w-1/4">
              <div className="rounded-[32px] border border-slate-200/70 bg-white p-6 shadow-lg shadow-slate-900/20 dark:border-slate-700 dark:bg-[#020818]">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Categories</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {categoryList.map(({ name, count, active }) => (
                    <li
                      key={name}
                      className={`flex justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                        active
                          ? 'bg-slate-100 text-primary dark:bg-white/10 dark:text-white'
                          : 'bg-transparent hover:bg-slate-100 dark:hover:bg-white/5'
                      }`}
                    >
                      <span>{name}</span>
                      <span className="text-xs font-semibold">{count}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:flex-1">
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-min items-stretch">
                {filteredCourses.map((course) => (
                  <CourseCard key={`${course.category}-${course.link}`} course={course} />
                ))}
              </div>
            </div>
          </div>

          {drawerOpen && (
            <div className="fixed inset-0 z-50 flex">
              <div
                className="fixed inset-0 bg-black/60"
                onClick={() => setDrawerOpen(false)}
                aria-hidden="true"
              />
              <div className="fixed inset-y-0 right-0 z-60 w-3/4 max-w-xs bg-white p-6 shadow-2xl border border-slate-200/70 rounded-l-[16px] dark:bg-slate-900 dark:border-slate-800">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Categories</h3>
                    <button
                      type="button"
                      onClick={() => setDrawerOpen(false)}
                      className="rounded-full p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    >
                      ×
                    </button>
                  </div>
                  <div className="mt-6 flex-1 overflow-y-auto pb-6">
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {categoryList.map(({ name, count, active }) => (
                        <li
                          key={`drawer-${name}`}
                          className={`flex justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                            active
                              ? 'bg-slate-100 text-primary dark:bg-white/10 dark:text-white'
                              : 'bg-transparent hover:bg-slate-100 dark:hover:bg-white/5'
                          }`}
                        >
                          <span>{name}</span>
                          <span className="text-xs font-semibold">{count}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {filteredCourses.length === 0 && (
            <p className="px-6 text-sm text-slate-500 dark:text-slate-300">
              No courses match “{query}”. Try another keyword.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
