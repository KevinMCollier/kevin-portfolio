import './Global.css';

export default function About() {

  return (
    <section id="about" className="bg-sand-leather text-gray-800">
      <div className="container mx-auto flex px-5 pt-20 pb-10 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0 items-center">
          <img
            className="object-cover object-center rounded-full mx-auto w-64 h-64"
            alt="profile"
            src="./kevin-profile.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 flex flex-col sm:items-start md:mb-0">
          <h1 className="title-font sm:text-5xl text-l mb-4 font-bold text-gray-800 text-center md:text-left">
            About Kevin
          </h1>
          <p className="max-w-[50ch] text-base leading-relaxed">
            With 11+ years in education and business leadership, I’ve helped over 400 professionals in Japan unlock their potential through consistent, meaningful dialogue.
            <br />
            <br />
            As a former People Ops lead with an MBA, I’ve designed and led coaching programs that replace outdated performance reviews with monthly reflection and action planning. This approach has reduced burnout, improved engagement, and built trust across diverse teams.
            <br />
            <br />
            My sessions blend cultural fluency, strategic insight, and psychological safety—earning me a reputation as a go-to partner for high-performing teams navigating growth and change.
          </p>
        </div>
      </div>
      <div className="container mx-auto flex px-10 md:py-4 md:flex-row flex-col items-center justify-center">

      </div>
    </section>
  );
}
