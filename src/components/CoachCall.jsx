export default function CoachCall() {
  return (
    <section className="bg-coach-blue">
      <div
        className="
          mx-auto max-w-7xl
          flex            /* default = justify-start */
          px-6 lg:px-12
          py-24 lg:py-32
        "
      >
        <h1
          className="
            font-mont font-black leading-[0.9] tracking-tight
            text-5xl sm:text-6xl md:text-7xl lg:text-[7rem]  /* one notch smaller */
            ml-8 lg:ml-16                                    /* slight inward nudge */
            text-black
          "
        >
          THE<br />
          COACH<br />
          CALL
        </h1>
      </div>
    </section>
  );
}
