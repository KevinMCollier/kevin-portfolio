const steps = [
  { title: 'Listen and Understand', desc: 'We start by uncovering motivations, blockers, and ambitions.' },
  { title: 'Align Vision', desc: 'Insights translate into clear priorities that link purpose to company goals.' },
  { title: 'Thrive Together', desc: 'Action plans, coaching, and feedback loops turn alignment into results.' },
];

export default function Approach() {
  return (
    <>
      <section className="bg-off-white py-20 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-mont font-black text-copper-rust text-3xl sm:text-5xl mb-8">
            Our&nbsp;Approach
          </h2>

          <ul className="space-y-8 pl-6 sm:pl-8">
            {steps.map(({ title, desc }) => (
              <li key={title}>
                <h3 className="font-mont font-extrabold text-midnight-navy text-3xl sm:text-4xl">
                  {title}
                </h3>
                <p className="mt-2 text-graphite text-base sm:text-xl max-w-prose leading-relaxed">
                  {desc}
                </p>
              </li>
            ))}
          </ul>

        </div>
      </section>

      <section className="bg-midnight-navy py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-off-white text-2xl sm:text-3xl text-center font-medium">
            What is the real cost of <span className="text-sea-mist font-semibold">disengagement</span>?
          </p>
        </div>
      </section>
    </>
  );
}
