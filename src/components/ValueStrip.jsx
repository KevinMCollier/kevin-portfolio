import React from "react";
import { useTranslation } from "react-i18next";

export default function ValueStrip() {
  const { t } = useTranslation("home");
  const bullets = t("value.bullets", { returnObjects: true }) || [];

  return (
    <section id="value" className="bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">{t("value.heading")}</h2>
        <p className="mt-4 max-w-3xl text-slate-300">{t("value.body")}</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {bullets.map((b, i) => (
            <li key={i} className="rounded-2xl border border-slate-700 p-5">
              <p className="font-semibold">{b.title}</p>
              <p className="text-sm text-slate-300">{b.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}