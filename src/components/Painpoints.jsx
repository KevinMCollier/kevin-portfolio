import { useTranslation } from "react-i18next";

export default function Painpoints() {
  const { t } = useTranslation("audience");

  const teamPoints = t("teams.points", { returnObjects: true }) || [];
  const indivPoints = t("individuals.points", { returnObjects: true }) || [];


  return (
    <section id="who" className="border-t border-white/10 bg-white text-midnight-navy">
      <div className="container mx-auto px-5 py-20">
        <h2 className="font-mont font-bold text-4xl sm:text-5xl">{t("heading")}</h2>

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
      </div>
    </section>
  );
}
