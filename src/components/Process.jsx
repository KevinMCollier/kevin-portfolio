import { useTranslation } from 'react-i18next';

export default function HowIHelp() {
  const { t } = useTranslation('howIHelp');

  const keys = ['leadership', 'crossCultural', 'earlyCareer', 'engagement'];

  return (
    <section id="how-i-help" className="bg-off-white py-20">
      <div className="container mx-auto px-5">
        <h2 className="font-mont font-black text-copper-rust text-3xl sm:text-5xl mb-10">
          {t('heading')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {keys.map((k) => (
            <div key={k} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-mont font-extrabold text-midnight-navy text-2xl sm:text-3xl">
                {t(`items.${k}.title`)}
              </h3>
              <p className="mt-2 text-graphite text-base sm:text-lg leading-relaxed">
                {t(`items.${k}.desc`)}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-graphite text-base sm:text-lg">
          {t('ctaLine')}
        </p>
      </div>
    </section>
  );
}
