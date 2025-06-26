export default function Banner() {
  return (
    <section id="banner" className="bg-midnight-navy h-screen pt-28 md:pt-0">
      <div className="container mx-auto flex px-10 lg:py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start text-center md:text-left mb-10 md:mb-0">
        <h1 className="font-mont font-bold text-off-white text-5xl sm:text-8xl tracking-tight">
          <span className="text-sea-mist">Growth</span> begins with your <span className="text-copper-rust">people</span>
        </h1>

        <h2 className="mt-8 text-xl sm:text-3xl text-off-white/90 max-w-2xl leading-relaxed">
          HR & Management Consulting rooted in cultural insight, people strategy, and lasting alignment between teams and company goals.
        </h2>
        </div>
      </div>
    </section>
  );
}
