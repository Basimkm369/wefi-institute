import { ArrowRight } from 'lucide-react';

type Course = {
  category: string;
  title: string;
  link: string;
};

const courses: Course[] = [
  {
    category: 'Critical Thinking',
    title:
      'Introduces logic fundamentals to students. ഈ കോഴ്സ് ലൊജിക്കിന്റെ അടിസ്ഥാനങ്ങളെ പരിചയപ്പെടുന്നു.',
    link: 'https://onlinecourses.swayam2.ac.in/aic19_ma06/preview',
  },
  {
    category:
      'Intro to Logic: Sets, Numbers, Variables, Sentential Calculus & Relation',
    title:
      'Foundational logic topics: sets, numbers, variables, and relations.',
    link: 'https://onlinecourses.swayam2.ac.in/aic19_ma06/preview',
  },
  {
    category: 'Digital Literacy',
    title:
      'Essential digital skills including ePortfolio, online safety, web, AI tools and Excel.',
    link: 'https://onlinecourses.swayam2.ac.in/nou25_ed47/preview',
  },
  {
    category: 'Emerging Technologies for Business and Society',
    title:
      'AI, ML, Cloud, IoT, Cybersecurity, and Blockchain applications in business.',
    link: 'https://onlinecourses.swayam2.ac.in/nou25_mg08/preview',
  },
  {
    category: 'English Grammar for Employability',
    title:
      'Strengthens grammar and verbal ability for academic and workplace success.',
    link: 'https://onlinecourses.swayam2.ac.in/aic21_ge24/preview',
  },
  {
    category: 'ExpEYES Junior - Physics and Electronics experiments',
    title:
      'Hands-on experiments in physics and electronics using ExpEYES Junior.',
    link: 'https://onlinecourses.swayam2.ac.in/aic20_sp64/preview',
  },
  {
    category: 'Financial Literacy',
    title: 'Money management skills for long-term financial well-being.',
    link: 'https://onlinecourses.swayam2.ac.in/nou25_mg27/preview',
  },
  {
    category: 'HTML',
    title:
      'Basics of HTML: tags, images, tables, forms for web content building.',
    link: 'https://onlinecourses.swayam2.ac.in/aic20_sp11/preview',
  },
  {
    category: 'Innovation by Design',
    title: 'Design thinking and innovation journey from problem to solution.',
    link: 'https://onlinecourses.swayam2.ac.in/aic19_de02/preview',
  },
  {
    category: 'Java',
    title: 'Learn Java object-oriented programming with hands-on tutorials.',
    link: 'https://onlinecourses.swayam2.ac.in/aic20_sp13/preview',
  },
  {
    category: 'Marketing Essentials',
    title:
      'Fundamentals of marketing concepts and real-world strategy learning.',
    link: 'https://onlinecourses.swayam2.ac.in/nou25_mg26/preview',
  },
  {
    category: 'Media and Information Literacy for Teachers',
    title:
      'Teachers course to critically engage media, ICT and information sources.',
    link: 'https://onlinecourses.swayam2.ac.in/nou25_hs23/preview',
  },
  {
    category: 'Getting Started with Microsoft Excel',
    title:
      'Learn spreadsheets, graphs and formulas via a project-based course.',
    link: 'https://www.coursera.org/projects/introduction-microsoft-excel',
  },
  {
    category: 'How to Create Video for Online Courses',
    title:
      'Educators learn scripting, filming, editing and accessibility for course videos.',
    link: 'https://www.coursera.org/learn/how-to-create-video-for-online-courses',
  },
  {
    category: 'Creative Thinking: Techniques and Tools for Success',
    title: 'Brainstorming, SCAMPER, TRIZ and tools to boost creativity.',
    link: 'https://www.coursera.org/learn/creative-thinking-techniques-and-tools-for-success',
  },
  {
    category: 'Creating a Free Business Page with Blogger',
    title: 'Set up and customize a Blogger business page and analyze reach.',
    link: 'https://www.coursera.org/projects/free-blogger-business-page',
  },
  {
    category: 'English for Career Development',
    title: 'Non-native speakers prepare resumes, interviews and global jobs.',
    link: 'https://www.coursera.org/learn/careerdevelopment',
  },
  {
    category: 'Google Ads for Beginners',
    title:
      '2-hour tutorial: campaign setup, keywords and ad optimization basics.',
    link: 'https://www.coursera.org/projects/google-ads-beginner',
  },
  {
    category: 'Build a Free Website with WordPress',
    title: 'Guided project to create and customize a free WordPress site.',
    link: 'https://www.coursera.org/projects/build-free-website-wordpress',
  },
  {
    category: 'Social Psychology',
    title: 'Explore decision making, persuasion, group dynamics and prejudice.',
    link: 'https://www.coursera.org/learn/social-psychology',
  },
  {
    category: 'Leadership Skills',
    title: 'Develop decision-making, influence and resilience for leadership.',
    link: 'https://www.coursera.org/learn/leadershipskills',
  },
  {
    category: 'Use Canva to Design',
    title: 'Create course collateral, worksheets and certificates with Canva.',
    link: 'https://www.coursera.org/projects/canva-design-digital-course-collateral',
  },
  {
    category: 'Human Resources Analytics',
    title: 'Use HR metrics and data to inform strategic decisions.',
    link: 'https://www.coursera.org/learn/human-resources-analytics',
  },
  {
    category: 'Build a Professional Resume',
    title: 'Create ATS-friendly resume using Canva and best practices.',
    link: 'https://www.coursera.org/projects/build-a-professional-resume-using-canva',
  },
  {
    category: 'Innovation Management',
    title: 'Manage innovation: idea generation, strategy and implementation.',
    link: 'https://www.coursera.org/learn/innovation-management',
  },
  {
    category: 'International Leadership and Organizational Behavior',
    title: 'Lead across cultures: motivation, communication and team dynamics.',
    link: 'https://www.coursera.org/learn/organizational-behavior',
  },
  {
    category: 'Dynamic Public Speaking Specialization',
    title: 'Four-course specialization for speeches and presentation mastery.',
    link: 'https://www.coursera.org/specializations/public-speaking',
  },
  {
    category: 'Essential Skills for Your Career Development',
    title: 'Job search, networking, interview and soft skill development.',
    link: 'https://www.coursera.org/learn/essential-skills-for-your-career-development',
  },
  {
    category: 'Preparation for Job Interviews',
    title: 'Strategies and best practices for different interview types.',
    link: 'https://www.coursera.org/projects/preparation-for-job-interviews',
  },
  {
    category: 'Drugs and Alcohol - Awareness and Prevention',
    title:
      'Health and social impacts of substance misuse and prevention strategies.',
    link: 'https://alison.com/course/drugs-and-alcohol-awareness-and-prevention',
  },
  {
    category: 'Becoming a Skilled Caregiver',
    title:
      'Skills for caring, disabled and elderly individuals, communication and ethics.',
    link: 'https://alison.com/course/becoming-a-skilled-caregiver',
  },
  {
    category: 'CCTV Operator Training',
    title: 'Operate CCTV, system monitoring, legal and security compliance.',
    link: 'https://alison.com/course/cctv-operator-training-course',
  },
  {
    category: 'Communication Skills',
    title:
      'Verbal, non-verbal, reading and writing skills plus digital ethics and safety.',
    link: 'https://rfskillingacademy.com/en/skill_development/e-course/RF_292_en/Communication-Skills',
  },
  {
    category: 'Foundation Course in IoT Testing',
    title: 'Basics of IoT, testing, security, privacy and product engineering.',
    link: 'https://rfskillingacademy.com/en/skill_development/e-course/RF_512_en/Foundation-Course-in-IoT-Testing',
  },
  {
    category: 'Leadership and Management Skills',
    title:
      'Decision-making, business acumen, ethics and team leadership techniques.',
    link: 'https://rfskillingacademy.com/en/skill_development/e-course/RF_294_en/Leadership-and-Management-Skills',
  },
  {
    category: 'Operation Associate Certification Programme',
    title:
      'Business operations fundamentals, quality, supply chain and processes.',
    link: 'https://rfskillingacademy.com/en/skill_development/e-course/RF_352_en/Operation-Associate-Certification-Programme',
  },
  {
    category: 'Public Relations in Digital Age',
    title:
      'Online community engagement, crisis management and ethical tech use.',
    link: 'https://rfskillingacademy.com/en/skill_development/e-course/RF_400_en/Public-Relations-in-Digital-Age',
  },
  {
    category: 'Developing Media Content',
    title:
      'Content creation, ethics, platform trends and digital storytelling skills.',
    link: 'https://rfskillingacademy.com/en/skill_development/e-course/RF_338_en/Developing-Media-Content',
  },
  {
    category: 'Work Productivity Tools',
    title:
      'Document, spreadsheet and presentation productivity with core tools.',
    link: 'https://www.skillindiadigital.gov.in/courses/detail/37b27f43-a7fd-4bb6-8aa3-8d44cdeff4a5',
  },
  {
    category: 'ChatGPT for Beginners',
    title: 'Use ChatGPT for content, coding, productivity and summarization.',
    link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/chatgpt-for-beginners',
  },
  {
    category: 'Data Visualization With Power BI',
    title: 'Visual analytics, dashboards and DAX fundamentals.',
    link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/data-visualization-with-power-bi',
  },
  {
    category: 'Prompt Engineering for ChatGPT',
    title:
      'Learn prompt design, model limitations, real-world generative AI uses.',
    link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/prompt-engineering-for-chatgpt',
  },
  {
    category: 'Basic Accounting',
    title: 'Fundamentals of bookkeeping, recording and transaction reporting.',
    link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/basic-accounting',
  },
  {
    category: 'Canva Essentials: Quick & Easy Design Skills',
    title:
      'Design marketing material, presentations and visuals with Canva basics.',
    link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/canva-essentials-quick-easy-design-skills',
  },
  {
    category: 'A Mini Course on Time Management',
    title: '7 steps to improve productivity and manage time better.',
    link: 'https://www.udemy.com/course/manageyourtime/',
  },
  {
    category: 'Introductory Photography Course for Beginners',
    title: 'Learn exposure, autofocus, framing and basic composition skills.',
    link: 'https://www.udemy.com/course/free-photography-course-for-beginners/',
  },
  {
    category: 'PowerPoint for Beginners - Program & Animation Basics FREE',
    title: 'Animations, slide design and navigating PowerPoint functions.',
    link: 'https://www.udemy.com/course/powerpoint-for-beginners-free/',
  },
  {
    category: 'Art Fundamentals - Building Blocks of Digital Painting',
    title:
      'Digital art basics: color, composition, tools to get started painting.',
    link: 'https://www.udemy.com/course/art-fundamentals-in-one-hour/',
  },
  {
    category: 'Create Engaging Video with Google Vids (Simplilearn)',
    title:
      'Basics of video editing, transitions and storytelling using Google Vids.',
    link: 'https://www.simplilearn.com/create-engaging-video-with-google-vids-free-course-skillup',
  },
  {
    category: 'Design Thinking for Beginners (Simplilearn)',
    title:
      'Empathy, ideation, prototyping and integrating design thinking basics.',
    link: 'https://www.simplilearn.com/learn-design-thinking-basics-free-course-skillup',
  },
  {
    category: 'Introduction to Animation Fundamentals Course (Simplilearn)',
    title: 'Core animation principles and creating simple animations.',
    link: 'https://www.simplilearn.com/animation-basics-course-free-skillup',
  },
];

const courseCardImage = '/doc-model.svg';

const CoursesSection = () => {
  return (
    <section
      id="courses"
      className="scroll-mt-[5rem] border-t border-slate-200/70 bg-white py-20 md:py-28 dark:border-white/10 dark:bg-[#061226]"
    >
      <div className="container">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Free Courses
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white lg:text-4xl lg:whitespace-nowrap">
            Will Skill : Free Online Courses – Explore & Learn
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Browse free courses from trusted platforms and open any course
            directly.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => (
            <article
              key={`${course.category}-${course.link}`}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-[#0d1a35]"
            >
              <div className="h-44 border-b border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.02]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={courseCardImage}
                  alt="Course document icon"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  {course.category}
                </p>
                <h3 className="mt-3 text-base font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                  {course.title}
                </h3>

                <div className="mt-auto pt-4">
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
                  >
                    View Course <ArrowRight className="h-4 w-4" />
                  </a>
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
