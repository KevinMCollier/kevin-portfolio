/* src/components/CoachCallDetails.jsx
   Simplified “Additional Services” into a single-line teaser with horizontal rule, minimal space.
*/

export default function CoachCallDetails() {
  /** check-icon (navy) */
  const Check = (
    <svg
      className="h-6 w-6 flex-shrink-0 text-midnight-navy"
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
    <section className="bg-off-white py-24 lg:py-28">
      {/* ================= MAIN GRID ================= */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-16 lg:grid-cols-2">
        {/* LEFT — headline & session themes */}
        <div>
          {/* headline */}
          <h2 className="font-mont font-bold text-midnight-navy text-4xl sm:text-3xl md:text-4xl leading-tight mb-8">
            Ongoing&nbsp;1-on-1&nbsp;Coaching
            <br />
            <span className="block mt-4 text-copper-rust">&amp;&nbsp;Monthly&nbsp;Culture&nbsp;Reports</span>
          </h2>

          <p className="text-graphite text-xl leading-relaxed">
            Every session is built to help your people&nbsp;—
          </p>

          <ul className="mt-8 space-y-4 text-graphite text-xl leading-relaxed list-disc list-inside">
            <li>
              <strong>Reflect&nbsp;&amp;&nbsp;Reframe</strong> challenges into opportunities
            </li>
            <li>
              Find <strong>Meaning&nbsp;&amp;&nbsp;Motivation</strong> in daily work
            </li>
            <li>
              Set <strong>Personal Goals</strong> that drive long-term engagement
            </li>
          </ul>
        </div>

        {/* RIGHT — benefits + CTA */}
        <div>
          {/* small sub-title to differentiate column */}
          <h3 className="text-midnight-navy font-semibold text-2xl mb-6">Key&nbsp;Benefits</h3>

          <div className="space-y-6">
            {bullets.map((text) => (
              <div key={text} className="flex items-start gap-4">
                {Check}
                <p className="text-graphite text-xl leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* call-to-action */}
          <div className="mt-12">
            <p className="text-midnight-navy text-xl font-medium leading-relaxed">
              <em>The Coach Call is launching soon—reserve your spot:</em>
            </p>
            <a
              href="#contact" /* swap for mailing-list URL if you have one */
              className="inline-block mt-4 bg-copper-rust hover:bg-copper-rust/90 text-off-white font-semibold px-8 py-3 rounded-lg transition"
            >
              Join the wait-list
            </a>
          </div>
        </div>
      </div>

      {/* ================= ADDITIONAL SERVICES TEASER ================= */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-14">
        <hr className="border-t border-stone-grey" />
        <p className="mt-4 text-midnight-navy font-mont font-semibold text-lg">
          Additional Services:&nbsp;
          <span className="text-graphite font-normal">
            Group workshops &amp; team training&nbsp;&middot;&nbsp;Leadership development&nbsp;&middot;&nbsp;Strategic onboarding&nbsp;&middot;&nbsp;Employer branding
          </span>
        </p>
        <p className="mt-2 text-sm text-graphite italic">
          All offerings are in pre-launch. Join the early-access list for priority scheduling when slots open.
        </p>
        <hr className="mt-6 border-t border-stone-grey" />
      </div>
    </section>
  );
}
