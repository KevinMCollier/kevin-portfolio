import { useTranslation } from "react-i18next";

export default function Audience() {
  const { t } = useTranslation("audience");
  const { t: tc } = useTranslation("contact");

  const teamPoints = t("teams.points", { returnObjects: true }) || [];
  const indivPoints = t("individuals.points", { returnObjects: true }) || [];

  const openCalendly = () => {
    if (window?.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/kevin-collier-consulting/30min",
      });
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="who" className="border-t border-white/10 bg-white text-midnight-navy">
      <div className="container mx-auto px-5 py-20">
        <h2 className="font-mont font-bold text-4xl sm:text-5xl">{t("heading")}</h2>
        <p className="mt-3 max-w-2xl text-lg text-midnight-navy/80">{t("intro")}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-stone-grey/60 bg-gray-50 p-6">
            <h3 className="text-lg font-semibold">{t("teams.title")}</h3>
            <ul className="mt-3 space-y-2">
              {teamPoints.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-2 w-2 rounded-full bg-copper-rust inline-block" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-stone-grey/60 bg-gray-50 p-6">
            <h3 className="text-lg font-semibold">{t("individuals.title")}</h3>
            <ul className="mt-3 space-y-2">
              {indivPoints.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-2 w-2 rounded-full bg-copper-rust inline-block" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={openCalendly}
            className="inline-flex items-center justify-center text-base font-semibold px-6 py-2 rounded-lg transition bg-copper-rust text-off-white hover:bg-copper-rust/90"
          >
            {tc("cta.call")}
          </button>
          <a
            href="#contact"
            className="inline-flex items-center justify-center text-base font-semibold px-6 py-2 rounded-lg transition border border-midnight-navy text-midnight-navy hover:bg-midnight-navy hover:text-off-white"
          >
            {tc("cta.inquiry")}
          </a>
        </div>
      </div>
    </section>
  );
}
