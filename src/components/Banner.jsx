export default function Banner() {
  return (
    <section id="banner" className="bg-deep-cyan h-screen">
      <div className="container mx-auto flex px-10 lg:py-20 md:flex-row flex-col items center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-3x sm:mt-5 font-bold text-gray-100 tracking-wide">
            I&apos;m Kevin and I build apps.
            <br className="hidden lg:inline-block" /> I want to improve the way people learn through technology.
          </h1>
          {/* <p className="mb-1 leading-relaxed">
            Chances are I am also eating a piece of cake right now.
          </p>
          <p className="mb-8 leading-relaxed">
            When I am not coding, you can find me at one of my favorite restaurants across Tokyo.
          </p> */}
        </div>
        <div className="sm:mt-5 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
