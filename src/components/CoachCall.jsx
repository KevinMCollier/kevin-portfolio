import CoachGraphic from "/public/coach-call-graphic.svg";

export default function CoachCall() {
  return (
    <section id="CoachCall" className="bg-coach-blue scroll-mt-24 md:scroll-mt-28">
      <div
        className="
          mx-auto max-w-7xl
          flex flex-col md:flex-row
          justify-center items-center
          px-6 lg:px-12
          py-15 md:py-14 lg:py-16
          gap-10 lg:gap-14            /* space between text & icon */
          text-center md:text-left
        "
      >
        {/* headline */}
        <div
          className="
            flex flex-col space-y-4
            font-mont font-black tracking-tight
            leading-[1.12]
            text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem]
            text-black
          "
        >
          <span>THE</span>
          <span>COACH</span>
          <span>CALL</span>
        </div>

        {/* graphic */}
        <img
          src={CoachGraphic}
          alt=""
          className="
            flex-none
            w-28 sm:w-36 md:w-40 lg:w-52
            h-auto
            lg:-mt-12            /* lift ~48 px on large screens */
          "
          loading="lazy"
        />
      </div>
    </section>
  );
}
