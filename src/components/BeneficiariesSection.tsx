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

const cardPatterns = [
  '/beneficiaries/pattern-people.svg',
  '/beneficiaries/pattern-cash.svg',
  '/beneficiaries/pattern-cards.svg',
  '/beneficiaries/pattern-medal.svg',
  '/beneficiaries/pattern-book.svg',
  '/beneficiaries/pattern-compass.svg',
];

const rotationCycle = [-12, -7, -3, 2, 6, 10, 14];
const scaleCycle = [0.9, 0.96, 1, 1.04, 1.08];
const opacityCycle = [0.2, 0.24, 0.28, 0.32];

const getPatternStyle = (index: number) => ({
  backgroundImage: `url(${cardPatterns[index % cardPatterns.length]})`,
  backgroundSize: `${132 + (index % 5) * 12}px auto`,
  backgroundPosition: 'right -8px bottom -10px',
  transformOrigin: 'bottom right',
  transform: `rotate(${rotationCycle[index % rotationCycle.length]}deg) scale(${scaleCycle[index % scaleCycle.length]})`,
  opacity: opacityCycle[index % opacityCycle.length],
});

const BeneficiariesSection = () => {
  return (
    <section
      id="beneficiaries"
      className="relative isolate scroll-mt-[5rem] overflow-hidden border-t border-white/10 py-20 md:py-24"
    >
      <div className="absolute inset-0 bg-[#433fbd]" />
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-100/90">
            Impact Numbers
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white lg:text-4xl">
            Beneficiaries
          </h2>
          <p className="mt-4 text-base leading-relaxed text-indigo-100/90">
            WEFI initiatives have reached learners and aspirants across academic,
            career, and mentorship programs.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {beneficiaries.map((item, index) => (
            <article
              key={`${item.value}-${item.description}`}
              className="group relative isolate flex min-h-[170px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] px-5 py-6 text-center shadow-[0_14px_38px_rgba(8,20,84,0.3)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.1]"
            >
              <div
                className="pointer-events-none absolute bottom-0 right-0 h-[74%] w-[64%] bg-no-repeat transition-all duration-300"
                style={getPatternStyle(index)}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-white/10 via-transparent to-transparent" />

              <p className="relative z-10 text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)] lg:text-4xl">
                {item.value}
              </p>
              <p className="relative z-10 mt-3 text-sm leading-relaxed text-indigo-100/95 [text-wrap:balance]">
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
