export default function Banner() {
  return (
    <section id="banner" className="bg-midnight-navy h-screen">
      <div className="container mx-auto flex px-10 lg:py-20 md:flex-row flex-col items center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font text-5xl sm:text-8xl sm:mt-5 font-bold text-gray-100 tracking-wide">
          Listen. Align. Grow.
        </h1>
        <h2 className="title-font text-2xl sm:text-4xl sm:mt-5 font-bold text-gray-100 tracking-wide">
          Finding alignment between your people and your business strategy
        </h2>
        </div>
      </div>
    </section>
  );
}
