/* src/components/AboutCollier.jsx */
import StatsGrid from './StatsGrid';

const steps = [
  { title: 'Listen and Understand', desc: 'We start by understanding people—motivations, blockers, and ambitions.' },
  { title: 'Align Vision',  desc: 'Insights translate into clear priorities that link purpose to company goals.' },
  { title: 'Thrive Together',   desc: 'Action plans, coaching, and feedback loops turn alignment into results.' },
];

export default function AboutCollier() {
  return (
    <>
      {/* OUR VALUES + THREE STEPS */}
      <section className="bg-off-white dark:bg-slate-900 py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* headline */}
          <h2
            className="
              font-mont font-black tracking-tight
              text-copper-rust dark:text-off-white
              text-3xl sm:text-5xl leading-tight
              -ml-20           /* big shove left (~80 px) */
              mb-4             /* tighter gap above “Listen” */
            "
          >
            Our&nbsp;Values
          </h2>

          {/* steps */}
          <ul className="space-y-8">
            {steps.map(({ title, desc }) => (
              <li key={title}>
                <h3 className="[font-size:clamp(2.25rem,1rem+3vw,4rem)] font-extrabold tracking-tight text-midnight-navy dark:text-off-white">
                  {title}
                </h3>
                <p className="mt-2 text-base sm:text-xl text-graphite dark:text-slate-300 max-w-prose leading-relaxed">
                  {desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* QUESTION PROMPT */}
      <section className="bg-midnight-navy pt-20 lg:pt-24 pb-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="[font-size:clamp(1.75rem,1rem+2vw,3rem)] text-center font-medium leading-snug text-off-white">
            What is the real cost of <span className="text-sea-mist font-semibold">disengagement</span>?
          </p>
        </div>
      </section>

      {/* STATS GRID */}
      <StatsGrid />
    </>
  );
}
