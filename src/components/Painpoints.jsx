import { Trans, useTranslation } from "react-i18next";

export default function Painpoints() {
  const { t } = useTranslation("painpoints");
  const points = t("points", { returnObjects: true }) || [];

  return (
    <section
      id="painpoints"
      className="border-t border-white/10 bg-white text-midnight-navy"
    >
      <div className="container mx-auto px-5 py-20">
        <h2 className="font-mont font-bold text-4xl sm:text-5xl">
          {t("heading")}
        </h2>

        <ul className="mt-8 space-y-3">
          {points.map((_, i) => (
            <li key={i} className="flex gap-3">
              <span
                aria-hidden
                className="mt-2 h-2 w-2 rounded-full bg-copper-rust inline-block"
              />
              <span className="text-lg sm:text-xl leading-relaxed">
                <Trans
                  i18nKey={`points.${i}`}
                  ns="painpoints"
                  components={{ strong: <strong className="font-bold" /> }}
                />
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-graphite text-base sm:text-lg max-w-prose">
          {t("subtext")}
        </p>
      </div>
    </section>
  );
}
