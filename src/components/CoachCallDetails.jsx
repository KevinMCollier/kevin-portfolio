export default function CoachCallDetails() {
  /* -------- shared helpers -------- */
  const Check = (
    <svg
      className="h-5 w-5 flex-shrink-0 text-midnight-navy translate-y-[2px]"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.762 9.762 0 0 0 12 2.25Zm4.53 7.28a.75.75 0 0 1 0 1.06l-5.31 5.32a.75.75 0 0 1-1.06 0l-2.47-2.47a.75.75 0 0 1 1.06-1.06l1.94 1.94 4.78-4.79a.75.75 0 0 1 1.06 0Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const bullets = [
    '20 h saved every month for a 10-person team',
    '100 % external & unbiased perspective',
    'Built on proven leadership frameworks',
    'Craft a world-class culture everyone wants to join',
  ];

  return (
    <section className="bg-off-white py-20 sm:py-24">
      {/* ---------- GRID ---------- */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 grid gap-12 md:gap-16 md:grid-cols-2">
        {/* LEFT — headline + session themes */}
        <div>
          <h2 className="font-mont font-bold text-3xl xs:text-4xl md:text-5xl leading-tight break-words">
            Ongoing 1-on-1&nbsp;Coaching
            <span className="block mt-3 text-copper-rust">
              &amp; Monthly Culture Reports
            </span>
          </h2>

          <p className="mt-6 text-graphite text-lg sm:text-xl leading-relaxed">
            Every session is built to help your people —
          </p>

          <ul className="mt-2 space-y-3 text-graphite text-lg sm:text-xl leading-relaxed list-disc list-inside">
            <li>
              <strong>Reflect &amp; Reframe</strong> challenges into opportunities
            </li>
            <li>
              Find <strong>Meaning &amp; Motivation</strong> in daily work
            </li>
            <li>
              Set <strong>Personal Goals</strong> that drive long-term engagement
            </li>
          </ul>
        </div>

        {/* RIGHT — benefits + CTA */}
        <div>
          <h3 className="text-midnight-navy font-semibold text-2xl mb-6">
            Key Benefits
          </h3>

          <div className="space-y-5">
            {bullets.map((text) => (
              <div key={text} className="flex items-start gap-3">
                {Check}
                <p className="text-graphite text-lg sm:text-xl leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-midnight-navy text-lg sm:text-xl font-medium">
              <em>The Coach Call is launching soon — reserve your spot:</em>
            </p>

            <a
              href="#contact"
              className="inline-block mt-4 bg-copper-rust hover:bg-copper-rust/90 text-off-white font-semibold px-8 py-3 rounded-lg transition"
            >
              Join&nbsp;the&nbsp;wait-list
            </a>
          </div>
        </div>
      </div>

      {/* ---------- ADDITIONAL SERVICES ---------- */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 mt-14">
        <hr className="border-t border-stone-grey" />
        <p className="mt-4 text-midnight-navy font-mont font-semibold text-base sm:text-lg leading-snug">
          Additional&nbsp;Services:&nbsp;
          <span className="text-graphite font-normal">
            Group workshops &amp; team training · Leadership development ·
            Strategic onboarding · Employer branding
          </span>
        </p>
        <p className="mt-1 text-xs sm:text-sm text-graphite italic">
          All offerings are in pre-launch. Join the early-access list for
          priority scheduling when slots open.
        </p>
        <hr className="mt-6 border-t border-stone-grey" />
      </div>
    </section>
  );
}
