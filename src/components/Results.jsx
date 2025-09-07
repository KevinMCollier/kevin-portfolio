import { useTranslation } from "react-i18next";

export default function Results() {
  const { t } = useTranslation("home");
  const metrics = t("results.metrics", { returnObjects: true }) || [];

  return (
    <section id="results" className="bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">{t("results.heading")}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div key={i} className="rounded-2xl border border-slate-700 p-6">
              <p className="text-2xl font-extrabold text-orange-400">{m.kpi}</p>
              <p className="mt-2 text-sm text-slate-300">{m.note}</p>
            </div>
          ))}
        </div>
        <a href="#contact" className="mt-8 inline-block rounded-2xl border border-slate-600 px-5 py-3 font-semibold hover:bg-slate-800">
          {t("results.cta")}
        </a>
      </div>
    </section>
  );
}
