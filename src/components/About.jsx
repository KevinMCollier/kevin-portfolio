export default function About() {
  return (
    <section id="about" className="bg-stone-grey text-midnight-navy">
      <div className="container mx-auto flex px-5 pt-20 pb-20 md:flex-row flex-col items-center">
        {/* -------- Photo + Highlights -------- */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-12 md:mb-0 flex flex-col items-center">
          <img
            className="rounded-full w-64 h-64 object-cover"
            src="/kevin-profile.jpg"
            alt="Kevin Collier profile"
            loading="lazy"
          />

          {/* highlight block */}
          <ul
            className="
              list-disc w-64
              mt-4 space-y-1
              text-sm italic text-midnight-navy/80
              text-left
            "
          >
            <li>MBA, Eller College of Management</li>

            <li>
              <strong>People &amp; Culture Lead</strong>
              <ul className="list-disc ml-4 mt-1 space-y-1">
                <li>Culture &amp; employer branding</li>
                <li>Hired / onboarded 400+ staff</li>
                <li>L&amp;D &amp; leadership coaching</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* -------- Narrative Copy -------- */}
        <div className="lg:flex-grow md:w-1/2 flex flex-col sm:items-start">
          <h1 className="font-mont font-bold text-4xl sm:text-5xl mb-6">
            About&nbsp;Kevin
          </h1>

          {/* credibility */}
          <p className="max-w-[55ch] text-xl leading-relaxed mb-6">
            With an MBA from the University&nbsp;of&nbsp;Arizona and 11&nbsp;years in
            education&nbsp;&amp;&nbsp;business leadership, I’ve guided 400+ professionals to
            higher engagement and performance. I design L&amp;D programs and leadership
            strategy that turn monthly reflection into measurable business gains—cutting
            burnout and building trust across teams.
          </p>

          {/* personal story & mission */}
          <p className="max-w-[55ch] text-xl leading-relaxed mb-6">
            Growing up in an Asian-American household in Los&nbsp;Angeles, adapting to life in
            Arizona, and later living across Europe taught me how culture shapes
            collaboration. Now based in Tokyo, I help companies in Japan—both Japanese and
            international—navigate an increasingly diverse workforce. I work to preserve
            the best of Japanese work culture while welcoming fresh perspectives,
            bridging communication gaps, and turning that variety into sustainable growth.
          </p>

          <p className="text-lg font-semibold">
            My mission is to align people, culture, and strategy so everyone thrives.
          </p>
        </div>
      </div>
    </section>
  );
}
