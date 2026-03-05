type Milestone = {
  year: number;
  title: string;
  description: string;
};

const milestones: Milestone[] = [
  {
    year: 2000,
    title: 'Wisdom Scholarship',
    description:
      ' പ്രൊഫഷണൽ വിദ്യാർത്ഥികൾക്ക് പ്രതിമാസ സ്കോളർഷിപ്പ്.9.5 കോടി വിതരണം ചെയ്തു. 584 വിദ്യാർഥികൾ ഇതുവരെ പദ്ധതിയുടെ ഭാഗമായി.',
  },
  {
    year: 2003,
    title: 'Wisdom Home',
    description:
      'ഉന്നത വിദ്യാഭ്യാസത്തിന് മൂല്യാധിഷ്‌ഠിത അന്തരീക്ഷത്തിൽ സൗഹൃദപരമായ താമസ സൗകര്യം.',
  },
  {
    year: 2004,
    title: 'P.C.C',
    description:
      'വിദ്യാർഥികളുടെ സമഗ്ര വളർച്ചയ്ക്ക് അനുയോജ്യമായ പഠനാന്തരീക്ഷം ഒരുക്കി 5-12 ക്ലാസുകൾക്ക് അക്കാദമിക് & മത്സരപരീക്ഷ പരിശീലനം.',
  },
  {
    year: 2005,
    title: 'Civil Service Academy',
    description:
      ' 10th/+2/ഡിഗ്രി പൂർത്തിയാക്കിയവർക്ക് വ്യത്യസ്‌ത മാതൃകകളിൽ സിവിൽ സർവീസ് പരിശീലനം.',
  },
  {
    year: 2006,
    title: 'Wisdom Hub',
    description:
      ' PSC/UPSC രജിസ്ട്രേഷൻ, സ്കോളർഷിപ്പ് മാർഗനിർദ്ദേശം തുടങ്ങി അക്കാദമിക-ജോലി സംബന്ധമായ മുഴുവൻ സേവനങ്ങൾക്കും ഗ്രാമീണ തലത്തിൽ ഡിജിറ്റൽ സർവീസ് ഹബ്ബുകൾ.',
  },
  {
    year: 2009,
    title: 'Excellency',
    description:
      'SSLC, +1, +2 വിദ്യാർഥികൾക്ക് 1000+ കേന്ദ്രങ്ങളിൽ മാതൃകാ പരീക്ഷയും, സബ്ജക്റ്റ് എക്സ്‌പോയും, എക്സസാം ടാക്ലിങ് ഒറിയൻ്റേഷനുകളും നൽകുന്നു.',
  },
  {
    year: 2010,
    title: 'Merit Evening / Edu Help',
    description:
      'വ്യത്യസ്‌ത പൊതുപരീക്ഷകളിൽ ഉന്നത വിജയം കൈവരിച്ചവരെ അനുമോദിക്കുന്നു. സാമ്പത്തികമായി പ്രയാസം അനുഭവിക്കുന്നവർക്ക് പഠന സഹായം നൽകുന്നു.',
  },
  {
    year: 2011,
    title: 'Career Counsellors',
    description:
      'ഗ്രാമീണ തലത്തിൽ വിദ്യാർഥികളുടെ ആപ്റ്റിറ്റ്യൂഡ് ടെസ്റ്റ് നടത്തി തുടർപഠനങ്ങൾക്ക് വഴികാട്ടുന്ന കരിയർ ക്ലിനിക്കുകൾക്ക് നേതൃത്തം നൽകാൻ കൗൺസിലർമാർക്ക് പരിശീലനം.',
  },
  {
    year: 2012,
    title: 'Y.S.F',
    description:
      'മികവ് തെളിയിച്ച ഹയർ സെക്കൻ്ററി വിദ്യാർഥികൾക്കുള്ള പരിശീലന കാമ്പുകൾ.',
  },
  {
    year: 2013,
    title: 'Hi-Sem (Chalo Delhi)',
    description:
      'കേന്ദ്ര സർവകലാശാലകളിലേക്കുള്ള UG & PG അഡ്‌മിഷൻ ഒറിയന്റേഷൻ പ്രോഗ്രാമുകൾ.',
  },
  {
    year: 2014,
    title: 'Career Summit',
    description:
      ' 120 ഡിവിഷൻ കേന്ദ്രങ്ങളിൽ സമഗ്ര കരിയർ ഓറിയൻ്റേഷൻ പ്രോഗ്രാമുകൾ.',
  },
  {
    year: 2015,
    title: 'Wisdom Guide',
    description:
      'സ്കോളർഷിപ്പ്, എൻട്രൻസ്, അഡ്‌മിഷൻ, ജോബ് പ്രൊഫൈൽ, ക്യാമ്പസ് സെലക്ഷൻ, സ്റ്റാർട്ട്അപ്പുകൾ ഉൾപ്പെട്ട സമ്പൂർണ്ണ കരിയർ ഗൈഡ്.',
  },
  {
    year: 2016,
    title: 'WEFI Bulletin',
    description:
      'ദിവസവും 25,000+ ബെനഫിഷ്യറികളിലേക്ക് എത്തുന്ന കരിയർ ബുള്ളറ്റിൻ.',
  },
  {
    year: 2017,
    title: 'Raise to IAS',
    description:
      'മുഴുവൻ ജില്ലകളിലും സിവിൽ സർവീസ് ഓറിയൻ്റേഷനും\nസംസ്ഥാനതലത്തിൽ വർക്ക്ഷോപ്പും.',
  },
  {
    year: 2018,
    title: 'Kudos',
    description:
      'എല്ലാ വർഷവും റിസൽറ്റ് ദിനത്തിൽ 10,000+ പൊതുപരീക്ഷ വിജയികളുടെ\nവീട്ടിൽ എത്തി അനുമോദനം.',
  },
  {
    year: 2019,
    title: 'Padanolsavam',
    description:
      'UP & HS വിദ്യാർത്ഥികൾക്ക് യൂണിറ്റ് തലത്തിൽ വർക്ക്ഷീറ്റുകൾ നൽകി\nപരീക്ഷ പരിശീലനം.',
  },
  {
    year: 2020,
    title: 'EduNest',
    description:
      'വിദ്യാർഥികളുടെ സമഗ്ര വികസനം ലക്ഷ്യമാക്കി ഗ്രാമീണ തലത്തിൽ\nപ്രൊഫഷണൽ പാരൻ്റിംഗ് & ഗൈഡൻസ് നൽകുന്ന പദ്ധതി.',
  },
  {
    year: 2021,
    title: 'Academic Conferences & HiQ',
    description:
      'മത്സര പരീക്ഷാർഥികൾക്ക് തയ്യാറെടുക്കുന്ന\nവിദ്യാർഥികൾക്ക് ദിവസവും കൺടെൻ്റ് നല്‌കി. ഗവേഷണ ഗ്രൂപ്പുകൾ രൂപപ്പെടുത്തി\nപിന്തുടർച്ച സഹായങ്ങൾ സംവിധാനിച്ചു.',
  },
  {
    year: 2022,
    title: 'Dream Catch',
    description:
      'ഗവൺമെൻ്റ് ജോലികൾക്ക് ഒറിയൻ്റേഷനും പിന്തുടർച്ച സഹായങ്ങളും.',
  },
  {
    year: 2023,
    title: 'Educine',
    description:
      'കരിയർ കൗൺസിലേർസുമായും ഫീൽഡ് എക്‌സ്പെർടുകളുമായും\nവിദ്യാർഥികൾക്ക് ആശയവിനിമയം നടത്തി സംശയ നിവാരണം നടത്താനുള്ള അവസരം.',
  },
  {
    year: 2024,
    title: 'Educational Conference & T.S.F',
    description:
      'പഞ്ചായത്ത് തല വിദ്യാഭ്യാസ സമ്മേളനം. 10th കഴിഞ്ഞ\nവിദ്യാർഥികൾക്ക് മെൻ്റർഷിപ്പ് നൽകി സ്വയം പര്യാപ്തരാക്കി.',
  },
  {
    year: 2025,
    title: 'DISHA & Glacia Vista',
    description:
      'മഹല്ല് വികസന പദ്ധതി രൂപപ്പെടുത്തി. HS വിദ്യാർത്ഥികൾക്ക്\nവ്യക്തിത്വ വികസന ക്യാമ്പ്.',
  },
  {
    year: 2026,
    title: 'Digital Academy & Beyond',
    description:
      'ഡിജിറ്റൽ അക്കാദമി, സമഗ്ര സ്‌കൂൾ പദ്ധതി, STEM\nമെൻ്റർഷിപ്പ്, Legend School, Students Village.',
  },
];

