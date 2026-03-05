type Beneficiary = {
  value: string;
  description: string;
};

const beneficiaries: Beneficiary[] = [
  {
    value: '11 ലക്ഷം',
    description: 'വിദ്യാർഥികൾ Excellency-യുടെ ഭാഗമായി.',
  },
  {
    value: '25K',
    description: 'ബെനഫിഷ്യറികൾക്ക് ദിവസവും കരിയർ വിവരങ്ങൾ കൈമാറുന്നു.',
  },
  {
    value: '5 ലക്ഷം',
    description: 'വിദ്യാർഥികളുടെ കരിയർ ഫിക്സ് ചെയ്തു.',
  },
  {
    value: '3.5 ലക്ഷം',
    description: 'വിദ്യാർഥികൾ ആപ്റ്റിട്യൂഡ് ടെസ്റ്റിൻ്റെ ഭാഗമായി.',
  },
  {
    value: '260+',
    description: 'പ്രൊഫഷണൽ ഫീൽഡുകളിൽ എക്‌സ്‌പീരിയൻഷ്യൽ എക്സ്‌പേർട്ടുകൾ.',
  },
  {
    value: '90',
    description: 'പരിശീലനം ലഭിച്ച കരിയർ കൗൺസിലർമാർ.',
  },
  {
    value: '684',
    description: 'പ്രൊഫഷണൽ വിദ്യാർഥികൾക്ക് WEFI സ്കോളർഷിപ്പ്.',
  },
  {
    value: '48',
    description:
      'എമർജൻസി എഡ്യുകേഷണൽ സപ്പോർട്ടും മെൻ്റർഷിപ്പോടെയുള്ള സ്കോളർഷിപ്പും.',
  },
  {
    value: '188',
    description: 'നിയമ പഠന പ്രവേശന പരീക്ഷ പരിശീലനം.',
  },
  {
    value: '70',
    description: 'ദേശീയ-അന്തർദേശീയ സ്കോളർഷിപ്പുകളിൽ പരിശീലനം നേടിയവർ.',
  },
  {
    value: '29',
    description: 'വ്യത്യസ്ത ഫെല്ലോഷിപ്പുകളിൽ പരിശീലനം നേടിയവർ.',
  },
  {
    value: '1456',
    description: 'സിവിൽ സർവീസ് പ്രീകോച്ചിംഗിൻ്റെ ഭാഗമായവർ.',
  },
  {
    value: '250',
    description: 'സിവിൽ ഹബ്ബിൻ്റെ ഭാഗമായി പരിശീലനം നേടിയവർ.',
  },
  {
    value: '148',
    description: 'സിവിൽ സർവീസ് അക്കാദമിയുടെ ഭാഗമായവർ.',
  },
  {
    value: '12K',
    description:
      'കോമ്പിറ്റേറ്റീവ് സർക്കിളിൻ്റെ ഭാഗമായി പി. എസ്സ്. സി പരിശീലനം നേടിയവർ.',
  },
  {
    value: '80',
    description: 'പരിശീലനം ലഭിച്ച മോട്ടിവേഷണൽ ട്രൈനർമാർ.',
  },
  {
    value: '8 ലക്ഷം',
    description: 'വിദ്യാർഥികൾ മെറിറ്റ് ഈവിനിംഗിന്റെ ഭാഗമായി.',
  },
  {
    value: '108',
    description: 'മത്സര പരീക്ഷക്ക് വിദ്യാർഥികളെ ഒരുക്കുന്ന റിസോഴ്‌സ് പേർസൺസ്.',
  },
  {
    value: '24',
    description:
      'നഗരങ്ങളിലും കലാലയങ്ങൾക്ക് അടുത്തും ധാർമ്മിക അന്തരീക്ഷത്തിൽ വിസ்‌ഡം ഹോംസ്.',
  },
  {
    value: '586',
    description:
      'HiSem-ന്റെ ഭാഗമായി കേന്ദ്ര സർവ്വകലാശാലകളിൽ പ്രവേശനം നേടിയവർ.',
  },
  {
    value: '2015 മുതൽ',
    description: 'കരിയർ മാർഗ്ഗനിർദ്ദേശം നൽകുന്ന വിസ്ഡം ഗൈഡ്.',
  },
];

const BeneficiariesSection = () => {
  return (
    <section
      id="beneficiaries"
      className="border-t border-slate-200/70 bg-white py-20 md:py-24 dark:border-white/10 dark:bg-[#061226]"
    >
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Impact Numbers
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white lg:text-4xl">
            Beneficiaries
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            WEFI initiatives have reached learners and aspirants across academic,
            career, and mentorship programs.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {beneficiaries.map((item) => (
            <article
              key={`${item.value}-${item.description}`}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/80 px-5 py-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:from-[#0d1a35] dark:to-[#102145]"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary/70 via-sky-400 to-primary" />
              <div className="flex justify-center">
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-extrabold text-primary">
                  {item.value}
                </span>
              </div>
              <p className="mt-3 text-center text-sm leading-relaxed text-slate-700 [text-wrap:balance] dark:text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeneficiariesSection;
