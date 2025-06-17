const stats = [
  { value: '15–30 min', label: 'Ideal weekly 1:1 cadence—but most teams can’t keep up. (Gallup)' },
  { value: '4 hours',   label: 'Managers lose this each week on culture conflicts. (Myers-Briggs Institute)' },
  { value: '30 hours',  label: 'Time per resignation: interviewing & onboarding. (Stratus HR)' },
  { value: '$8.8 T',    label: 'Cost of disengaged employees to the global economy. (Gallup 2024)' },
  { value: '6× more',   label: 'Likely to quit when burned out. (McKinsey)' },
  { value: '200 %',     label: 'Cost to replace a key leader (% of salary). Front-line avg 33 %. (Gallup)' },
  { value: '4× more',   label: 'Engagement when employees get regular feedback. (Gallup)' },
];

export default function AboutCollier() {
  return (
    <>
      {/* ——— TWO-COLUMN OPENER ——— */}
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12">
          {/* Left side: 3‑Step Method (broad, works across all services) */}
          <div className="lg:w-1/2 space-y-8">
            {[
              {
                step: '1',
                title: 'Listen',
                desc: 'We start by understanding people—motivations, blockers, and ambitions.'
              },
              {
                step: '2',
                title: 'Align',
                desc: 'Insights translate into clear priorities that link individual purpose to company goals.'
              },
              {
                step: '3',
                title: 'Grow',
                desc: 'Action plans, coaching, and feedback loops turn alignment into lasting results.'
              }
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex items-start gap-4">
                <span className="text-midnight-navy text-3xl font-bold leading-none">{step}</span>
                <div>
                  <p className="font-semibold text-lg text-gray-800">{title}</p>
                  <p className="text-gray-700 text-sm leading-snug">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side: prompting question */}
          <div className="lg:w-1/2 flex items-center">
            <p className="text-xl lg:text-2xl font-medium text-midnight-navy leading-snug">
              What would it cost your team if engagement dipped even 5&nbsp;%?
            </p>
          </div>
        </div>
      </section>

      {/* ——— STATS GRID ——— */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-midnight-navy">{s.value}</p>
              <p className="mt-2 text-base text-gray-700">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ——— PURPOSE PARAGRAPH ——— */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-lg lg:text-xl leading-relaxed text-gray-800">
          <p>
            Collier Consulting exists to help teams master the people-side of business.
            Building a culture of purpose, respect, and belonging takes time and energy—
            and pays back in engagement, retention, and real business impact.
            We shoulder the load with data-driven insight, hands-on coaching,
            and a human-first philosophy.
          </p>
        </div>
      </section>
    </>
  );
}
