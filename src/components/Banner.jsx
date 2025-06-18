export default function Banner() {
  return (
    <section id="banner" className="bg-midnight-navy h-screen">
      <div className="container mx-auto flex px-10 lg:py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

          {/* Headline */}
          <h1 className="title-font text-5xl sm:text-8xl sm:mt-5 font-bold text-off-white tracking-tight">
            We&apos;re in the <span className="text-sea-mist">people</span> business
          </h1>

          {/* Sub-headline */}
          <h2 className="mt-8 text-xl sm:text-3xl font-medium text-off-white/90 max-w-2xl leading-relaxed">
            HR &amp; Management Consulting that aligns your team with long-term strategy
            through <span className="text-copper-rust font-semibold">cultural insights</span>, staff engagement,
            and professional development.
          </h2>

        </div>
      </div>
    </section>
  );
}