const chunkMilestones = <T,>(items: T[], size: number): T[][] => {
  const rows: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    rows.push(items.slice(index, index + size));
  }
  return rows;
};

const milestoneRows = chunkMilestones(milestones, 4);

const CategoriesSection = () => {
  return (
    <section
      id="milestones"
      className="scroll-mt-[5rem] overflow-hidden bg-gradient-to-b from-[#f8f9fc] via-[#f2f9ff] to-[#e7f2ff] pb-20 pt-12 md:py-28 dark:from-[#02081c] dark:via-[#071634] dark:to-[#0b1d44]"
    >
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            WEFI Journey
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white lg:text-4xl">
            Milestones Through The Years
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            A year-by-year snapshot of initiatives, scholarships, and academic
            support programs.
          </p>
        </div>

        <div className="mt-12 md:hidden">
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={`${milestone.year}-${milestone.title}-mobile`} className="relative">
                <div className="mb-2 flex flex-col items-center">
                  <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)]">
                    {milestone.year}
                  </span>
                  <span className="mt-3 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-[0_8px_18px_rgba(37,99,235,0.35)] dark:border-[#071634]" />
                  {index < milestones.length - 1 && (
                    <span className="mt-1 h-6 w-0 border-l-2 border-dashed border-primary/45" />
                  )}
                </div>

                <article className="rounded-2xl border border-primary/10 bg-white/90 px-5 py-4 shadow-sm dark:border-white/10 dark:bg-[#0d1a35]/90">
                  <h3 className="text-center text-sm font-semibold text-primary">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 px-2 text-center text-xs leading-relaxed text-slate-700 [text-wrap:balance] dark:text-slate-300">
                    {milestone.description}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 hidden md:block">
          <div className="mx-auto max-w-7xl space-y-10">
            {milestoneRows.map((row, rowIndex) => (
              <div key={`row-${rowIndex}`} className="px-1">
                <div className="relative">
                  <div className="absolute left-4 right-4 top-[2.75rem] h-1 rounded-full bg-gradient-to-r from-primary/60 via-sky-400 to-primary" />
                  <div
                    className="relative grid gap-5"
                    style={{
                      gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))`,
                    }}
                  >
                    {row.map((milestone) => (
                      <div
                        key={`${milestone.year}-${milestone.title}-point`}
                        className="flex flex-col items-center"
                      >
                        <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)]">
                          {milestone.year}
                        </span>
                        <span className="mt-3 h-6 w-6 rounded-full border-4 border-white bg-primary shadow-[0_8px_18px_rgba(37,99,235,0.35)] dark:border-[#071634]" />
                        <span className="mt-1 h-6 w-0 border-l-2 border-dashed border-primary/45" />
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="mt-2 grid gap-5"
                  style={{
                    gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))`,
                  }}
                >
                  {row.map((milestone) => (
                    <article
                      key={`${milestone.year}-${milestone.title}-card`}
                      className="rounded-2xl border border-primary/10 bg-white/90 px-5 py-4 shadow-sm dark:border-white/10 dark:bg-[#0d1a35]/90"
                    >
                      <h3 className="text-center text-sm font-semibold text-primary lg:text-base">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 px-2 text-center text-xs leading-relaxed text-slate-700 [text-wrap:balance] dark:text-slate-300">
                        {milestone.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
