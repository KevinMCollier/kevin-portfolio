export default function About() {
  return (
    <section id="about" className="bg-stone-grey text-midnight-navy">
      <div className="container mx-auto flex px-5 pt-20 pb-10 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
          <img
            className="rounded-full mx-auto w-64 h-64 object-cover"
            src="/kevin-profile.jpg"
            alt="Kevin Collier profile"
            loading="lazy"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 flex flex-col sm:items-start">
          <h1 className="font-mont font-bold text-4xl sm:text-5xl mb-6">About Kevin</h1>
          <p className="max-w-[50ch] text-xl leading-relaxed">
            With 11+ years in education and business leadership, I’ve helped over 400 professionals in Japan unlock their potential through consistent, meaningful dialogue.
            <br /><br />
            As a former People Ops lead with an MBA, I design coaching programs that replace outdated performance reviews with monthly reflection and action planning—reducing burnout, improving engagement, and building trust.
          </p>
        </div>
      </div>
    </section>
  );
}
